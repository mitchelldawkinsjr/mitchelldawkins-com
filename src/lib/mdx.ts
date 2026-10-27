import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadingTime, parseSiteDate } from './utils';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export type Post = {
  slug: string;
  title: string;
  date: string;
  /** Set only when the article body changed in a meaningful way. */
  updated?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverImageFit?: 'cover' | 'contain';
  coverImagePosition?: string;
  series?: string;
  readingTime: number;
};

function readPost(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const series = typeof data.series === 'string' && data.series.trim() ? data.series.trim() : undefined;
  const updated = typeof data.updated === 'string' && data.updated.trim() ? data.updated.trim() : undefined;

  return {
    slug,
    title: data.title,
    date: data.date,
    updated,
    excerpt: data.excerpt || '',
    content,
    coverImage: data.coverImage || '',
    coverImageFit: data.coverImageFit,
    coverImagePosition: data.coverImagePosition,
    series,
    readingTime: calculateReadingTime(content),
  };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return readPost(slug);
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const slugs = fs
      .readdirSync(postsDirectory)
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));

    return slugs
      .map((slug) => readPost(slug))
      .filter((post): post is Post => post !== null)
      .sort((a, b) => parseSiteDate(b.date).getTime() - parseSiteDate(a.date).getTime());
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

export async function getFeaturedPosts(count = 3): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, count);
}
