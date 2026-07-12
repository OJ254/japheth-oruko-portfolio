import type { Metadata } from 'next';

import { PageIntro } from '@/components/portfolio/page-intro';
import { ContactSection } from '@/components/portfolio/sections';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd, createPageMetadata, personJsonLd } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Japheth Oruko for product design, UX documentation, frontend implementation, contract work, or full-time opportunities.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Japheth Oruko',
          mainEntity: personJsonLd(),
        }}
      />
      <div className='mx-auto max-w-5xl px-2 *:scroll-mt-20'>
        <PageIntro
          kicker='Contact'
          title='Start with the product problem, the UI/UX gap, or the frontend work that needs sharper execution.'
          body='Use the contact form, reach out directly by email, or book an appointment via Calendly.'
        />
        <Separator />
        <ContactSection />
      </div>
    </>
  );
}

function Separator() {
  return (
    <div className='border-line h-8 border-x bg-[repeating-linear-gradient(135deg,var(--portfolio-line)_0,var(--portfolio-line)_1px,transparent_1px,transparent_12px)]' />
  );
}
