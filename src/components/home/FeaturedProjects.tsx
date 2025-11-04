import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'GH Film Review Pipeline',
    description: 'A comprehensive data pipeline and static site generator for weekly and season-long football player evaluations from CSV film logs.',
    image: '/images/projects/gh-flim-revew-dashboard/header-1.png',
    link: '/projects/gh-film-review-pipeline',
    tags: ['Python','Pandas','ReportLab','HTML','CSS','GitHub Actions','Google Analytics'],
  },
  {
    title: 'WNBA Stat Spot',
    description: 'Advanced WNBA analytics platform with AI-powered predictions, prop betting scanner, Monte Carlo simulations, and comprehensive statistical analysis.',
    image: '/images/projects/wnba-stat-spot/header.png',
    link: '/projects/wnba-stat-spot',
    tags: ['Laravel','SvelteKit','PHP','TypeScript','PostgreSQL','Redis','Docker'],
  },
  {
    title: 'Video Processing Platform',
    description: 'A multi-tenant platform for processing, transcribing, and analyzing video content using AI.',
    image: '/images/projects/video-processing-platform/header.svg',
    link: '/projects/video-processing-platform',
    tags: ['Next.js', 'Python', 'Docker', 'ML'],
  },
];

export default function FeaturedProjects() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                href={project.link} 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/projects" 
          className="inline-block px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </>
  );
}