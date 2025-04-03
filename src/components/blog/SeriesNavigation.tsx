import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { getSeriesInfo } from '@/lib/utils';

type SeriesNavigationProps = {
  currentSlug: string;
  series: string;
};

export default async function SeriesNavigation({ currentSlug, series }: SeriesNavigationProps) {
  const allPosts = await getAllPosts();
  const seriesInfo = getSeriesInfo(series, allPosts);
  
  const currentIndex = seriesInfo.posts.findIndex(post => post.slug === currentSlug);
  const prevPost = currentIndex > 0 ? seriesInfo.posts[currentIndex - 1] : null;
  const nextPost = currentIndex < seriesInfo.posts.length - 1 ? seriesInfo.posts[currentIndex + 1] : null;
  
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {series} Series
      </h3>
      
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          Part {currentIndex + 1} of {seriesInfo.count}
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Previous
            </div>
            <div className="font-medium text-gray-900 dark:text-white">
              {prevPost.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
        
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-right"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Next
            </div>
            <div className="font-medium text-gray-900 dark:text-white">
              {nextPost.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    </div>
  );
}