import GithubSlugger from 'github-slugger';

export type Heading = {
  level: 2 | 3;
  text: string;
  id: string;
};

/** Headings that match rehype-slug / github-slugger on the rendered MDX. */
export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  const withoutFences = markdown.replace(/```[\s\S]*?```/g, '');
  const headings: Heading[] = [];

  const pattern = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(withoutFences)) !== null) {
    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_]/g, '')
      .trim();
    const level = match[1].length === 2 ? 2 : 3;
    headings.push({ level, text, id: slugger.slug(text) });
  }

  return headings;
}
