import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllExtensions } from '@/lib/extensions';

export const metadata: Metadata = {
  title: 'Extensions',
  description: 'Browser extensions by Mitchell Dawkins, with a public homepage and privacy policy for each.',
  alternates: { canonical: '/extension' },
};

export default function ExtensionsPage() {
  const extensions = getAllExtensions();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Extensions</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Browser extensions, each with its own homepage and privacy policy.
      </p>
      <ul className="space-y-6">
        {extensions.map((extension) => (
          <li key={extension.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              <Link href={`/extension/${extension.slug}`} className="hover:underline">
                {extension.name}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{extension.summary}</p>
            <p className="mt-3 text-sm">
              <Link
                href={`/extension/${extension.slug}/privacy`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy policy
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
