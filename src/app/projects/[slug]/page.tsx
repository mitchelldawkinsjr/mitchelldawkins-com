import { getProjectBySlug, getAllProjects } from '@/lib/project';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectTechBadge from '@/components/ProjectTechBadge';
import { Metadata } from 'next';

// Generate metadata for each project page
export async function generateMetadata({ params }: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }
  
  return {
    title: `${project.title} | Your Portfolio`,
    description: project.description,
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = getAllProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { 
  params: { slug: string } 
}) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Project header */}
      <div className="mb-10">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">{project.title}</h1>
        
        {project.status && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
              {project.status}
            </span>
          </div>
        )}
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech?.map((tech) => (
            <ProjectTechBadge key={tech} name={tech} />
          ))}
        </div>
        
        {/* Project links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-4 mb-8">
            {project.links.map((link) => (
              <a 
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
        
        {/* Featured image */}
        {project.headerImage && (
          <div className="relative w-full h-72 md:h-96 mb-10 rounded-lg overflow-hidden">
            <Image
              src={project.headerImage}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 1000px"
              priority
            />
          </div>
        )}
      </div>
      
      {/* Project content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={project.content} />
      </article>
      
      {/* Target audience section */}
      {project.audience && project.audience.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who This Is For</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.audience.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Footer navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}