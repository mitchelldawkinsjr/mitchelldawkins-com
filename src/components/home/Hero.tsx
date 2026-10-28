import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-10">
            <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-3">
              {site.shortName}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {site.brandLine}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {site.tagline} The projects and journal are the record: architecture, mistakes,
              and what shipped.
              {site.streams.published && ' Twitch and YouTube are up for when the builds start.'}{' '}
              I also help lead the{' '}
              <a
                href={site.social.foundation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Dawkins Family Foundation
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={site.ctas.seeProjects.href}
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                {site.ctas.seeProjects.label}
              </Link>
              <Link
                href={site.ctas.readJournal.href}
                className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg text-center border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                {site.ctas.readJournal.label}
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <Link href={site.ctas.consulting.href} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                {site.ctas.consulting.label}
              </Link>
              {' '}is open for custom software, AI automation, and modernization.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/family.jpg"
                alt={site.shortName}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
