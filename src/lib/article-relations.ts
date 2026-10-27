import type { ServiceId } from './consulting';

export type ArticleRelation = {
  related: string[];
  project?: string;
  service?: ServiceId;
  /** Foundation essay and similar pieces should not grow a consulting pitch. */
  showCta?: boolean;
};

export const articleRelations: Record<string, ArticleRelation> = {
  'team-of-engineers-cursor-agent-pipeline': {
    related: ['seos-software-engineering-agent-os', 'fasted-biblical-fasting-companion'],
    project: 'seos',
    service: 'ai-automation',
  },
  'seos-software-engineering-agent-os': {
    related: ['team-of-engineers-cursor-agent-pipeline', 'fasted-biblical-fasting-companion'],
    project: 'seos',
    service: 'ai-automation',
  },
  'gh-film-hub-v2-year-two': {
    related: [
      'gh-film-review-pipeline-deep-dive',
      'hosting-gh-film-review-free-github-pages',
      'building-around-coach-spreadsheets-live-csv',
    ],
    project: 'gh-film-review-pipeline',
    service: 'custom-software',
  },
  'gh-film-review-pipeline-deep-dive': {
    related: [
      'gh-film-hub-v2-year-two',
      'hosting-gh-film-review-free-github-pages',
      'building-around-coach-spreadsheets-live-csv',
    ],
    project: 'gh-film-review-pipeline',
    service: 'custom-software',
  },
  'hosting-gh-film-review-free-github-pages': {
    related: [
      'gh-film-hub-v2-year-two',
      'self-hosted-wordpress-fleet-360-web-solutions-cloud',
      'gh-film-review-pipeline-deep-dive',
    ],
    project: 'gh-film-review-pipeline',
    service: 'modernization',
  },
  'self-hosted-wordpress-fleet-360-web-solutions-cloud': {
    related: ['hosting-gh-film-review-free-github-pages', 'thinker-microlearning-pwa'],
    project: '360-web-solutions-cloud',
    service: 'modernization',
  },
  'building-around-coach-spreadsheets-live-csv': {
    related: [
      'gh-film-hub-v2-year-two',
      'free-contact-form',
      'gh-film-review-pipeline-deep-dive',
    ],
    project: 'ghfb',
    service: 'custom-software',
  },
  'free-contact-form': {
    related: ['building-around-coach-spreadsheets-live-csv', 'hosting-gh-film-review-free-github-pages'],
    service: 'custom-software',
  },
  'introducing-video-processing-platform': {
    related: ['seos-software-engineering-agent-os', 'team-of-engineers-cursor-agent-pipeline'],
    project: 'video-processing-platform',
    service: 'ai-automation',
  },
  'thinker-microlearning-pwa': {
    related: ['fasted-biblical-fasting-companion', 'self-hosted-wordpress-fleet-360-web-solutions-cloud'],
    project: 'thinker',
    service: 'custom-software',
  },
  'fasted-biblical-fasting-companion': {
    related: [
      'seos-software-engineering-agent-os',
      'team-of-engineers-cursor-agent-pipeline',
      'thinker-microlearning-pwa',
    ],
    project: 'fasted',
    service: 'custom-software',
  },
  'tab-recorder-chrome-extension-demo-mp4': {
    related: ['thinker-microlearning-pwa'],
    project: 'tab-recorder',
    service: 'custom-software',
  },
  'little-sprouts-play-and-learn': {
    related: ['thinker-microlearning-pwa'],
    project: 'little-sprouts',
    service: 'custom-software',
  },
  'a-ballot-you-can-actually-read': {
    related: ['little-sprouts-play-and-learn'],
    project: 'kent-ballot',
    service: 'custom-software',
  },
  'dawkins-family-foundation-legacy': {
    related: [],
    showCta: false,
  },
};

export function getArticleRelation(slug: string): ArticleRelation | undefined {
  return articleRelations[slug];
}
