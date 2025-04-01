/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  
  export function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  
  export function getSeriesInfo(series: string, allPosts: any[]) {
    const seriesPosts = allPosts
      .filter((post) => post.series === series)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return {
      title: series,
      posts: seriesPosts,
      count: seriesPosts.length,
    };
  }