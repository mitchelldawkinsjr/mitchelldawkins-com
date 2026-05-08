import { Metadata } from 'next';
import FeaturedProjects from '@/components/home/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Video CV | Mitchell Dawkins',
  description: 'Watch Mitchell Dawkins\' video CV and explore featured projects.',
};

export default function CVPage() {
  return (
    <>
      {/* Video Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="mb-10 text-center">
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Hi, I&apos;m Mitchell Dawkins a software engineer passionate about building software, problem solving, and making an impact.
              With over 10 years of experience in backend &amp; frontend development, I bring a unique perspective to
              building software systems using AI alongside solid fundamentals to deliver better results.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="/about"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
              >
                More about me →
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              {/* GitHub */}
              <a href="https://github.com/mitchelldawkinsjr" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/mitchell-dawkins-ii-81614687/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Dawkins Family Foundation */}
              <a href="https://dawkinsfamilyfoundation.org" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1200" height="1200" fill="#D22630"/>
                  <path d="M276 206H746C826 206 886 226 926 266C966 306 986 366 986 446V956C986 996 946 1016 906 996C866 976 846 936 846 886V526C846 486 826 466 786 466H576C536 466 516 486 516 526V646C516 686 536 706 576 706H656C696 706 726 696 746 676V526L886 646V806C886 846 866 876 826 906C786 936 726 946 656 946H516C456 946 406 926 366 886C326 846 306 786 306 726V526C306 486 286 466 246 466H306C346 466 366 446 366 406V286C366 246 346 226 306 226H276V206Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Video Player */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
            <video
              controls
              className="w-full aspect-video"
              preload="metadata"
              playsInline
            >
              <source src="/documents/Mitchell_Dawkins_cv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>

      {/* Projects Section — matches home page layout exactly */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Latest Projects
          </h2>
          <FeaturedProjects />
        </div>
      </section>
    </>
  );
}
