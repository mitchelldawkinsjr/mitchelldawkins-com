import { Metadata } from 'next';
import ContactForm from './ContactForm';
import { site } from '@/lib/site';
import { SocialLinks } from '@/components/common/SocialIcons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Work with Mitchell Dawkins — collaboration, product builds, AI-assisted engineering, and teaching.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { topic?: string | string[] };
}) {
  const topicParam = searchParams?.topic;
  const topic = Array.isArray(topicParam) ? topicParam[0] : topicParam;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Work with me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          Collaboration, product builds, AI-assisted engineering, and teaching — the Service
          Provider lane of the same public practice.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          The kinds of work I take are on the{' '}
          <Link href="/consulting" className="text-blue-600 dark:text-blue-400 hover:underline">
            consulting page
          </Link>
          . Prefer to see the work first? Browse{' '}
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            project stories
          </Link>
          {site.streams.published && (
            <>
              {' '}
              or follow{' '}
              <Link href="/streams" className="text-blue-600 dark:text-blue-400 hover:underline">
                Twitch and YouTube
              </Link>
            </>
          )}
          .
        </p>

        <ContactForm initialSubject={topic ?? ''} />

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Connect
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
              <a
                href={`mailto:${site.email}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {site.streams.published ? 'Social & streams' : 'Social'}
              </h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
