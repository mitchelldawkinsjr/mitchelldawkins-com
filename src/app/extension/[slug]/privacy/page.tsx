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
  if (!extension) return { title: 'Privacy policy not found' };

  const title = `${extension.name} privacy policy`;
  return {
    title,
    description: `Privacy policy for the ${extension.name} browser extension.`,
    alternates: { canonical: `/extension/${extension.slug}/privacy` },
    openGraph: {
      title,
      description: `Privacy policy for the ${extension.name} browser extension.`,
      url: `/extension/${extension.slug}/privacy`,
    },
  };
}

export default async function ExtensionPrivacyPage({ params }: { params: { slug: string } }) {
  const extension = getExtension(params.slug);
  if (!extension) notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link
        href={`/extension/${extension.slug}`}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← {extension.name}
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
        {extension.name} privacy policy
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Last updated {format(parseISO(extension.updated), 'MMMM d, yyyy')}
      </p>
      <div className="prose dark:prose-invert prose-blue max-w-none">
        <MDXRemote source={extension.privacy} options={mdxRemoteOptions} />
      </div>
    </div>
  );
}
