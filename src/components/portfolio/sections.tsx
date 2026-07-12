import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button';
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  SectionKicker,
} from '@/components/ui/panel';
import { capabilities, stackGroups } from '@/data/skills';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { metrics } from '@/data/metrics';
import { USER } from '@/data/user';

import { ContactDialog } from './contact-dialog';

export function AboutSection() {
  return (
    <Panel>
      <PanelHeader>
        <SectionKicker>About</SectionKicker>
        <PanelTitle>
          A product partner for the messy middle between idea, design, and code.
        </PanelTitle>
      </PanelHeader>
      <PanelContent className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='text-muted-text space-y-4 text-sm leading-7'>
          <p>
            I am a Nairobi-based Product Designer and Full-Stack Product
            Builder with 8+ years of experience creating digital products. My
            strongest work sits at the intersection of product definition,
            user-centric UI/UX, interface systems, React/Next.js
            implementation, and practical backend workflows.
          </p>
          <p>
            I am especially useful in zero-to-one and startup environments where
            there is no perfect brief. I can help define the problem, shape the
            MVP, design the experience, document the behavior, and lead
            implementation across frontend and product-facing backend surfaces.
          </p>
          <p>
            For established teams, I bring structure to product experiences that
            need clearer UX, stronger UI systems, modern React/Next.js
            execution, and better handoff between product, design, and
            engineering.
          </p>
        </div>
        <div className='grid gap-3'>
          {[
            [
              'For startups',
              'Clarify the product, design the MVP, write buildable stories, and ship interfaces without bloated process.',
            ],
            [
              'For product teams',
              'Improve UX, stabilize design systems, document product behavior, and reduce handoff friction.',
            ],
            [
              'For engineering teams',
              'Translate designs into practical React/Next.js components and portal workflows with awareness of state, data boundaries, responsiveness, and constraints.',
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className='border-line bg-surface rounded-md border p-4'
            >
              <h3 className='font-semibold'>{title}</h3>
              <p className='text-muted-text mt-2 text-sm leading-6'>{body}</p>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}

export function MetricsSection() {
  return (
    <Panel id='proof'>
      <PanelHeader>
        <SectionKicker>Proof</SectionKicker>
        <PanelTitle>
          Current PixeSci product leadership, plus measured proof from detailed
          Ticet EDU portfolio material.
        </PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className='border-line bg-surface text-muted-text mb-4 rounded-md border p-4 text-sm leading-6'>
          At PixeSci, current proof includes the new public website, PixeSci
          Design System, application redesign, frontend direction, full-stack
          organization portal work, product visuals, and AI-assisted
          design-to-code workflow. The numeric metrics below are selected
          outcomes from previous Ticet EDU portfolio material.
        </div>
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {metrics.map(metric => (
            <div
              key={metric.label}
              className='border-line bg-surface rounded-md border p-4'
            >
              <div className='text-3xl font-semibold'>{metric.value}</div>
              <p className='text-muted-text mt-2 text-sm leading-6'>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}

export function CapabilitiesSection() {
  return (
    <Panel id='capabilities'>
      <PanelHeader>
        <SectionKicker>Capabilities</SectionKicker>
        <PanelTitle>
          Discovery, UX, documentation, frontend implementation, and portal
          backend workflows in one product workflow.
        </PanelTitle>
      </PanelHeader>
      <PanelContent className='grid gap-3 md:grid-cols-2'>
        {capabilities.map(item => (
          <article
            key={item.title}
            className='border-line bg-surface rounded-md border p-4'
          >
            <h3 className='font-semibold'>{item.title}</h3>
            <p className='text-muted-text mt-2 text-sm leading-6'>
              {item.body}
            </p>
            <p className='border-line text-muted-text mt-4 border-t pt-3 font-mono text-xs'>
              {item.artifact}
            </p>
          </article>
        ))}
      </PanelContent>
    </Panel>
  );
}

export function ExperienceSection() {
  return (
    <Panel id='experience'>
      <PanelHeader>
        <SectionKicker>Experience</SectionKicker>
        <PanelTitle>
          Current PixeSci leadership, backed by detailed Ticet EDU zero-to-one
          delivery proof.
        </PanelTitle>
      </PanelHeader>
      <PanelContent className='space-y-4'>
        {experience.map(company => (
          <article
            key={company.company}
            className='border-line bg-surface rounded-md border'
          >
            <div className='border-line border-b p-4'>
              <div className='flex flex-wrap items-start justify-between gap-3'>
                <div>
                  <h3 className='text-xl font-semibold'>{company.company}</h3>
                  <p className='text-muted-text mt-1 text-sm'>
                    {company.location} / {company.type}
                  </p>
                </div>
                <a
                  href={company.website}
                  target='_blank'
                  rel='noreferrer'
                  className='text-brand text-sm font-semibold hover:underline'
                >
                  Website
                </a>
              </div>
              {company.note && (
                <p className='mt-3 rounded-md border border-amber-300/50 bg-amber-100/50 p-3 text-xs leading-5 text-amber-950 dark:bg-amber-300/10 dark:text-amber-100'>
                  {company.note}
                </p>
              )}
            </div>
            <div className='divide-line divide-y'>
              {company.roles.map(role => (
                <details key={role.title} className='group'>
                  <summary className='cursor-pointer list-none p-4'>
                    <div className='flex items-start justify-between gap-3'>
                      <div className='min-w-0'>
                        <div className='flex flex-wrap items-center gap-2'>
                          <h4 className='font-semibold'>{role.title}</h4>
                          <span className='text-muted-text font-mono text-xs'>
                            {role.duration}
                          </span>
                        </div>
                        <p className='text-muted-text mt-2 text-sm leading-6'>
                          {role.summary}
                        </p>
                      </div>
                      <span
                        className='border-line bg-background text-muted-text grid size-8 shrink-0 place-items-center rounded-md border font-mono text-sm font-semibold group-open:hidden'
                        aria-hidden='true'
                      >
                        +
                      </span>
                      <span
                        className='border-line bg-background text-muted-text hidden size-8 shrink-0 place-items-center rounded-md border font-mono text-sm font-semibold group-open:grid'
                        aria-hidden='true'
                      >
                        -
                      </span>
                    </div>
                  </summary>
                  <div className='grid gap-4 px-4 pb-4 md:grid-cols-2'>
                    <div>
                      <h5 className='text-muted-text font-mono text-xs uppercase'>
                        Responsibilities
                      </h5>
                      <ul className='text-muted-text mt-2 space-y-2 text-sm leading-6'>
                        {role.responsibilities.map(item => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className='text-muted-text font-mono text-xs uppercase'>
                        Achievements
                      </h5>
                      <ul className='text-muted-text mt-2 space-y-2 text-sm leading-6'>
                        {role.achievements.map(item => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </article>
        ))}
      </PanelContent>
    </Panel>
  );
}

export function TechStackSection() {
  return (
    <Panel id='stack'>
      <PanelHeader>
        <SectionKicker>Stack</SectionKicker>
        <PanelTitle>My tech stack.</PanelTitle>
      </PanelHeader>
      <PanelContent className='space-y-4'>
        {stackGroups.map(group => (
          <div key={group.title}>
            <h3 className='text-muted-text mb-2 font-mono text-xs uppercase'>
              {group.title}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {group.items.map(item => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}

export function EducationSection() {
  return (
    <Panel id='education'>
      <PanelHeader>
        <SectionKicker>Education</SectionKicker>
        <PanelTitle>
          Business, product design, and software engineering foundations.
        </PanelTitle>
      </PanelHeader>
      <PanelContent className='grid gap-3'>
        {education.map(item => (
          <article
            key={`${item.school}-${item.year}`}
            className='border-line bg-surface rounded-md border p-4'
          >
            <div className='flex flex-wrap items-start justify-between gap-3'>
              <div>
                <h3 className='font-semibold'>{item.degree}</h3>
                <p className='text-muted-text mt-1 text-sm'>{item.school}</p>
              </div>
              <a
                className='text-brand text-sm font-semibold hover:underline'
                href={item.website}
                target='_blank'
                rel='noreferrer'
              >
                {item.year}
              </a>
            </div>
          </article>
        ))}
      </PanelContent>
    </Panel>
  );
}

export function ContactSection() {
  return (
    <Panel id='contact'>
      <PanelHeader>
        <SectionKicker>Contact</SectionKicker>
        <PanelTitle>
          Have a product that needs clearer UX, sharper execution, or a stronger
          bridge between design and code?
        </PanelTitle>
      </PanelHeader>
      <PanelContent className='space-y-5'>
        <p className='text-muted-text max-w-2xl text-sm leading-7'>
          I am available for full-time and contract work with startups, product
          teams, and organizations that need practical product design, UX
          documentation, and frontend implementation support.
        </p>
        <div className='flex flex-wrap gap-2'>
          <ButtonLink
            variant='primary'
            href={USER.calendly}
            target='_blank'
            rel='noreferrer'
          >
            Book an Appointment
          </ButtonLink>
          <ContactDialog buttonLabel='Send an Email' />
          <ButtonLink
            href={USER.resume}
            target='_blank'
            rel='noreferrer'
            download
          >
            Download Resume
          </ButtonLink>
          <ButtonLink href={USER.linkedin} target='_blank' rel='noreferrer'>
            View LinkedIn
          </ButtonLink>
        </div>
        <div className='border-line bg-surface text-muted-text rounded-md border p-4 text-sm leading-7'>
          Engagement options include contract projects, fractional
          product/design support, and full-time roles. Rates and scope depend on
          project complexity, role expectations, and engagement length.
        </div>
      </PanelContent>
    </Panel>
  );
}
