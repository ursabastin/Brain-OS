import path from 'node:path';
import fs from 'node:fs';

export interface VaultAsset {
  fileName: string;
  streamPath: string;
  sizeBytes: number;
}

export function getVaultAsset(): VaultAsset | null {
  const basePath = process.env.STORAGE_LOCAL_PATH || path.join(process.cwd(), 'storage', 'protected');
  const targetZip = path.join(basePath, 'BrainOS-Master-Vault.zip');

  if (fs.existsSync(targetZip)) {
    const stat = fs.statSync(targetZip);
    return {
      fileName: 'BrainOS-Master-Vault.zip',
      streamPath: targetZip,
      sizeBytes: stat.size,
    };
  }
  return null;
}
