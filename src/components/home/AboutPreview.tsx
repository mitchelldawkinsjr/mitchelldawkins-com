import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Mitchell Dawkins II"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a Senior Softweare Engineer and an endeavoring AI engineer passionate about exploring the meta-concept of using AI to build AI systems. 
              With experience in machine learning, software development, and cloud architecture, 
              I&apos;m constantly exploring the boundaries of what&apos;s possible with today&apos;s AI tools.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white">Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">Hugging Face</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300">React, Next.js, Python, Flask</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white">Cloud & DevOps</h3>
                <p className="text-gray-600 dark:text-gray-300">AWS, Docker, CI/CD</p>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}