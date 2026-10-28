export type ServiceId =
  | 'custom-software'
  | 'ai-automation'
  | 'modernization'
  | 'discovery';

export type ConsultingService = {
  id: ServiceId;
  title: string;
  summary: string;
  details: string[];
  projects: { slug: string; label: string }[];
  posts: { slug: string; label: string }[];
  contactTopic: string;
};

export const consultingServices: ConsultingService[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    summary:
      'Web apps, internal tools, and small SaaS products in React, TypeScript, Laravel, and Python — built around the workflow people already use.',
    details: [
      'React, TypeScript, and Next.js interfaces',
      'Laravel, PHP, and FastAPI backends',
      'APIs and internal business tools',
      'Progressive web apps and static reporting sites',
    ],
    projects: [
      { slug: 'ghfb', label: 'GHFB Team Tools Hub' },
      { slug: 'gh-film-review-pipeline', label: 'GH Film Review Pipeline' },
      { slug: 'film-room', label: 'Film Room' },
      { slug: 'thinker', label: 'Thinker' },
      { slug: 'fasted', label: 'Fasted' },
    ],
    posts: [
      { slug: 'building-around-coach-spreadsheets-live-csv', label: 'I Didn’t Replace the Spreadsheet' },
      { slug: 'film-room-offline-review', label: 'Film Room: Review When the Connection Drops' },
      { slug: 'gh-film-hub-v2-year-two', label: 'GH Film Hub v2' },
    ],
    contactTopic: 'Custom software',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Engineering',
    summary:
      'Agent workflows, LLM features, and integrations where a person still reviews the output. I use this on my own repositories before I recommend it.',
    details: [
      'GitHub-based agent pipelines with human merge gates',
      'Repository rules, prompts, and review loops',
      'LLM application features and integrations',
      'Retrieval and transcription systems, scoped to what is actually built',
    ],
    projects: [
      { slug: 'seos', label: 'SEOS' },
      { slug: 'video-processing-platform', label: 'Video Processing Platform' },
    ],
    posts: [
      { slug: 'team-of-engineers-cursor-agent-pipeline', label: 'Building a Team of Engineers' },
      { slug: 'seos-software-engineering-agent-os', label: 'From One Agent to an OS' },
    ],
    contactTopic: 'AI automation',
  },
  {
    id: 'modernization',
    title: 'Application Modernization',
    summary:
      'Legacy PHP and WordPress systems that need a safer deploy path, a clearer API boundary, or fewer manual upgrades — without a rewrite for its own sake.',
    details: [
      'PHP, Laravel, and Symfony codebases',
      'WordPress fleet operations and self-hosted infrastructure',
      'API cleanup, performance, and maintainability',
      'Static publishing when a server is the wrong tool',
    ],
    projects: [
      { slug: '360-web-solutions-cloud', label: '360 Web Solutions Cloud' },
      { slug: 'wnba-stat-spot', label: 'WNBA Stat Spot' },
    ],
    posts: [
      { slug: 'self-hosted-wordpress-fleet-360-web-solutions-cloud', label: 'Hosting a Fleet of WordPress Sites' },
      { slug: 'hosting-gh-film-review-free-github-pages', label: 'Hosting an Analytics Site for $0' },
    ],
    contactTopic: 'Application modernization',
  },
  {
    id: 'discovery',
    title: 'Technical Discovery & Architecture',
    summary:
      'A written read on the system you have: constraints, a proposed shape, and a sequence to build it. Useful before a large commitment of engineering time.',
    details: [
      'Requirements and constraint gathering',
      'Technical assessment of an existing app or workflow',
      'Architecture options with the tradeoffs attached',
      'An implementation sequence, not a slide deck of tools',
    ],
    projects: [
      { slug: 'seos', label: 'SEOS' },
      { slug: '360-web-solutions-cloud', label: '360 Web Solutions Cloud' },
    ],
    posts: [
      { slug: 'seos-software-engineering-agent-os', label: 'From One Agent to an OS' },
      { slug: 'gh-film-review-pipeline-deep-dive', label: 'Film Review Pipeline' },
    ],
    contactTopic: 'Technical discovery',
  },
];

export function getConsultingService(id: ServiceId): ConsultingService | undefined {
  return consultingServices.find((service) => service.id === id);
}
