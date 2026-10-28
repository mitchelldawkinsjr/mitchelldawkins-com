import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/profile.jpg"
                alt={site.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              Builder.
            </h2>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              {site.title}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              People follow how I think, not a single app. Engineer, founder, teacher, and
              service provider: I build real products with AI, stream the process, and turn
              every lesson into something others can learn from. I also help lead the{' '}
              <a
                href={site.social.foundation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Dawkins Family Foundation
              </a>
              , continuing a family legacy of service. Full resume and background live on
              About.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {site.roleLadder.map((item) => (
                <div
                  key={item.role}
                  className="bg-blue-50 dark:bg-blue-900/20 px-3 py-3 rounded-lg text-center"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                    {item.role}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                About & resume
              </Link>
              <Link
                href={site.ctas.workWithMe.href}
                className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                {site.ctas.workWithMe.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
