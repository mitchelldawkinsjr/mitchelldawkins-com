import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Video Processing Platform',
    description: 'A multi-tenant platform for processing, transcribing, and analyzing video content using AI.',
    image: '/images/projects/video-platform.jpg',
    link: '/blog/introducing-video-processing-platform',
    tags: ['Next.js', 'Python', 'Docker', 'ML'],
  },
  // Add more projects as needed
];

export default function FeaturedProjects() {
  return (
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
  );
}