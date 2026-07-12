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
import { defaultSeoDescription, SITE_NAME, SITE_URL } from '@/lib/seo';
import { cn } from '@/lib/utils';

import './globals.css';

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Japheth Oruko | Product Designer, Product Manager, Frontend Developer & AI-assisted Product Builder',
    template: '%s | Japheth Oruko',
  },
  description: defaultSeoDescription,
  applicationName: SITE_NAME,
  keywords: [...USER.keywords],
  authors: [{ name: USER.displayName, url: USER.linkedin }],
  creator: USER.displayName,
  publisher: USER.displayName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Japheth Oruko | Product Designer, Product Manager, Frontend Developer & AI-assisted Product Builder',
    description: defaultSeoDescription,
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_KE',
    type: 'profile',
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Japheth Oruko portfolio social preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Japheth Oruko | Product Designer, Product Manager, Frontend Developer & AI-assisted Product Builder',
    description: defaultSeoDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
