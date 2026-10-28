import Hero from '@/components/home/Hero';
import BuildLive from '@/components/home/BuildLive';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutPreview from '@/components/home/AboutPreview';
import BlogPreview from '@/components/home/BlogPreview';
import { getFeaturedPosts } from '@/lib/mdx';
import { getFeaturedProjectsForCarousel } from '@/lib/project';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  const featuredProjects = getFeaturedProjectsForCarousel();

  return (
    <>
      <Hero />
      <BuildLive />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center tracking-tight">
            What I&apos;m building
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Project stories covering problems, architecture, and lessons. Not
            just finished screenshots.
          </p>
          <FeaturedProjects projects={featuredProjects} />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center tracking-tight">
            Lessons from the work
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Articles from real builds: architecture write-ups, failures, and practical
            engineering.
          </p>
          <BlogPreview posts={featuredPosts} />
        </div>
      </section>

      <AboutPreview />
    </>
  );
}
