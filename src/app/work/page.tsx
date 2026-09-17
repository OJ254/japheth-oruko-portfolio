import type { Metadata } from 'next';

import { PageIntro } from '@/components/portfolio/page-intro';
import { ProjectArchiveSection } from '@/components/portfolio/projects';
import { JsonLd } from '@/components/seo/json-ld';
import { projects } from '@/data/projects';
import {
  breadcrumbJsonLd,
  createPageMetadata,
  projectItemListJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Work',
  description:
    'Case-study archive for Japheth Oruko across PixeSci, Ticet EDU, product documentation, UI/UX design, full-stack portal work, and frontend implementation.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ])}
      />
      <JsonLd data={projectItemListJsonLd(projects)} />
      <div className='mx-auto max-w-5xl px-2 *:scroll-mt-20'>
        <PageIntro
          kicker='Work'
          title='Selected work across product design, product management, full-stack development, and frontend delivery.'
          body='A curated collection of product experiences, interfaces, design systems, and implementation work, showing how ideas move from product thinking and UX through design and frontend development.'
        />
        <Separator />
        <ProjectArchiveSection />
      </div>
    </>
  );
}

function Separator() {
  return (
    <div className='border-line h-8 border-x bg-[repeating-linear-gradient(135deg,var(--portfolio-line)_0,var(--portfolio-line)_1px,transparent_1px,transparent_12px)]' />
  );
}
