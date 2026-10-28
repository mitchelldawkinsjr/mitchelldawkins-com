import Link from 'next/link';
import { site } from '@/lib/site';
import { SocialLinks } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/streams', label: 'Streams' },
    { href: '/blog', label: 'Blog' },
    { href: '/extension', label: 'Extensions' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/contact', label: 'Contact' },
  ].filter((link) => site.streams.published || link.href !== '/streams');

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {site.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{site.brandLine}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{site.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Connect</h3>
            <div className="mt-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
