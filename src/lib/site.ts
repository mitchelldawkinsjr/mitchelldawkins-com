/**
 * Site-wide brand, social, and stream configuration.
 * Replace Twitch/YouTube placeholders with real channel URLs when ready.
 */

export const site = {
  name: 'Mitchell Dawkins II',
  shortName: 'Mitchell Dawkins',
  title: 'Senior Full Stack AI Engineer',
  brandLine: 'Building an AI software studio in public.',
  tagline:
    'Real products, honest lessons, live.',
  email: 'hello@mitchelldawkins.com',
  url: 'https://www.mitchelldawkins.com',
  resumePath: '/documents/Mitchell-Dawkins-II-Resume-2026.pdf',

  manifesto: `I believe the best way to learn is to build, the best way to teach is to share, and the best way to earn trust is to work in public. I use AI as a collaborator, not a shortcut, to create software that solves real problems. Every project, every deployment, every mistake, and every lesson becomes part of a public journey so others can learn alongside me. My goal isn't simply to ship software; it's to build products, knowledge, and a community that leave people better than I found them.`,

  ethos: [
    {
      name: 'Build',
      description: 'Create products that matter. Not demos. Not tutorials. Real software.',
    },
    {
      name: 'Learn',
      description: 'Stay curious. Experiment. Question assumptions. Grow with every project.',
    },
    {
      name: 'Share',
      description: 'Failures, debugging, architecture, mistakes, wins, and lessons learned.',
    },
    {
      name: 'Ship',
      description: 'Progress over perfection. Ideas become valuable when they reach users.',
    },
    {
      name: 'Serve',
      description: "Technology should make people's lives better across wellness, sports, AI tools, and education.",
    },
  ] as const,

  roleLadder: [
    {
      role: 'Engineer',
      description:
        'Senior Full Stack AI Engineer shipping production systems across web, cloud, and AI-assisted workflows.',
    },
    {
      role: 'Founder',
      description:
        'Building an AI software studio: real products that solve real problems, documented in public.',
    },
    {
      role: 'Teacher',
      description:
        'Sharing how software gets built: architecture, debugging, AI collaboration, and honest failures.',
    },
    {
      role: 'Service Provider',
      description:
        'Available for collaboration, product builds, AI-assisted engineering, and teaching engagements.',
    },
  ] as const,

  social: {
    github: 'https://github.com/mitchelldawkinsjr',
    linkedin: 'https://linkedin.com/in/mitchell-dawkins-ii-81614687/',
    foundation: 'https://dawkinsfamilyfoundation.org',
  },

  streams: {
    twitch: 'https://www.twitch.tv/mitchelldawkinsii',
    youtube: 'https://www.youtube.com/@mitchelldawkinsii',
    schedule: null as string | null,
  },

  ctas: {
    watchLive: { label: 'Watch me build', href: '/streams' },
    readJournal: { label: 'Read the journal', href: '/blog' },
    seeProjects: { label: 'See projects', href: '/projects' },
    workWithMe: { label: 'Work with me', href: '/contact' },
    consulting: { label: 'Consulting', href: '/consulting' },
  },
} as const;

export type SiteConfig = typeof site;
