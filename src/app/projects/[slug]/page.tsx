import { getProjectBySlug, getAllProjects } from '@/lib/project';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectTechBadge from '@/components/ProjectTechBadge';
import MdxImage from '@/components/mdx/MdxImage';
import { mdxRemoteOptions } from '@/lib/mdx-options';
import { Metadata } from 'next';
import { site } from '@/lib/site';
import TrackedLink from '@/components/blog/TrackedLink';
import { getPostBySlug } from '@/lib/mdx';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: project.title,
    description: project.why || project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.why || project.description,
      url: `/projects/${project.slug}`,
      ...(project.headerImage ? { images: [{ url: project.headerImage, alt: project.title }] } : {}),
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const mdxComponents = {
    img: MdxImage,
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-10">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h1>

        {project.status && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
              {project.status}
            </span>
          </div>
        )}

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech?.map((tech) => (
            <ProjectTechBadge key={tech} name={tech} />
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-8">
            {project.links.map((link) => {
              const isExternal = link.url.startsWith('http');
              return (
                <TrackedLink
                  key={link.url}
                  href={link.url}
                  event={isExternal ? 'outbound_click' : 'cta_click'}
                  ctaId="project-link"
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                  {link.title}
                </TrackedLink>
              );
            })}
            {site.streams.published && (
              <Link
                href="/streams"
                className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >
                Streams
              </Link>
            )}
          </div>
        )}

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

      {/* Story blocks */}
      {(project.why || project.streamFocus) && (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {project.why && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Why it exists
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{project.why}</p>
            </div>
          )}
          {project.streamFocus && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                In the build
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{project.streamFocus}</p>
            </div>
          )}
        </div>
      )}

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote
          source={project.content}
          components={mdxComponents}
          options={mdxRemoteOptions}
        />
      </article>

      {project.lessons && project.lessons.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Lessons learned
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </div>
      )}

      {project.roadmap && project.roadmap.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Roadmap</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {project.relatedPosts && project.relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Related writing
          </h2>
          <ul className="space-y-2">
            {await Promise.all(project.relatedPosts.map(async (slug) => {
              const post = await getPostBySlug(slug);
              return (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {post?.title ?? slug}
                  </Link>
                </li>
              );
            }))}
          </ul>
        </div>
      )}

      {project.audience && project.audience.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Who This Is For
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.audience.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Need a similar solution?{' '}
          <TrackedLink href="/consulting" ctaId="project-consulting" className="text-blue-600 dark:text-blue-400 hover:underline">
            Explore consulting services
          </TrackedLink>{' '}
          or{' '}
          <TrackedLink
            href="/contact?topic=Project%20inquiry"
            ctaId="project-contact"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            discuss a project
          </TrackedLink>
          .
        </p>
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
