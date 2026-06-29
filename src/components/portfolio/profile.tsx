import Image from 'next/image';

import japhethOruko from '@/assets/images/japheth-oruko.png';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/copy-button';
import { Panel, PanelContent } from '@/components/ui/panel';
import { socialLinks } from '@/data/social-links';
import { USER } from '@/data/user';

import { ContactDialog } from './contact-dialog';
import { LocalTime } from './local-time';
import { RoleFlip } from './role-flip';

export function ProfileHeader() {
  const proofChips = ['PixeSci', 'Lead Product Designer', 'Frontend Lead', 'React.js', 'Next.js', 'Claude', 'Codex', 'MUI', 'DaisyUI', 'shadcn/ui', 'Tailwind CSS'];

  return (
    <Panel className="overflow-hidden">
      <div className="profile-cover relative min-h-[300px] border-b border-line sm:min-h-[390px]">
        <div className="absolute inset-0 grid place-items-center opacity-80">
          <div className="wire-mark" aria-hidden="true">
            JO
          </div>
        </div>
        <div className="absolute left-4 right-4 top-4 sm:left-6 sm:right-6">
          <div className="inline-flex max-w-full rounded-full border border-line bg-background/80 px-3 py-1 font-mono text-xs text-muted-text backdrop-blur">
            <span className="truncate">Nairobi, Kenya / Available for full-time and contract work</span>
          </div>
        </div>
      </div>

      <div className="grid border-b border-line sm:grid-cols-[176px_1fr]">
        <div className="border-b border-line p-4 sm:-mt-24 sm:border-b-0 sm:border-r sm:p-5">
          <div className="relative size-36 overflow-hidden rounded-full border border-line bg-surface p-1 shadow-sm sm:size-40">
            <Image src={japhethOruko} alt="Japheth Oruko portrait" fill priority sizes="160px" className="rounded-full object-cover" />
          </div>
        </div>

        <div className="space-y-5 p-4 sm:p-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-4xl font-semibold text-balance sm:text-5xl">{USER.displayName}</h1>
              <span className="rounded-full border border-brand/30 bg-brand-soft px-2 py-1 text-xs font-semibold text-brand">Verified profile</span>
            </div>
            <RoleFlip roles={USER.roles} />
            <p className="max-w-2xl text-lg leading-8 text-muted-text">{USER.hero}</p>
            <p className="max-w-2xl text-sm leading-7 text-muted-text">
              I help founders and product teams turn rough ideas into clear, buildable digital products: user-centered flows, polished interfaces, design systems, user stories, and production-ready React/Next.js frontend experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <ButtonLink variant="primary" href={USER.calendly} target="_blank" rel="noreferrer">
              Book a call
            </ButtonLink>
            <ContactDialog />
            <ButtonLink href="/work" variant="secondary">View work</ButtonLink>
            <ButtonLink href={USER.resume} target="_blank" rel="noreferrer" download>
              Download resume
            </ButtonLink>
          </div>

          <div className="flex flex-wrap gap-2">
            {proofChips.map(chip => (
              <Badge key={chip}>{chip}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

export function Overview() {
  const jobItems = [
    ['<>', 'Lead Product Designer', 'PixeSci', '/experience'],
    ['FE', 'Frontend Lead', 'PixeSci', '/experience'],
    ['PM', 'Previous Product Manager', 'Ticet EDU', '/experience'],
    ['UX', 'Previous Lead Product Designer', 'Ticet EDU', '/experience'],
  ];

  const introItems = [
    ['LC', 'Location', USER.location, `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.location)}`],
    ['TM', 'Local time', <LocalTime key="time" />, undefined],
    ['PH', 'Phone', USER.phone, `tel:${USER.phone.replaceAll(' ', '')}`],
    ['EM', 'Email', USER.email, `mailto:${USER.email}`],
    ['AV', 'Availability', USER.availability, undefined],
    ['LA', 'Languages', USER.languages.join(', '), undefined],
  ];

  return (
    <Panel id="about">
      <h2 className="sr-only">Overview</h2>
      <PanelContent className="space-y-3">
        <div className="grid gap-2">
          {jobItems.map(([icon, title, company, href]) => (
            <a key={`${title}-${company}`} href={href} className="group grid grid-cols-[36px_1fr] items-center gap-3 rounded-md border border-line bg-surface p-2 hover:border-foreground/30">
              <span className="grid size-9 place-items-center rounded-md border border-line bg-background font-mono text-xs text-muted-text group-hover:text-foreground">{icon}</span>
              <span className="text-sm leading-6">
                <span className="font-semibold">{title}</span>
                <span className="text-muted-text"> @ {company}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          {introItems.map(([icon, label, value, href]) => (
            <div key={String(label)} className="grid grid-cols-[36px_1fr] items-center gap-3 rounded-md border border-line bg-surface p-2">
              <span className="grid size-9 place-items-center rounded-md border border-line bg-background font-mono text-xs text-muted-text">{icon}</span>
              <span className="min-w-0 text-sm leading-6">
                <span className="mr-2 font-mono text-xs uppercase text-muted-text">{label}</span>
                {href ? (
                  <a href={String(href)} className="font-semibold hover:underline">
                    {value}
                  </a>
                ) : (
                  <span className="font-semibold">{value}</span>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
          {socialLinks.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-surface px-3 py-2 text-sm font-semibold hover:border-foreground/30">
              {link.label}
            </a>
          ))}
          <CopyButton value={USER.email} label="Copy email" />
        </div>
      </PanelContent>
    </Panel>
  );
}
