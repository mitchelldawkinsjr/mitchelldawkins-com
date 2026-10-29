import type { MetadataRoute } from 'next';
import { getAllExtensions } from '@/lib/extensions';
import { getAllPosts } from '@/lib/mdx';
import { getAllProjects } from '@/lib/project';
import { site } from '@/lib/site';
import { seriesSlug } from '@/lib/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const projects = getAllProjects();

  const staticPaths = ['', '/about', '/projects', '/blog', '/contact', '/consulting', '/consulting/ai-assistant', '/cv'].concat(
    site.streams.published ? ['/streams'] : []
  );

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path || '/'}`,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.updated || post.date,
  }));

  const seriesNames = Array.from(
    new Set(posts.map((post) => post.series).filter((series): series is string => Boolean(series)))
  );

  const seriesEntries: MetadataRoute.Sitemap = seriesNames.map((series) => ({
    url: `${site.url}/blog/series/${seriesSlug(series)}`,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: project.date,
  }));

  const extensions = getAllExtensions();
  const extensionEntries: MetadataRoute.Sitemap = [
    { url: `${site.url}/extension` },
    ...extensions.flatMap((extension) => [
      {
        url: `${site.url}/extension/${extension.slug}`,
        lastModified: extension.updated,
      },
      {
        url: `${site.url}/extension/${extension.slug}/privacy`,
        lastModified: extension.updated,
      },
    ]),
  ];

  return [...staticEntries, ...postEntries, ...seriesEntries, ...projectEntries, ...extensionEntries];
}
