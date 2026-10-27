import { site } from '@/lib/site';
import { TwitchIcon, YouTubeIcon } from '@/components/common/SocialIcons';

export default function BuildLive() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-tight">Build with me live</h2>
          <p className="text-lg text-gray-300">
            Streams are the hinge of this journal. You&apos;ll see real products, real
            debugging, architecture decisions, and honest failures. Not polished tutorials.
            One session becomes commits, articles, docs, and the next ship.
          </p>
          {site.streams.schedule && (
            <p className="mt-4 text-blue-300">{site.streams.schedule}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href={site.streams.twitch}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
          >
            <TwitchIcon className="h-5 w-5" />
            Watch on Twitch
          </a>
          <a
            href={site.streams.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors"
          >
            <YouTubeIcon className="h-5 w-5" />
            Watch on YouTube
          </a>
        </div>

        <ul className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-6 text-center text-sm text-gray-300">
          <li>
            <span className="block text-white font-semibold mb-1">Real software</span>
            Products shipping to users, not demos
          </li>
          <li>
            <span className="block text-white font-semibold mb-1">Honest process</span>
            Debugging, mistakes, and design tradeoffs
          </li>
          <li>
            <span className="block text-white font-semibold mb-1">Full ecosystem</span>
            Stream → commits → articles → docs
          </li>
        </ul>
      </div>
    </section>
  );
}
