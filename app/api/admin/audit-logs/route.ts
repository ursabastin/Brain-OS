import { NextResponse } from 'next/server';
import { auditLogger } from '@/lib/logger';
import { safeEqual } from '@/lib/security';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('key');
  const expectedKey = process.env.AUTH_SECRET || 'brainos_super_secure_secret_signing_key_min_32_characters';

  // Basic security authorization check
  if (!secret || !safeEqual(secret, expectedKey)) {
    return NextResponse.json(
      { error: 'Unauthorized. Valid key required to inspect forensic audit logs.' },
      { status: 401 }
    );
  }

  const limit = Math.min(parseInt(searchParams.get('limit') || '50', 10), 200);
  const logs = auditLogger.getRecentLogs(limit);

  return NextResponse.json({
    status: 'success',
    totalRetrieved: logs.length,
    logs,
  });
}
