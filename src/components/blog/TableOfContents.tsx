import type { Heading } from '@/lib/headings';

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const topLevel = headings.filter((heading) => heading.level === 2);
  if (topLevel.length < 4) return null;

  return (
    <nav aria-label="On this page" className="mb-10 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">On this page</p>
      <ol className="space-y-1 text-sm">
        {topLevel.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
