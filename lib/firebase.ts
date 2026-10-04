import { getApps, initializeApp, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

// Interface definitions for persistence
export interface OrderRecord {
  orderId: string;
  paymentId?: string;
  signature?: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  currency: string;
  status: 'created' | 'paid' | 'failed' | 'refunded';
  token?: string;
  tokenExpiresAt?: string;
  createdAt: string;
  verifiedAt?: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface DownloadLogRecord {
  orderId: string;
  email: string;
  tokenHash: string;
  ipHash: string;
  userAgent: string;
  fileName: string;
  status: 'success' | 'invalid_token' | 'expired';
  timestamp: string;
}

export interface WaitlistRecord {
  email: string;
  source: string;
  status: 'active';
  createdAt: string;
}

export interface InquiryRecord {
  name: string;
  email: string;
  message: string;
  status: 'new' | 'reviewed' | 'resolved';
  createdAt: string;
}

export interface AuditLogRecord {
  eventType: 'ORDER_INITIALIZED' | 'PAYMENT_VERIFIED' | 'PAYMENT_FAILED' | 'DOWNLOAD_EXECUTED' | 'WAITLIST_SUBSCRIBED' | 'INQUIRY_RECEIVED';
  details: Record<string, unknown>;
  ipHash?: string;
  timestamp: string;
}

// In-memory fallback cache when Firebase credentials are not yet pasted
const memoryStore = {
  orders: new Map<string, OrderRecord>(),
  downloadLogs: [] as DownloadLogRecord[],
  waitlist: new Map<string, WaitlistRecord>(),
  inquiries: [] as InquiryRecord[],
  auditLogs: [] as AuditLogRecord[],
};

// Initialize Firebase Admin App
function getFirebaseAdminApp(): App | null {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  // Handle newline escapes in private key (standard for Vercel and .env files)
  if (privateKey.includes('\\n')) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  try {
    return initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  } catch (error) {
    console.error('[Firebase] Initialization error:', error);
    return null;
  }
}

export function isFirebaseConfigured(): boolean {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  return Boolean(projectId && clientEmail && privateKey);
}

function getFirestoreDb(): Firestore | null {
  const app = getFirebaseAdminApp();
  if (!app) return null;
  return getFirestore(app);
}

// ============================================================================
// ORDER REPOSITORY
// ============================================================================

export async function createOrderRecord(order: OrderRecord): Promise<void> {
  const db = getFirestoreDb();
  if (db) {
    try {
      await db.collection('orders').doc(order.orderId).set(order);
      await logAuditEvent('ORDER_INITIALIZED', { orderId: order.orderId, email: order.customerEmail, amount: order.amount }, order.ipAddress);
      return;
    } catch (err) {
      console.error('[Firebase] Failed to write order to Firestore:', err);
    }
  }

  // Resilient memory fallback
  memoryStore.orders.set(order.orderId, order);
  console.log(`[Database: In-Memory] Order created: ${order.orderId} (${order.customerEmail})`);
}

export async function markOrderPaid(
  orderId: string,
  paymentData: { paymentId: string; signature: string; token: string; verifiedAt: string }
): Promise<void> {
  const db = getFirestoreDb();
  if (db) {
    try {
      await db.collection('orders').doc(orderId).set({
        status: 'paid',
        paymentId: paymentData.paymentId,
        signature: paymentData.signature,
        token: paymentData.token,
        verifiedAt: paymentData.verifiedAt,
      }, { merge: true });
      await logAuditEvent('PAYMENT_VERIFIED', { orderId, paymentId: paymentData.paymentId });
      return;
    } catch (err) {
      console.error('[Firebase] Failed to update paid order in Firestore:', err);
    }
  }

  // Memory fallback
  const existing = memoryStore.orders.get(orderId);
  if (existing) {
    existing.status = 'paid';
    existing.paymentId = paymentData.paymentId;
    existing.signature = paymentData.signature;
    existing.token = paymentData.token;
    existing.verifiedAt = paymentData.verifiedAt;
    memoryStore.orders.set(orderId, existing);
  }
  console.log(`[Database: In-Memory] Order marked paid: ${orderId}`);
}

export async function getOrder(orderId: string): Promise<OrderRecord | null> {
  const db = getFirestoreDb();
  if (db) {
    try {
      const snap = await db.collection('orders').doc(orderId).get();
      if (snap.exists) {
        return snap.data() as OrderRecord;
      }
    } catch (err) {
      console.error('[Firebase] Failed to read order from Firestore:', err);
    }
  }

  return memoryStore.orders.get(orderId) || null;
}

// ============================================================================
// DOWNLOAD & AUDIT LOGS (STATUTORY CHARGEBACK DEFENSE)
// ============================================================================

export async function logDownloadRecord(log: DownloadLogRecord): Promise<void> {
  const db = getFirestoreDb();
  if (db) {
    try {
      await db.collection('download_logs').add(log);
      await logAuditEvent('DOWNLOAD_EXECUTED', {
        orderId: log.orderId,
        email: log.email,
        fileName: log.fileName,
        status: log.status,
      }, log.ipHash);
      return;
    } catch (err) {
      console.error('[Firebase] Failed to log download record in Firestore:', err);
    }
  }

  memoryStore.downloadLogs.push(log);
  console.log(`[Database: In-Memory] Download logged for order: ${log.orderId} (${log.email})`);
}

export async function logAuditEvent(
  eventType: AuditLogRecord['eventType'],
  details: Record<string, unknown>,
  ipHash?: string
): Promise<void> {
  const record: AuditLogRecord = {
    eventType,
    details,
    ipHash,
    timestamp: new Date().toISOString(),
  };

  const db = getFirestoreDb();
  if (db) {
    try {
      await db.collection('audit_logs').add(record);
      return;
    } catch (err) {
      console.error('[Firebase] Failed to save audit log:', err);
    }
  }

  memoryStore.auditLogs.push(record);
}

// ============================================================================
// VIP WAITLIST (CALENDAR SYNDICATE PASS)
// ============================================================================

export async function saveWaitlistSubscriber(email: string, source = 'calendar_vip_pass'): Promise<{ isNew: boolean }> {
  const normalizedEmail = email.toLowerCase().trim();
  const db = getFirestoreDb();

  if (db) {
    try {
      const docRef = db.collection('waitlist').doc(normalizedEmail);
      const docSnap = await docRef.get();
      if (docSnap.exists) {
        return { isNew: false };
      }

      const subscriber: WaitlistRecord = {
        email: normalizedEmail,
        source,
        status: 'active',
        createdAt: new Date().toISOString(),
      };
      await docRef.set(subscriber);
      await logAuditEvent('WAITLIST_SUBSCRIBED', { email: normalizedEmail, source });
      return { isNew: true };
    } catch (err) {
      console.error('[Firebase] Failed to save waitlist subscriber in Firestore:', err);
    }
  }

  // Memory fallback
  const exists = memoryStore.waitlist.has(normalizedEmail);
  if (!exists) {
    memoryStore.waitlist.set(normalizedEmail, {
      email: normalizedEmail,
      source,
      status: 'active',
      createdAt: new Date().toISOString(),
    });
    console.log(`[Database: In-Memory] Waitlist subscriber added: ${normalizedEmail}`);
    return { isNew: true };
  }
  return { isNew: false };
}

// ============================================================================
// SUPPORT & INQUIRY TICKETS
// ============================================================================

export async function saveSupportInquiry(name: string, email: string, message: string): Promise<void> {
  const record: InquiryRecord = {
    name: name.trim() || 'Anonymous',
    email: email.toLowerCase().trim(),
    message: message.trim(),
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  const db = getFirestoreDb();
  if (db) {
    try {
      await db.collection('inquiries').add(record);
      await logAuditEvent('INQUIRY_RECEIVED', { email: record.email, name: record.name });
      return;
    } catch (err) {
      console.error('[Firebase] Failed to save support inquiry in Firestore:', err);
    }
  }

  memoryStore.inquiries.push(record);
  console.log(`[Database: In-Memory] Support inquiry saved from: ${record.email}`);
}
