import type { Metadata } from 'next';
import { DM_Sans, Syne } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { site } from '@/lib/site';
import '@/styles/globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const isPreview = process.env.VERCEL_ENV === 'preview';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Building AI Software in Public`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    'Senior Full Stack AI Engineer',
    'build in public',
    'AI software studio',
    'live coding',
    'AI-assisted development',
    'open journal',
  ],
  authors: [{ name: site.name }],
  creator: site.shortName,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/logo/logo-stamp.png', sizes: 'any' },
    ],
    apple: [{ url: '/images/logo/logo-stamp.png' }],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/images/logo/logo-stamp.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: `${site.name} | Building AI Software in Public`,
    description: site.tagline,
    siteName: site.shortName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Building AI Software in Public`,
    description: site.tagline,
  },
  robots: isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <link rel="mask-icon" href="/images/logo/logo-stamp.png" color="#CA0000" />
        <meta name="msapplication-TileColor" content="#CA0000" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${dmSans.className} min-h-screen flex flex-col`}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme-light-default"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
