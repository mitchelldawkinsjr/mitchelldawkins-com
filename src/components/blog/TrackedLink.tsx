'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

type TrackedLinkProps = {
  href: string;
  event?: string;
  ctaId?: string;
  className?: string;
  children: React.ReactNode;
};

export default function TrackedLink({
  href,
  event = 'cta_click',
  ctaId,
  className,
  children,
}: TrackedLinkProps) {
  const external = href.startsWith('http');

  const onClick = () => {
    trackEvent(event, { cta_id: ctaId, destination: href });
  };

  if (external) {
    return (
      <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
