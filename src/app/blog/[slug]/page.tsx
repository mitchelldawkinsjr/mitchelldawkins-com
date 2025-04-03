import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import HumanReflection from '@/components/blog/HumanReflection';
import SeriesNavigation from '@/components/blog/SeriesNavigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Mitchell Dawkins',
    };
  }
  
  return {
    title: `${post.title} | Mitchell Dawkins`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}


// Custom components for MDX
const components = {
    HumanReflection,
    // Add other custom components here
};
  
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
    
    if (!post) {
      notFound();
    }
    
    return (
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {post.series && (
            <div className="mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                {post.series}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-8 text-gray-600 dark:text-gray-300">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime} min read</span>
          </div>
          
          {post.coverImage && (
            <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          
          <div className="prose dark:prose-invert prose-blue prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
          
          {post.series && <SeriesNavigation currentSlug={post.slug} series={post.series} />}
        </div>
      </article>
    );
}