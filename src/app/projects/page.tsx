import { getAllProjects, Project } from '@/lib/project';
import Link from 'next/link';
import Image from 'next/image';
import ProjectTechBadge from '@/components/ProjectTechBadge';
import { Key } from 'react';

export const metadata = {
  title: 'Projects | Mitchell Dawkins II',
  description: 'Explore my portfolio of projects and technical work.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.slug}
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {project.headerImage && (
              <div className="relative w-full h-48">
                <Image
                  src={project.headerImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 384px, 384px"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech: string) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
