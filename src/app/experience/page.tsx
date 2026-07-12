import type { Metadata } from 'next';

import { PageIntro } from '@/components/portfolio/page-intro';
import { ProductProcessSection } from '@/components/portfolio/product-process';
import { ExperienceSection } from '@/components/portfolio/sections';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Experience',
  description:
    'Experience timeline for Japheth Oruko, including current PixeSci leadership and previous Ticet EDU product, design, and frontend work.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Experience', path: '/experience' },
        ])}
      />
      <div className="mx-auto max-w-5xl px-2 *:scroll-mt-20">
        <PageIntro
          kicker="Experience"
          title="Current product/design/frontend leadership with zero-to-one delivery depth."
          body="A focused view of my roles, responsibilities, and proof points, including current PixeSci website, application, design-system, and frontend leadership work."
        />
        <Separator />
        <ExperienceSection />
        <Separator />
        <ProductProcessSection />
      </div>
    </>
  );
}

function Separator() {
  return <div className="h-8 border-x border-line bg-[repeating-linear-gradient(135deg,var(--portfolio-line)_0,var(--portfolio-line)_1px,transparent_1px,transparent_12px)]" />;
}
