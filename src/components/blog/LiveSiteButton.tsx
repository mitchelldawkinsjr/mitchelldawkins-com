import Link from 'next/link';

type LiveSiteButtonProps = {
  href: string;
  children?: React.ReactNode;
};

export default function LiveSiteButton({ href, children = '🎬 View Live Site' }: LiveSiteButtonProps) {
  return (
    <div className="flex justify-center my-8">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          bg-gradient-to-r from-purple-600 to-purple-800
          dark:from-purple-500 dark:to-purple-700
          text-white
          px-6 py-3
          rounded-lg
          font-semibold
          text-base
          shadow-lg
          shadow-purple-500/30
          hover:shadow-xl hover:shadow-purple-500/40
          hover:-translate-y-0.5
          transition-all
          duration-300
          no-underline
        "
      >
        {children}
      </Link>
    </div>
  );
}

