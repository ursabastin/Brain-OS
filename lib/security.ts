import crypto from 'node:crypto';

const SECRET = process.env.DOWNLOAD_TOKEN_SECRET || process.env.AUTH_SECRET || 'brainos_default_fallback_secret_32_bytes_min';

export function safeEqual(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function createDownloadToken(email: string, orderId: string, ttlSeconds = 604800): string {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const payload = Buffer.from(JSON.stringify({ email, orderId, exp })).toString('base64url');
  const signature = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function verifyDownloadToken(token: string): { email: string; orderId: string } | null {
  try {
    const [payload, signature] = token.split('.');
    if (!payload || !signature) return null;

    const expectedSig = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
    if (!safeEqual(signature, expectedSig)) return null;

    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (data.exp < Math.floor(Date.now() / 1000)) return null;

    return { email: data.email, orderId: data.orderId };
  } catch {
    return null;
  }
}

export function hashIp(ip: string | null | undefined): string {
  if (!ip) return 'unknown';
  return crypto.createHmac('sha256', SECRET).update(ip).digest('hex').substring(0, 16);
}
