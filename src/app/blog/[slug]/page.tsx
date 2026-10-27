import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { formatDate } from '@/lib/utils';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import HumanReflection from '@/components/blog/HumanReflection';
import SeriesNavigation from '@/components/blog/SeriesNavigation';
import LiveSiteButton from '@/components/blog/LiveSiteButton';
import MdxImage from '@/components/mdx/MdxImage';
import AuthorSection from '@/components/blog/AuthorSection';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleEnd from '@/components/blog/ArticleEnd';
import JsonLd from '@/components/seo/JsonLd';
import { extractHeadings } from '@/lib/headings';
import { mdxRemoteOptions } from '@/lib/mdx-options';
import { site } from '@/lib/site';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const canonical = `${site.url}/blog/${post.slug}`;
  const images = post.coverImage
    ? [
        {
          url: post.coverImage,
          alt: post.title,
        },
        ...previousImages,
      ]
    : previousImages;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: site.name, url: '/about' }],
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonical,
      publishedTime: post.date,
      ...(post.updated ? { modifiedTime: post.updated } : {}),
      authors: [site.name],
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

const components = {
  HumanReflection,
  LiveSiteButton,
  img: MdxImage,
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const canonical = `${site.url}/blog/${post.slug}`;
  const headings = extractHeadings(post.content);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        ...(post.updated ? { dateModified: post.updated } : {}),
        author: {
          '@type': 'Person',
          name: site.name,
          url: `${site.url}/about`,
        },
        publisher: {
          '@type': 'Person',
          name: site.name,
          url: site.url,
        },
        mainEntityOfPage: canonical,
        url: canonical,
        ...(post.series ? { articleSection: post.series } : {}),
        ...(post.coverImage ? { image: `${site.url}${post.coverImage}` } : {}),
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
        ],
      },
    ],
  };

  return (
    <article className="container mx-auto px-4 py-12">
      <JsonLd data={structuredData} />
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.title },
          ]}
        />

        {post.series && (
          <div className="mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
              {post.series}
            </span>
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8 text-gray-600 dark:text-gray-300">
          <AuthorSection />
          <span aria-hidden="true">•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.updated && (
            <>
              <span aria-hidden="true">•</span>
              <time dateTime={post.updated}>Updated {formatDate(post.updated)}</time>
            </>
          )}
          <span aria-hidden="true">•</span>
          <span>{post.readingTime} min read</span>
        </div>

        {post.coverImage &&
          (post.coverImageFit === 'contain' ? (
            <div className="mb-8 overflow-hidden rounded-xl bg-[#0a1628]">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1536}
                height={1024}
                className="mx-auto h-auto w-full object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : (
            <div className="relative mb-8 h-80 w-full overflow-hidden rounded-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: post.coverImagePosition ?? 'center',
                }}
                priority
              />
            </div>
          ))}

        <TableOfContents headings={headings} />

        <div className="prose dark:prose-invert prose-blue prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} options={mdxRemoteOptions} />
        </div>

        <ArticleEnd slug={post.slug} />

        {post.series && post.slug && <SeriesNavigation currentSlug={post.slug} series={post.series} />}
      </div>
    </article>
  );
}
