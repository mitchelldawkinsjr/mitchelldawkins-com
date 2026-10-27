import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/blog/BlogCard';
import { seriesSlug } from '@/lib/utils';
import { site } from '@/lib/site';

type Props = {
  params: { series: string };
};

async function findSeries(param: string) {
  const posts = await getAllPosts();
  const names = Array.from(
    new Set(posts.map((post) => post.series).filter((series): series is string => Boolean(series)))
  );
  const name = names.find((series) => seriesSlug(series) === param);
  if (!name) return null;
  return {
    name,
    posts: posts.filter((post) => post.series === name),
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const names = Array.from(
    new Set(posts.map((post) => post.series).filter((series): series is string => Boolean(series)))
  );
  return names.map((series) => ({ series: seriesSlug(series) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const series = await findSeries(params.series);
  if (!series) {
    return { title: 'Series Not Found' };
  }

  const description = `${series.name}: ${series.posts.length} articles.`;
  const canonical = `${site.url}/blog/series/${seriesSlug(series.name)}`;

  return {
    title: series.name,
    description,
    alternates: { canonical },
    openGraph: {
      title: series.name,
      description,
      url: canonical,
    },
  };
}

export default async function SeriesPage({ params }: Props) {
  const series = await findSeries(params.series);
  if (!series) notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <p className="mb-4">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Blog
        </Link>
      </p>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{series.name}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">{series.posts.length} articles.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {series.posts.map((post) => (
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
    </div>
  );
}
