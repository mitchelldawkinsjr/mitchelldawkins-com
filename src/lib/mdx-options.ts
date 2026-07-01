/* eslint-disable @typescript-eslint/no-explicit-any */
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export const mdxRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm as any],
    rehypePlugins: [
      rehypeHighlight as any,
      rehypeSlug as any,
      [rehypeAutolinkHeadings as any, { behavior: 'wrap' }],
    ],
  },
};
