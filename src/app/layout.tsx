// src/app/layout.tsx

import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import ThemeRegistry from '@/components/shared/ThemeToggle/ThemeRegistry';
import './globals.css';
import AnimatedBackground from '@/components/general/AnimatedBackground/AnimatedBackground';

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
  title: "Japheth Oruko's Portfolio",
  description:
    'Showcasing frontend development, design systems, and product ownership work.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <title>Next.js 16 Starter Template</title>
        <meta name='description' content={metadata.description as string} />
        <meta
          name='keywords'
          content='japheth oruko resume, ui/ux desiger, product designer, product manager, product owner, frontend developer, user expirience, user design, user centric design'
        />
        <meta name='author' content='Japheth Oruko' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='Japheth Oruko' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Japheth Oruko',
              name: 'Japheth Oruko',
              url: 'url', // e.g: https://ticetedu.com
              logo: 'url', // e.g: https://ticetedu.com/public/ticet-small.svg
              sameAs: [
                'url', // e.g: https://www.facebook.com/ticetedu
                'url', // e.g: https://twitter.com/ticetedu
                'url', // e.g: https://linkedin.com/company/ticet-edu
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeRegistry>
            <div className='relative min-h-screen overflow-hidden p-4 md:p-8 lg:p-0'>
              <AnimatedBackground />
              <main className='relative z-10 flex min-h-screen w-full flex-col lg:items-center lg:justify-center'>
                {children}
                <Analytics />
              </main>
            </div>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
