import { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { TwitchIcon, YouTubeIcon } from '@/components/common/SocialIcons';

export const metadata: Metadata = {
  title: 'Streams',
  description:
    'Follow Mitchell Dawkins on Twitch and YouTube. The channels are up; the first builds are not posted yet.',
  alternates: { canonical: '/streams' },
  robots: site.streams.published ? undefined : { index: false, follow: false },
};

export default function StreamsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Twitch and YouTube
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The channels are up. The first builds are not posted yet. Follow here, and the
          sessions will show up as commits, articles, and project stories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={site.streams.twitch}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <TwitchIcon className="h-5 w-5" />
            Twitch
          </a>
          <a
            href={site.streams.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            <YouTubeIcon className="h-5 w-5" />
            YouTube
          </a>
        </div>

        {site.streams.schedule && (
          <p className="mb-10 text-blue-600 dark:text-blue-400 font-medium">
            {site.streams.schedule}
          </p>
        )}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            What you&apos;ll see
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <strong className="text-gray-900 dark:text-white">Real software</strong> —
              products shipping to users, not demos or tutorial repos.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Honest process</strong> —
              debugging, architecture tradeoffs, mistakes, and recoveries.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">AI as collaborator</strong> —
              practical agent workflows, prompts, and engineering judgment — not hype.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            One session → an ecosystem
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A session becomes YouTube recordings, blog articles, architecture write-ups, GitHub
            commits, docs, and project stories on this site. Follow the work where it lives.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Stream the build</li>
            <li>Ship commits and deploys</li>
            <li>Capture lessons in the journal</li>
            <li>Update the project story</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Manifesto
          </h2>
          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 dark:text-gray-300">
            <p>{site.manifesto}</p>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Active project stories
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/projects/fasted"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Fasted
              </Link>
              <span className="text-gray-600 dark:text-gray-400"> — biblical fasting companion PWA</span>
            </li>
            <li>
              <Link
                href="/projects/seos"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                SEOS
              </Link>
              <span className="text-gray-600 dark:text-gray-400"> — software engineering agent OS</span>
            </li>
            <li>
              <Link
                href="/projects/thinker"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Thinker
              </Link>
              <span className="text-gray-600 dark:text-gray-400"> — microlearning instead of doomscroll</span>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                All projects →
              </Link>
            </li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lessons from the work
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Work with me
          </Link>
        </div>
      </div>
    </div>
  );
}
