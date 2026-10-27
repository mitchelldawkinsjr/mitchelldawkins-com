import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/blog/BlogCard';
import { seriesSlug } from '@/lib/utils';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering write-ups from real builds: AI agents, sports tools, hosting, and the lessons in between.',
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: 'Blog',
    description: 'Engineering write-ups from real builds: AI agents, sports tools, hosting, and the lessons in between.',
    url: `${site.url}/blog`,
    images: [
      {
        url: '/images/logo/logo-full.png',
        alt: 'Mitchell Dawkins II',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description: 'Engineering write-ups from real builds: AI agents, sports tools, hosting, and the lessons in between.',
    images: ['/images/logo/logo-full.png'],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const seriesNames = Array.from(
    new Set(posts.map((post) => post.series).filter((series): series is string => Boolean(series)))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Blog</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
        Write-ups from the work: architecture, failures, and what I would repeat.
      </p>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              coverImage={post.coverImage}
              series={post.series}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">No posts yet</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            I&apos;m currently working on some exciting content. Check back soon.
          </p>
        </div>
      )}

      {seriesNames.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Series</h2>
          <ul className="space-y-2">
            {seriesNames.map((series) => {
              const count = posts.filter((post) => post.series === series).length;
              return (
                <li key={series}>
                  <Link
                    href={`/blog/series/${seriesSlug(series)}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {series}
                  </Link>
                  <span className="text-gray-600 dark:text-gray-400"> ({count})</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
