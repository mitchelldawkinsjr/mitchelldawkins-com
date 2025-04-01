import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Mitchell Dawkins II | Senior Software Engineer',
    template: '%s | Mitchell Dawkins II',
  },
  description: 'Personal website and blog of Mitchell Dawkins, featuring the "Building AI with AI" series.',
  keywords: ['AI Engineer', 'Machine Learning', 'Building AI with AI', 'Next.js', 'React'],
  authors: [{ name: 'Mitchell Dawkins II' }],
  creator: 'Mitchell Dawkins',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mitchelldawkins.com',
    title: 'Mitchell Dawkins II | Senior Software Engineer',
    description: 'Personal website and blog of Mitchell Dawkins, featuring the "Building AI with AI" series.',
    siteName: 'Mitchell Dawkins',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitchell Dawkins II | Senior Software Engineer',
    description: 'Personal website and blog of Mitchell Dawkins, featuring the "Building AI with AI" series.',
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
