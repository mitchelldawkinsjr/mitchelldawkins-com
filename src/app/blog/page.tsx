import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Mitchell Dawkins II',
  description: 'Articles about AI development, the "Building AI with AI" series, and technical insights.',
  openGraph: {
    title: 'Blog | Mitchell Dawkins II',
    description: 'Articles about AI development, the "Building AI with AI" series, and technical insights.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mitchell Dawkins Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Mitchell Dawkins II',
    description: 'Articles about AI development, the "Building AI with AI" series, and technical insights.',
    images: ['/images/og-image.jpg'],
  },
};

export default async function BlogPage() {
  // Get all blog posts
  const posts = await getAllPosts();
  
  // Group posts by series if needed
  const groupedBySeries = posts.reduce((acc, post) => {
    if (post.series) {
      if (!acc[post.series]) {
        acc[post.series] = [];
      }
      acc[post.series].push(post);
    } else {
      if (!acc['Other']) {
        acc['Other'] = [];
      }
      acc['Other'].push(post);
    }
    return acc;
  }, {} as Record<string, typeof posts>);
  
  // Get all series names
  const seriesNames = Object.keys(groupedBySeries).filter(name => name !== 'Other');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        Blog
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Thoughts, insights and project updates about AI development
      </p>
      
      {/* Featured series */}
      {seriesNames.length > 0 && seriesNames.map(seriesName => (
        <section key={seriesName} className="mb-16">
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {seriesName} Series
            </h2>
            {groupedBySeries[seriesName].length > 3 && (
              <Link 
                href={`/blog/series/${encodeURIComponent(seriesName.toLowerCase())}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all
              </Link>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedBySeries[seriesName].slice(0, 3).map((post) => (
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
        </section>
      ))}
      
      {/* All posts */}
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
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">No posts yet</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            I&apos;m currently working on some exciting content. Check back soon for updates on my &quot;Building AI with AI&quot; journey!
          </p>
        </div>
      )}
    </div>
  );
}