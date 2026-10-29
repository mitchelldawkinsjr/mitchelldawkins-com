import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format, parseISO } from 'date-fns';
import { getAllExtensions, getExtension } from '@/lib/extensions';
import { mdxRemoteOptions } from '@/lib/mdx-options';

export function generateStaticParams() {
  return getAllExtensions().map((extension) => ({ slug: extension.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const extension = getExtension(params.slug);
  if (!extension) return { title: 'Extension not found' };

  return {
    title: extension.name,
    description: extension.summary,
    alternates: { canonical: `/extension/${extension.slug}` },
    openGraph: {
      title: extension.name,
      description: extension.summary,
      url: `/extension/${extension.slug}`,
    },
  };
}

export default async function ExtensionPage({ params }: { params: { slug: string } }) {
  const extension = getExtension(params.slug);
  if (!extension) notFound();

  const links = [
    extension.storeUrl ? { href: extension.storeUrl, label: 'Chrome Web Store' } : null,
    { href: `/extension/${extension.slug}/privacy`, label: 'Privacy policy' },
    extension.supportUrl ? { href: extension.supportUrl, label: 'Support' } : null,
    extension.sourceUrl ? { href: extension.sourceUrl, label: 'Source' } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/extension" className="text-blue-600 dark:text-blue-400 hover:underline">
        ← Extensions
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-3">{extension.name}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {extension.category ? `${extension.category} · ` : null}
        Updated {format(parseISO(extension.updated), 'MMMM d, yyyy')}
      </p>
      <div className="flex flex-wrap gap-4 mb-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="prose dark:prose-invert prose-blue max-w-none">
        <MDXRemote source={extension.home} options={mdxRemoteOptions} />
      </div>
    </div>
  );
}
