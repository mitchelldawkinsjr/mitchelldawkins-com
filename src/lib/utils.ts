/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Date-only frontmatter (`YYYY-MM-DD`) is a calendar date.
 * `new Date('YYYY-MM-DD')` is UTC midnight and renders as the previous day in US timezones.
 */
export function parseSiteDate(dateString: string): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString.trim());
  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  return new Date(dateString);
}

export function formatDate(dateString: string): string {
  const date = parseSiteDate(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function seriesSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
  
  export function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  
  export function getSeriesInfo(series: string, allPosts: any[]) {
    const seriesPosts = allPosts
      .filter((post) => post.series === series)
      .sort((a, b) => parseSiteDate(a.date).getTime() - parseSiteDate(b.date).getTime());
    
    return {
      title: series,
      posts: seriesPosts,
      count: seriesPosts.length,
    };
  }