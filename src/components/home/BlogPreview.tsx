import Link from 'next/link';
import BlogCard from '../blog/BlogCard';
import type { Post } from '@/lib/mdx';

type BlogPreviewProps = {
  posts: Post[];
};

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
      
      <div className="text-center">
        <Link 
          href="/blog" 
          className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}