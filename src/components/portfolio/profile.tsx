// @/components/portfolio/profile.tsx

import type { ComponentType, CSSProperties, SVGProps } from 'react';

import Image from 'next/image';

import japhethOruko from '@/assets/images/japheth-oruko.png';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/copy-button';
import { Panel, PanelContent } from '@/components/ui/panel';
import {
  AdobeXD,
  Angular,
  Atlassian,
  Bitbucket,
  Confluence,
  Css,
  DaisyUI,
  Docker,
  Figma,
  GitHub,
  Html,
  JavaScript,
  Jest,
  Jira,
  Keycloak,
  MaterialUI,
  NestJS,
  NextJS,
  NodeJS,
  PostgreSQL,
  Prisma,
  ReactLogo,
  Redux,
  ShadcnUI,
  Tailwind,
  Typescript,
  VisualStudioCode,
  ViteJS,
  Vue,
  WebStorm,
} from '@/components/ui/dataDisplay/icons/logos';
import { socialLinks } from '@/data/social-links';
import { USER } from '@/data/user';

import { ContactDialog } from './contact-dialog';
import { LocalTime } from './local-time';
import { RoleFlip } from './role-flip';

type LogoIcon = ComponentType<SVGProps<SVGSVGElement>>;

type OrbitLogo = {
  name: string;
  Icon: LogoIcon;
  delay: string;
};

const outerOrbitLogos: OrbitLogo[] = [
  { name: 'React', Icon: ReactLogo, delay: '0s' },
  { name: 'Next.js', Icon: NextJS, delay: '-3.6s' },
  { name: 'TypeScript', Icon: Typescript, delay: '-7.2s' },
  { name: 'Tailwind CSS', Icon: Tailwind, delay: '-10.8s' },
  { name: 'Figma', Icon: Figma, delay: '-14.4s' },
  { name: 'GitHub', Icon: GitHub, delay: '-18s' },
  { name: 'shadcn/ui', Icon: ShadcnUI, delay: '-19.8s' },
  { name: 'Visual Studio Code', Icon: VisualStudioCode, delay: '-21.6s' },
  { name: 'WebStorm', Icon: WebStorm, delay: '-25.2s' },
  { name: 'ViteJS', Icon: ViteJS, delay: '-28.8s' },
];

const middleOrbitLogos: OrbitLogo[] = [
  { name: 'HTML', Icon: Html, delay: '-1.3s' },
  { name: 'CSS', Icon: Css, delay: '-4.2s' },
  { name: 'JavaScript', Icon: JavaScript, delay: '-7.1s' },
  { name: 'Redux', Icon: Redux, delay: '-10s' },
  { name: 'Vue', Icon: Vue, delay: '-12.9s' },
  { name: 'Angular', Icon: Angular, delay: '-15.8s' },
  { name: 'Material UI', Icon: MaterialUI, delay: '-18.7s' },
  { name: 'DaisyUI', Icon: DaisyUI, delay: '-20.1s' },
  { name: 'Adobe XD', Icon: AdobeXD, delay: '-21.6s' },
  { name: 'Atlassian', Icon: Atlassian, delay: '-24.5s' },
];

const innerOrbitLogos: OrbitLogo[] = [
  { name: 'Bitbucket', Icon: Bitbucket, delay: '-1.7s' },
  { name: 'Node.js', Icon: NodeJS, delay: '-5.1s' },
  { name: 'PostgreSQL', Icon: PostgreSQL, delay: '-8.5s' },
  { name: 'Docker', Icon: Docker, delay: '-11.9s' },
  { name: 'Prisma', Icon: Prisma, delay: '-15.3s' },
  { name: 'Jira', Icon: Jira, delay: '-18.7s' },
  { name: 'Confluence', Icon: Confluence, delay: '-22.1s' },
  { name: 'Jest', Icon: Jest, delay: '-25.5s' },
  { name: 'Keycloak', Icon: Keycloak, delay: '-28.9s' },
  { name: 'NestJS', Icon: NestJS, delay: '-32.3s' },
];

function OrbitLogoToken({ logo }: { logo: OrbitLogo }) {
  const { Icon } = logo;
  const style = {
    '--logo-delay': logo.delay,
  } as CSSProperties;

  return (
    <span className='profile-logo-token' style={style} title={logo.name}>
      <span className='profile-logo-token__inner'>
        <Icon className='profile-logo-token__icon' />
      </span>
    </span>
  );
}

function ProfileCoverLogoOrbit() {
  return (
    <div className='profile-logo-field' aria-hidden='true'>
      <div className='profile-logo-orbit profile-logo-orbit--outer'>
        {outerOrbitLogos.map(logo => (
          <OrbitLogoToken key={logo.name} logo={logo} />
        ))}
      </div>
      <div className='profile-logo-orbit profile-logo-orbit--middle'>
        {middleOrbitLogos.map(logo => (
          <OrbitLogoToken key={logo.name} logo={logo} />
        ))}
      </div>
      <div className='profile-logo-orbit profile-logo-orbit--inner'>
        {innerOrbitLogos.map(logo => (
          <OrbitLogoToken key={logo.name} logo={logo} />
        ))}
      </div>
      <div className='profile-logo-rail profile-logo-rail--outer' />
      <div className='profile-logo-rail profile-logo-rail--middle' />
      <div className='profile-logo-rail profile-logo-rail--inner' />
    </div>
  );
}

export function ProfileHeader() {
  const proofChips = [
    'PixeSci',
    'Product Designer',
    'Frontend Developer',
    'Full-Stack Builder',
    'Project Manager',
    'React.js',
    'Next.js',
    'Claude',
    'Codex',
    'MUI',
    'DaisyUI',
    'shadcn/ui',
    'Tailwind CSS',
  ];

  return (
    <Panel className='overflow-hidden'>
      <div
        id='profile-cover'
        className='profile-cover border-line relative isolate min-h-[300px] overflow-hidden border-b sm:min-h-[390px]'
      >
        <ProfileCoverLogoOrbit />
        <div className='absolute inset-0 z-10 grid place-items-center opacity-80'>
          <div className='wire-mark' aria-hidden='true'>
            JO
          </div>
        </div>
        <div className='absolute top-4 right-4 left-4 z-20 sm:right-6 sm:left-6'>
          <div className='border-line bg-background/80 text-muted-text inline-flex max-w-full rounded-full border px-3 py-1 font-mono text-xs backdrop-blur'>
            <span className='truncate'>
              Nairobi, Kenya / Available for full-time and contract work
            </span>
          </div>
        </div>
      </div>

      <div className='border-line grid border-b sm:grid-cols-[176px_1fr]'>
        <div className='border-line border-b p-4 sm:-mt-24 sm:border-r sm:border-b-0 sm:p-5'>
          <div className='border-line bg-surface relative size-36 overflow-hidden rounded-full border p-1 shadow-sm sm:size-40'>
            <Image
              src={japhethOruko}
              alt='Japheth Oruko portrait'
              fill
              priority
              sizes='160px'
              className='rounded-full object-cover'
            />
          </div>
        </div>

        <div className='space-y-5 p-4 sm:p-5'>
          <div className='space-y-3'>
            <div className='flex flex-wrap items-center gap-2'>
              <h1 className='text-4xl font-semibold text-balance sm:text-5xl'>
                {USER.displayName}
              </h1>
              <span className='border-brand/30 bg-brand-soft text-brand rounded-full border px-2 py-1 text-xs font-semibold'>
                Verified profile
              </span>
            </div>
            <RoleFlip roles={USER.roles} />
            <p className='text-muted-text max-w-2xl text-lg leading-8'>
              {USER.hero}
            </p>
            <p className='text-muted-text max-w-2xl text-sm leading-7'>
              I help founders and product teams turn rough ideas into clear,
              buildable digital products: user-centered flows, polished
              interfaces, design systems, user stories, production-ready
              React/Next.js experiences, and practical backend workflows.
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            <ButtonLink
              variant='primary'
              href={USER.calendly}
              target='_blank'
              rel='noreferrer'
            >
              Book a call
            </ButtonLink>
            <ContactDialog />
            <ButtonLink href='/work' variant='secondary'>
              View work
            </ButtonLink>
            <ButtonLink
              href={USER.resume}
              target='_blank'
              rel='noreferrer'
              download
            >
              Download resume
            </ButtonLink>
          </div>

          <div className='flex flex-wrap gap-2'>
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
    ['FE', 'Lead Frontend Developer', 'PixeSci', '/experience'],
    ['FS', 'Full-Stack Portal Developer', 'PixeSci', '/experience'],
    ['PM', 'Previous Product Manager', 'Ticet EDU', '/experience'],
    ['UX', 'Previous Lead Product Designer', 'Ticet EDU', '/experience'],
  ];

  const introItems = [
    [
      'LC',
      'Location',
      USER.location,
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.location)}`,
    ],
    ['TM', 'Local time', <LocalTime key='time' />, undefined],
    ['PH', 'Phone', USER.phone, `tel:${USER.phone.replaceAll(' ', '')}`],
    ['EM', 'Email', USER.email, `mailto:${USER.email}`],
    ['AV', 'Availability', USER.availability, undefined],
    ['LA', 'Languages', USER.languages.join(', '), undefined],
  ];

  return (
    <Panel id='about'>
      <h2 className='sr-only'>Overview</h2>
      <PanelContent className='space-y-3'>
        <div className='grid gap-2'>
          {jobItems.map(([icon, title, company, href]) => (
            <a
              key={`${title}-${company}`}
              href={href}
              className='group border-line bg-surface hover:border-foreground/30 grid grid-cols-[36px_1fr] items-center gap-3 rounded-md border p-2'
            >
              <span className='border-line bg-background text-muted-text group-hover:text-foreground grid size-9 place-items-center rounded-md border font-mono text-xs'>
                {icon}
              </span>
              <span className='text-sm leading-6'>
                <span className='font-semibold'>{title}</span>
                <span className='text-muted-text'> @ {company}</span>
              </span>
            </a>
          ))}
        </div>

        <div className='grid gap-2 md:grid-cols-2'>
          {introItems.map(([icon, label, value, href]) => (
            <div
              key={String(label)}
              className='border-line bg-surface grid grid-cols-[36px_1fr] items-center gap-3 rounded-md border p-2'
            >
              <span className='border-line bg-background text-muted-text grid size-9 place-items-center rounded-md border font-mono text-xs'>
                {icon}
              </span>
              <span className='min-w-0 text-sm leading-6'>
                <span className='text-muted-text mr-2 font-mono text-xs uppercase'>
                  {label}
                </span>
                {href ? (
                  <a
                    href={String(href)}
                    className='font-semibold hover:underline'
                  >
                    {value}
                  </a>
                ) : (
                  <span className='font-semibold'>{value}</span>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className='border-line flex flex-wrap items-center gap-2 border-t pt-3'>
          {socialLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              target='_blank'
              rel='noreferrer'
              className='border-line bg-surface hover:border-foreground/30 rounded-full border px-3 py-2 text-sm font-semibold'
            >
              {link.label}
            </a>
          ))}
          <CopyButton value={USER.email} label='Copy email' />
        </div>
      </PanelContent>
    </Panel>
  );
}
