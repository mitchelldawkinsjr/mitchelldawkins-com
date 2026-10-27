import Link from 'next/link';
import { getArticleRelation } from '@/lib/article-relations';
import { getConsultingService } from '@/lib/consulting';
import { getPostBySlug } from '@/lib/mdx';
import { getProjectBySlug } from '@/lib/project';
import TrackedLink from './TrackedLink';

export default async function ArticleEnd({ slug }: { slug: string }) {
  const relation = getArticleRelation(slug);
  const related = (
    await Promise.all((relation?.related ?? []).map((relatedSlug) => getPostBySlug(relatedSlug)))
  ).filter((post): post is NonNullable<typeof post> => post !== null);
  const project = relation?.project ? getProjectBySlug(relation.project) : undefined;
  const service = relation?.service ? getConsultingService(relation.service) : undefined;
  const showCta = relation?.showCta !== false && Boolean(service);

  if (related.length === 0 && !project && !showCta) {
    return null;
  }

  return (
    <aside className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 space-y-8">
      {(related.length > 0 || project) && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related</h2>
          <ul className="space-y-2">
            {project && (
              <li>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Project: {project.title}
                </Link>
              </li>
            )}
            {related.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showCta && service && (
        <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Need a similar solution?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This sits under {service.title}. If the problem looks familiar, start with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <TrackedLink
              href={`/contact?topic=${encodeURIComponent(service.contactTopic)}`}
              ctaId={`article-${service.id}`}
              className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Discuss a project
            </TrackedLink>
            <TrackedLink
              href={`/consulting#${service.id}`}
              ctaId={`article-services-${service.id}`}
              className="inline-block px-5 py-2.5 border border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg text-center hover:bg-white dark:hover:bg-gray-900 transition-colors"
            >
              Explore consulting services
            </TrackedLink>
          </div>
        </div>
      )}
    </aside>
  );
}
