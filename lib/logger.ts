import fs from 'node:fs';
import path from 'node:path';
import { logAuditEvent, AuditLogRecord } from './firebase';
import { hashIp } from './security';

export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'SECURITY';

export type AuditEventType =
  | 'ORDER_INITIALIZED'
  | 'PAYMENT_VERIFIED'
  | 'PAYMENT_FAILED'
  | 'DOWNLOAD_EXECUTED'
  | 'DOWNLOAD_REJECTED'
  | 'WAITLIST_SUBSCRIBED'
  | 'INQUIRY_RECEIVED'
  | 'SECURITY_ALERT';

export interface AuditEntry {
  id: string;
  level: LogLevel;
  eventType: AuditEventType;
  timestamp: string;
  ipHash: string;
  userAgent?: string;
  details: Record<string, unknown>;
}

// Ensure the local storage logs directory exists
const LOGS_DIR = path.join(process.cwd(), 'storage', 'logs');
const AUDIT_LOG_FILE = path.join(LOGS_DIR, 'audit.jsonl');

function ensureLogDir(): void {
  try {
    if (!fs.existsSync(LOGS_DIR)) {
      fs.mkdirSync(LOGS_DIR, { recursive: true });
    }
  } catch (err) {
    console.error('[Logger] Failed to create logs directory:', err);
  }
}

/**
 * Appends a structured JSON log line to storage/logs/audit.jsonl
 */
function appendToFile(entry: AuditEntry): void {
  try {
    ensureLogDir();
    const line = JSON.stringify(entry) + '\n';
    fs.appendFileSync(AUDIT_LOG_FILE, line, 'utf8');
  } catch (err) {
    console.error('[Logger] Failed to write to local audit log file:', err);
  }
}

/**
 * Extracts request metadata (IP address and user agent)
 */
export function extractReqMeta(req?: Request): { ipHash: string; userAgent: string } {
  if (!req) {
    return { ipHash: 'system', userAgent: 'internal' };
  }

  const rawIp =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  const userAgent = req.headers.get('user-agent') || 'unknown';
  const ipHash = hashIp(rawIp);

  return { ipHash, userAgent };
}

/**
 * Core logging method: writes simultaneously to:
 * 1. Google Cloud Firestore ('audit_logs' collection)
 * 2. Local append-only forensic file ('storage/logs/audit.jsonl')
 * 3. Formatted server terminal output
 */
export async function logAudit(
  eventType: AuditEventType,
  details: Record<string, unknown>,
  options: {
    level?: LogLevel;
    req?: Request;
    ipHash?: string;
    userAgent?: string;
  } = {}
): Promise<AuditEntry> {
  const timestamp = new Date().toISOString();
  const id = `audit_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const level = options.level || (eventType === 'SECURITY_ALERT' || eventType === 'PAYMENT_FAILED' ? 'WARN' : 'INFO');

  let ipHash = options.ipHash;
  let userAgent = options.userAgent;

  if (options.req) {
    const meta = extractReqMeta(options.req);
    ipHash = ipHash || meta.ipHash;
    userAgent = userAgent || meta.userAgent;
  }

  const entry: AuditEntry = {
    id,
    level,
    eventType,
    timestamp,
    ipHash: ipHash || 'unknown',
    userAgent: userAgent || 'unknown',
    details,
  };

  // 1. Output formatted console badge
  const badgeColor =
    level === 'ERROR' || level === 'SECURITY'
      ? '\x1b[41m\x1b[37m' // Red background
      : level === 'WARN'
      ? '\x1b[43m\x1b[30m' // Yellow background
      : '\x1b[42m\x1b[30m'; // Green background

  console.log(
    `${badgeColor} [AUDIT:${eventType}] \x1b[0m ${timestamp} | IP:${entry.ipHash} | ${JSON.stringify(details)}`
  );

  // 2. Append to local audit file
  appendToFile(entry);

  // 3. Write to Google Cloud Firestore (permanent 24/7 cloud persistence)
  try {
    // Map eventType to the Firestore enum type
    const firestoreEventType = (
      eventType === 'DOWNLOAD_REJECTED' || eventType === 'SECURITY_ALERT'
        ? 'PAYMENT_FAILED'
        : eventType
    ) as AuditLogRecord['eventType'];

    await logAuditEvent(firestoreEventType, {
      ...details,
      logLevel: level,
      auditId: id,
      userAgent: entry.userAgent,
    }, entry.ipHash);
  } catch (err) {
    console.error('[Logger] Cloud Firestore audit dispatch error:', err);
  }

  return entry;
}

/**
 * Convenience methods for domain-specific events
 */
export const auditLogger = {
  orderInitialized: (orderId: string, email: string, amount: number, req?: Request) =>
    logAudit('ORDER_INITIALIZED', { orderId, email, amount, currency: 'INR' }, { req, level: 'INFO' }),

  paymentVerified: (orderId: string, paymentId: string, email: string, amount: number, req?: Request) =>
    logAudit('PAYMENT_VERIFIED', { orderId, paymentId, email, amount }, { req, level: 'INFO' }),

  paymentFailed: (orderId: string, error: string, req?: Request) =>
    logAudit('PAYMENT_FAILED', { orderId, error }, { req, level: 'WARN' }),

  downloadExecuted: (orderId: string, email: string, fileName: string, tokenSnippet: string, req?: Request) =>
    logAudit('DOWNLOAD_EXECUTED', { orderId, email, fileName, tokenSnippet, deliveryStatus: 'SUCCESS' }, { req, level: 'INFO' }),

  downloadRejected: (reason: string, tokenSnippet: string, req?: Request) =>
    logAudit('DOWNLOAD_REJECTED', { reason, tokenSnippet, deliveryStatus: 'REJECTED' }, { req, level: 'WARN' }),

  securityAlert: (message: string, context: Record<string, unknown>, req?: Request) =>
    logAudit('SECURITY_ALERT', { message, ...context }, { req, level: 'SECURITY' }),

  waitlistSubscribed: (email: string, source: string, req?: Request) =>
    logAudit('WAITLIST_SUBSCRIBED', { email, source }, { req, level: 'INFO' }),

  inquiryReceived: (email: string, name: string, req?: Request) =>
    logAudit('INQUIRY_RECEIVED', { email, name }, { req, level: 'INFO' }),

  /**
   * Reads recent audit logs from local disk storage
   */
  getRecentLogs: (limit = 50): AuditEntry[] => {
    try {
      if (!fs.existsSync(AUDIT_LOG_FILE)) return [];
      const content = fs.readFileSync(AUDIT_LOG_FILE, 'utf8');
      const lines = content.trim().split('\n').filter(Boolean);
      return lines
        .slice(-limit)
        .map((l) => JSON.parse(l) as AuditEntry)
        .reverse();
    } catch {
      return [];
    }
  },
};
