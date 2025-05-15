// src/app/projects/page.js
import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | Your Portfolio',
  description: 'Showcase of my technical projects and professional work',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.slug}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              {project.headerImage && (
                <Image
                  src={project.headerImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                <h2 className="text-xl font-bold">{project.title}</h2>
                {project.status === "In Development" && (
                  <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    In Development
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech?.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {tech}
                  </span>
                ))}
                {project.tech?.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}