import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  series?: string;
};

export default function BlogCard({ slug, title, excerpt, date, coverImage, series }: BlogCardProps) {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
          {series && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
              {series}
            </div>
          )}
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
            {excerpt}
          </p>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </div>
        </div>
      </article>
    </Link>
  );
}