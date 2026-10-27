import { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { consultingServices } from '@/lib/consulting';
import ConsultingView from '@/components/consulting/ConsultingView';
import TrackedLink from '@/components/blog/TrackedLink';
import JsonLd from '@/components/seo/JsonLd';

const description =
  'Software engineering consulting from Mitchell Dawkins II: custom software, AI automation, application modernization, and technical discovery.';

export const metadata: Metadata = {
  title: 'Consulting',
  description,
  alternates: { canonical: `${site.url}/consulting` },
  openGraph: {
    title: 'Consulting',
    description,
    url: `${site.url}/consulting`,
    type: 'website',
  },
};

export default function ConsultingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${site.name} Consulting`,
    url: `${site.url}/consulting`,
    description,
    email: site.email,
    provider: {
      '@type': 'Person',
      name: site.name,
      url: site.url,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Consulting services',
      itemListElement: consultingServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          url: `${site.url}/consulting#${service.id}`,
        },
      })),
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <ConsultingView />
      <JsonLd data={structuredData} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Consulting</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          I take a small number of engineering engagements alongside the products I build in public.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          The categories below are the work I actually do. The linked projects and articles are how
          you can check that.
        </p>

        <div className="space-y-16">
          {consultingServices.map((service) => (
            <section key={service.id} id={service.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{service.summary}</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 mb-6">
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Related work</h3>
              <ul className="space-y-1 mb-6">
                {service.projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {project.label}
                    </Link>
                  </li>
                ))}
                {service.posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {post.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <TrackedLink
                href={`/contact?topic=${encodeURIComponent(service.contactTopic)}`}
                ctaId={`consulting-${service.id}`}
                className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Discuss a project
              </TrackedLink>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Request a technical consultation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Email {site.email} or use the contact form. A useful first note says what the system does today,
            what is breaking, and what decision you need.
          </p>
          <TrackedLink
            href="/contact?topic=Technical%20consultation"
            ctaId="consulting-footer"
            className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Request a technical consultation
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
