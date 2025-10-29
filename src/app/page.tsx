import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutPreview from '@/components/home/AboutPreview';
import BlogPreview from '@/components/home/BlogPreview';
import { getFeaturedPosts } from '@/lib/mdx';

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Latest Projects
          </h2>
          <FeaturedProjects />
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Latest from the Blog
          </h2>
          <BlogPreview posts={featuredPosts} />
        </div>
      </section>
      
      <AboutPreview />
    </>
  );
}
