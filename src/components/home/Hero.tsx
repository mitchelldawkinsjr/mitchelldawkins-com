import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Building AI with AI
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              I&apos;m Mitch, a Senior Software engineer exploring the meta-concept of using AI tools to build AI systems. 
              Follow my journey as I document the process of creating a multi-tenant video processing platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/blog" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg text-center hover:bg-blue-700 transition-colors">
                Read the Blog
              </Link>
              <Link href="/about" className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg text-center border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                About Me
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/family.jpg"
                alt="Mitchell Dawkins"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}