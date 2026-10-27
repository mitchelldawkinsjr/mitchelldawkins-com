import Link from 'next/link';
import { site } from '@/lib/site';

export default function AuthorSection() {
  return (
    <Link
      href="/about"
      className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
    >
      {site.name}
    </Link>
  );
}
