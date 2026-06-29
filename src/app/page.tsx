import { Overview, ProfileHeader } from '@/components/portfolio/profile';
import { ProductProcessSection } from '@/components/portfolio/product-process';
import { ProjectArchiveSection } from '@/components/portfolio/projects';
import {
  AboutSection,
  CapabilitiesSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  MetricsSection,
  TechStackSection,
} from '@/components/portfolio/sections';
import { GitHubActivity } from '@/components/portfolio/github-activity';
import { USER } from '@/data/user';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd()).replace(/</g, '\\u003c'),
        }}
      />
      <div className="mx-auto max-w-5xl px-2 *:scroll-mt-20">
        <ProfileHeader />
        <Separator />
        <Overview />
        <Separator />
        <GitHubActivity />
        <Separator />
        <AboutSection />
        <Separator />
        <MetricsSection />
        <Separator />
        <CapabilitiesSection />
        <Separator />
        <ExperienceSection />
        <Separator />
        <ProductProcessSection />
        <Separator />
        <TechStackSection />
        <Separator />
        <EducationSection />
        <Separator />
        <ProjectArchiveSection />
        <Separator />
        <ContactSection />
      </div>
    </>
  );
}

function Separator() {
  return <div className="h-8 border-x border-line bg-[repeating-linear-gradient(135deg,var(--portfolio-line)_0,var(--portfolio-line)_1px,transparent_1px,transparent_12px)]" />;
}

function getJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Japheth Oruko Portfolio',
    url: 'https://japheth-oruko-portfolio.vercel.app/',
    mainEntity: {
      '@type': 'Person',
      name: USER.displayName,
      image: 'https://japheth-oruko-portfolio.vercel.app/assets/images/logo.png',
      jobTitle: USER.primaryTitle,
      email: `mailto:${USER.email}`,
      telephone: USER.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
      url: 'https://japheth-oruko-portfolio.vercel.app/',
      sameAs: [USER.github, USER.linkedin, USER.behance, USER.spotify],
      knowsAbout: USER.keywords,
    },
  };
}
