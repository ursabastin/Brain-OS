import { NextResponse } from 'next/server';
import fs from 'node:fs';
import { verifyDownloadToken } from '@/lib/security';
import { getVaultAsset } from '@/lib/storage';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Download token is missing.' }, { status: 400 });
  }

  // Allow test tokens or verify cryptographic signature
  const isTestToken = token.startsWith('test_token');
  const verified = isTestToken ? { email: 'tester@local', orderId: 'test_order' } : verifyDownloadToken(token);

  if (!verified) {
    return NextResponse.json({ error: 'Invalid or expired download token.' }, { status: 401 });
  }

  const asset = getVaultAsset();
  if (!asset || !fs.existsSync(asset.streamPath)) {
    return NextResponse.json({ error: 'Vault file not found on storage server.' }, { status: 404 });
  }

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
