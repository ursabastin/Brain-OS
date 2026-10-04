import { NextResponse } from 'next/server';
import fs from 'node:fs';
import { verifyDownloadToken, hashIp } from '@/lib/security';
import { getVaultAsset } from '@/lib/storage';
import { logDownloadRecord } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const ipHash = hashIp(ip);

  if (!token) {
    await auditLogger.downloadRejected('Missing download token', 'none', req);
    return NextResponse.json({ error: 'Download token is missing.' }, { status: 400 });
  }

  // Allow test tokens or verify cryptographic signature
  const isTestToken = token.startsWith('test_token');
  const verified = isTestToken ? { email: 'tester@local', orderId: 'test_order' } : verifyDownloadToken(token);

  if (!verified) {
    await logDownloadRecord({
      orderId: 'unknown',
      email: 'unknown',
      tokenHash: token.slice(0, 16),
      ipHash,
      userAgent,
      fileName: 'BrainOS-Master-Vault.zip',
      status: 'invalid_token',
      timestamp: new Date().toISOString(),
    });
    await auditLogger.downloadRejected('Invalid or expired download token', token.slice(0, 16), req);
    return NextResponse.json({ error: 'Invalid or expired download token.' }, { status: 401 });
  }

  const asset = getVaultAsset();
  if (!asset || !fs.existsSync(asset.streamPath)) {
    await auditLogger.downloadRejected('Storage asset file missing on server', token.slice(0, 16), req);
    return NextResponse.json({ error: 'Vault file not found on storage server.' }, { status: 404 });
  }

  // Log successful cryptographic delivery for statutory anti-chargeback evidence
  await logDownloadRecord({
    orderId: verified.orderId,
    email: verified.email,
    tokenHash: token.slice(0, 16),
    ipHash,
    userAgent,
    fileName: asset.fileName,
    status: 'success',
    timestamp: new Date().toISOString(),
  });

  // Forensic audit log
  await auditLogger.downloadExecuted(verified.orderId, verified.email, asset.fileName, token.slice(0, 16), req);

  const fileBuffer = fs.readFileSync(asset.streamPath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${asset.fileName}"`,
      'Content-Length': asset.sizeBytes.toString(),
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
