import fs from 'fs';
import path from 'path';

const extensionsDirectory = path.join(process.cwd(), 'src', 'content', 'extensions');

export type ExtensionListing = {
  slug: string;
  name: string;
  summary: string;
  updated: string;
  category?: string;
  supportUrl?: string;
  sourceUrl?: string;
  storeUrl?: string;
  home: string;
  privacy: string;
};

type ExtensionMeta = {
  name: string;
  summary: string;
  updated: string;
  category?: string;
  supportUrl?: string;
  sourceUrl?: string;
  storeUrl?: string;
};

function readExtension(slug: string): ExtensionListing | null {
  const dir = path.join(extensionsDirectory, slug);
  const metaPath = path.join(dir, 'extension.json');
  const homePath = path.join(dir, 'home.md');
  const privacyPath = path.join(dir, 'privacy.md');
  if (!fs.existsSync(metaPath) || !fs.existsSync(homePath) || !fs.existsSync(privacyPath)) {
    return null;
  }

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ExtensionMeta;
  return {
    slug,
    name: meta.name,
    summary: meta.summary,
    updated: meta.updated,
    category: meta.category,
    supportUrl: meta.supportUrl,
    sourceUrl: meta.sourceUrl,
    storeUrl: meta.storeUrl,
    home: fs.readFileSync(homePath, 'utf8'),
    privacy: fs.readFileSync(privacyPath, 'utf8'),
  };
}

export function getAllExtensions(): ExtensionListing[] {
  if (!fs.existsSync(extensionsDirectory)) return [];

  return fs
    .readdirSync(extensionsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => readExtension(entry.name))
    .filter((extension): extension is ExtensionListing => extension !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getExtension(slug: string): ExtensionListing | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  return readExtension(slug);
}
