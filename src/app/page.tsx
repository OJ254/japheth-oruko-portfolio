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
import { JsonLd } from '@/components/seo/json-ld';
import { profilePageJsonLd, websiteJsonLd } from '@/lib/seo';

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
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
