import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';

import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';
import { ThemeProvider } from '@/components/site/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { USER } from '@/data/user';

import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://japheth-oruko-portfolio.vercel.app'),
  title: {
    default:
      'Japheth Oruko | Product Designer, Project Manager, Frontend Developer & React/Next.js Developer',
    template: '%s | Japheth Oruko',
  },
  description:
    'Portfolio of Japheth Oruko, a Nairobi-based Frontend Developer, Product Designer, and Project Manager helping teams design, document, and ship user-centered digital products with React, Next.js, modern UI systems, Claude, and Codex.',
  keywords: [...USER.keywords],
  authors: [{ name: USER.displayName, url: USER.linkedin }],
  creator: USER.displayName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Japheth Oruko | Product Designer, Project Manager, Frontend Developer & React/Next.js Developer',
    description:
      'A serious product/design/frontend portfolio for startup founders, product leaders, design managers, and engineering teams.',
    url: '/',
    siteName: 'Japheth Oruko Portfolio',
    type: 'profile',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Japheth Oruko portfolio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Japheth Oruko | Product Designer, Project Manager, Frontend Developer & React/Next.js Developer',
    description:
      'Nairobi-based product designer, product manager, frontend developer, and AI-assisted product builder.',
    images: ['/assets/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('font-sans', inter.variable)}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <Toaster />
            <SpeedInsights />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
