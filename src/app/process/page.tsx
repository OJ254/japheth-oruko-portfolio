import type { Metadata } from 'next';

import { PageIntro } from '@/components/portfolio/page-intro';
import { ProductProcessSection } from '@/components/portfolio/product-process';
import { JsonLd } from '@/components/seo/json-ld';
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Process',
  description:
    'Japheth Oruko product process from market research and discovery through UX, UI, design systems, frontend development, testing, launch, and optimization.',
  path: '/process',
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Process', path: '/process' },
        ])}
      />
      <div className="mx-auto max-w-5xl px-2 *:scroll-mt-20">
        <PageIntro
          kicker="Process"
          title="How I turn product ideas into usable, buildable digital experiences."
          body="A focused view of how I move from market context and user needs to product structure, interface systems, implementation, validation, release, and continuous improvement."
        />
        <Separator />
        <ProductProcessSection id="process-detail" expanded />
      </div>
    </>
  );
}

function Separator() {
  return <div className="h-8 border-x border-line bg-[repeating-linear-gradient(135deg,var(--portfolio-line)_0,var(--portfolio-line)_1px,transparent_1px,transparent_12px)]" />;
}
