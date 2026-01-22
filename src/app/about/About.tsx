// src/app/about/About.tsx

import { Divider, Typography, Box, Button } from '@mui/material';
import React, { JSX } from 'react';
import {
  Schedule,
  WorkOutline,
  Language,
  BuildOutlined,
} from '@mui/icons-material';
import Figma from '@/components/ui/dataDisplay/icons/logos/Figma';
import MaterialUI from '@/components/ui/dataDisplay/icons/logos/MaterialUI';
import NextJS from '@/components/ui/dataDisplay/icons/logos/NextJS';
import Tailwind from '@/components/ui/dataDisplay/icons/logos/Tailwind';
import Jira from '@/components/ui/dataDisplay/icons/logos/Jira';
import Confluence from '@/components/ui/dataDisplay/icons/logos/Confluence';
import PostgreSQL from '@/components/ui/dataDisplay/icons/logos/PostgreSQL';
import TypeScript from '@/components/ui/dataDisplay/icons/logos/Typescript';
import ReactIcon from '@/components/ui/dataDisplay/icons/logos/React';
import Javascript from '@/components/ui/dataDisplay/icons/logos/JavaScript';
import Html from '@/components/ui/dataDisplay/icons/logos/Html';
import Css from '@/components/ui/dataDisplay/icons/logos/Css';
import ViteJS from '@/components/ui/dataDisplay/icons/logos/ViteJS';
import Redux from '@/components/ui/dataDisplay/icons/logos/Redux';
import Atlassian from '@/components/ui/dataDisplay/icons/logos/Atlassian';
import GitHub from '@/components/ui/dataDisplay/icons/logos/GitHub';

const toolIcons: Record<string, JSX.Element> = {
  Figma: <Figma className='h-6 w-6' />,
  MaterialUI: <MaterialUI className='h-6 w-6' />,
  'Next.js': <NextJS className='h-6 w-6 text-black dark:text-white' />,
  Tailwind: <Tailwind className='h-6 w-6' />,
  Jira: <Jira className='h-6 w-6' />,
  Confluence: <Confluence className='h-6 w-6' />,
  PostgreSQL: <PostgreSQL className='h-6 w-6' />,
  TypeScript: <TypeScript className='h-6 w-6' />,
  'React.js': <ReactIcon className='h-6 w-6' />,
  JavaScript: <Javascript className='h-6 w-6' />,
  HTML: <Html className='h-6 w-6' />,
  CSS: <Css className='h-6 w-6' />,
  'Vite.js': <ViteJS className='h-6 w-6' />,
  'Redux Toolkit': <Redux className='h-6 w-6' />,
  Atlassian: <Atlassian className='h-6 w-6' />,
  GitHub: (
    <GitHub className='h-7 w-7 rounded-full text-black dark:text-white' />
  ),
};

const personalInfo = [
  { label: 'Age', value: '35 Years' },
  { label: 'Residence', value: 'Nairobi, Kenya' },
  { label: 'Phone', value: '+254 739 134882' },
  { label: 'Email', value: 'japhethoruko@gmail.com' },
  {
    label: 'Languages',
    value: (
      <>
        • English, Fluent <br /> • Swahili, Native
      </>
    ),
  },
  { label: 'Full Time', value: 'Available' },
  { label: 'Contract', value: 'Available' },
];

const schools = [
  {
    school: 'Maseno University, Kisumu KE',
    website: 'https://www.maseno.ac.ke/',
    degree:
      'Bachelor of Business Administration with Information Technology, Finance Major',
    year: '2015',
  },
  {
    school: 'Moringa School, Nairobi KE',
    website: 'https://moringaschool.com/',
    degree: 'Diploma in Product Design (UI/UX)',
    year: '2018',
  },
  {
    school: 'Moringa School, Nairobi KE',
    website: 'https://moringaschool.com/',
    degree: 'Diploma in Full Stack Software Engineering',
    year: '2025',
  },
];

const experience = [
  {
    role: 'Lead Product Designer',
    type: 'Remote',
    employer: 'Ticet EDU Limited, Nairobi KE • EdTech Start-Up',
    website: 'https://about.ticetedu.com/',
    duration: 'February 2021 - Present',
    summary:
      'Lead Product Designer for a zero-to-one educational platform focused on personalized and social learning. Owned the end-to-end design of web and mobile experiences, from early product discovery and UX strategy to high-fidelity UI, design systems, and developer handoff, while aligning user needs with business and technical constraints ahead of launch.',
    responsibilities: (
      <ul className='list-disc'>
        <li>
          Conducted user research, competitor analysis, and usability testing to
          inform design decisions and validate product concepts before
          development.
        </li>

        <li>
          Built and maintained the scalable, component-based Ticet EDU Design
          System/Kit to ensure visual consistency and faster feature delivery
          across web and mobile.
        </li>
        <li>
          Designed the complete user experience for core platform flows
          including onboarding and registration, learner dashboards, content
          discovery, creator tools, and rewards systems using Figma.
        </li>
        <li>
          Led product design from concept to MVP by defining information
          architecture, interaction patterns, and visual language prior to
          engineering implementation.
        </li>

        <li>
          Conducted usability testing with internal teams and early test users,
          synthesized feedback, and iterated designs to remove friction and
          improve task completion.
        </li>
        <li>
          Designed mobile-first, responsive layouts with full dark and light
          theme support to improve accessibility and inclusivity.
        </li>
        <li>
          Created detailed user stories and comprehensive product documentation
          to accompany designs, ensuring smooth handoff and alignment between
          design, product, and engineering teams.
        </li>
        <li>
          Prepared structured design handoff packages including wireframes,
          prototypes, interaction specifications, and component documentation
          using Zipline to support efficient engineering implementation.
        </li>
        <li>
          Collaborated closely with product and engineering teams to validate
          feasibility, manage constraints, and refine scope during MVP delivery.
        </li>
        <li>
          Leveraged AI-powered design tools to accelerate processes and enhance
          efficiency.
        </li>
      </ul>
    ),
    achievements: (
      <ul className='list-disc'>
        <li>
          Reduced design-to-development handoff time by 40% by introducing a
          shared component library and structured, version-controlled design
          documentation.
        </li>
        <li>
          Improved task flow efficiency by 25% after identifying usability
          friction points and redesigning critical user journeys.
        </li>
        <li>
          Delivered over 400 high-fidelity screens with interactive prototypes
          across desktop, tablet, and mobile platforms.
        </li>
        <li>
          Established foundational UX standards and design systems that aligned
          product experience with long-term business goals.
        </li>
      </ul>
    ),
  },

  {
    role: 'Product Manager',
    type: 'Remote',
    employer: 'Ticet EDU Limited, Nairobi KE • EdTech Start-Up',
    website: 'https://about.ticetedu.com/',
    duration: 'June 2023 - Present',
    summary:
      'Product Manager leading the end-to-end product lifecycle of a zero-to-one digital learning platform serving learners, educators, and content creators. Owned roadmap strategy, backlog prioritization, and MVP delivery while balancing business objectives, user needs, and engineering capacity in a fast-moving startup environment.',
    responsibilities: (
      <ul className='list-disc'>
        <li>
          Owned and prioritized the product roadmap, epics, and feature backlog
          to support MVP delivery and long-term platform scalability.
        </li>
        <li>
          Translated business requirements and user research into clear user
          stories, workflows, and acceptance criteria using Jira and Confluence.
        </li>
        <li>
          Prioritized backlog items using structured frameworks such as MoSCoW
          and impact-effort analysis to maximize value delivery under
          constrained resources.
        </li>
        <li>
          Facilitated Agile ceremonies including sprint planning, standups,
          sprint reviews, and retrospectives to maintain delivery cadence.
        </li>
        <li>
          Conducted requirements-gathering sessions and collaborated with
          designers to map end-to-end user journeys.
        </li>
        <li>
          Acted as the primary bridge between engineering, design, and business
          stakeholders to ensure shared understanding and execution alignment.
        </li>
        <li>
          Defined onboarding flows, go-to-market considerations, and success
          metrics to evaluate feature performance post-release.
        </li>
        <li>
          Made trade-off decisions on scope, timelines, and priorities to
          protect delivery velocity during MVP development.
        </li>
      </ul>
    ),
    achievements: (
      <ul className='list-disc'>
        <li>
          Authored over 400 detailed user stories with clear acceptance
          criteria, enabling predictable and efficient development.
        </li>
        <li>
          Delivered more than 120 MVP features across web and mobile platforms,
          including dashboards, onboarding experiences, creator tools, and
          gamified learning paths.
        </li>
        <li>
          Reduced delivery cycle time by 30% through disciplined backlog
          grooming, sprint planning, and prioritization practices.
        </li>
        <li>
          Increased early-stage tester satisfaction by 40% by incorporating
          continuous user feedback into product and UX improvements.
        </li>
      </ul>
    ),
  },

  {
    role: 'Frontend Developer',
    type: 'Remote',
    employer: 'Ticet EDU Limited, Nairobi KE • EdTech Start-Up',
    website: 'https://about.ticetedu.com/',
    duration: 'January 2025 - Present',
    summary:
      'Frontend Developer building a zero-to-one EdTech web platform using React and Next.js, with a strong focus on Material UI and Redux Toolkit. Specialized in translating complex UX designs into scalable, accessible, and performant frontend features, while collaborating closely with product and design teams to deliver a high-quality MVP.',
    responsibilities: (
      <ul className='list-disc'>
        <li>
          Developed and maintained core frontend features using Next.js,
          TypeScript, and, Tailwind CSS, Material UI for a production-ready web
          application.
        </li>
        <li>
          Implemented global state management using Redux Toolkit to handle
          authentication state, user data, and feature-level application logic.
        </li>
        <li>
          Translated high-fidelity Figma designs into responsive, pixel-accurate
          UI components using Material UI theming and custom component
          overrides.
        </li>
        <li>
          Built reusable, component-driven UI architecture aligned with both the
          design system and Material UI best practices.
        </li>
        <li>
          Integrated frontend components with backend APIs, managing async data
          fetching, loading states, and error handling through Redux Toolkit
          thunks.
        </li>
        <li>
          Collaborated with product managers and designers to clarify
          requirements, validate feasibility, and iterate quickly during feature
          development.
        </li>
        <li>
          Implemented responsive layouts and accessibility improvements using
          Material UI’s design system and accessibility standards.
        </li>
        <li>
          Participated in code reviews and incremental refactoring to improve
          frontend performance, maintainability, and consistency.
        </li>
      </ul>
    ),
    achievements: (
      <ul className='list-disc'>
        <li>
          Transitioned the frontend codebase from React.js to Next.js, laying
          the foundation for better performance and future scalability.
        </li>
        <li>
          Delivered multiple core frontend features supporting the MVP launch,
          including dashboards, onboarding flows, and content-driven interfaces.
        </li>
        <li>
          Improved state predictability and reduced UI bugs by centralizing
          application logic using Redux Toolkit slices.
        </li>
        <li>
          Increased development efficiency by aligning Material UI components
          with the existing design system and shared UI patterns.
        </li>
        <li>
          Strengthened the design-to-code workflow by closely collaborating with
          designers during handoff and implementation.
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const about = 'About Me';
  const skills = 'Skills';
  const philosophy = 'Design Philosophy';
  const pricing = 'Pricing';
  const education = 'Education';
  const work = 'Work Experience';
  const techStack = 'Tech Stack';

  const tools = [
    'Figma',
    'MaterialUI',
    'Next.js',
    'Tailwind',
    'Jira',
    'Confluence',
    'PostgreSQL',
    'TypeScript',
    'React.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Vite.js',
    'Redux Toolkit',
    'Atlassian',
    'GitHub',
  ];

  return (
    <Box className='flex h-full flex-col gap-4'>
      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{about.charAt(0)}</span>
            {about.slice(1)}
          </Typography>
        </div>
        <Divider className='w-full' />
        <div className='flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          <div className='flex w-full flex-col gap-2 p-8 pb-0'>
            <Typography variant='h6'>Hello! I’m Japheth Oruko</Typography>

            <Typography variant='body2'>
              I’m a Product Designer (UI/UX) with strong hands-on experience as
              a Product Owner and Frontend Developer. Based in Nairobi, Kenya, I
              bring over 8 years of experience designing and building thoughtful
              digital products. I specialize in 0 to 1 product development,
              taking ideas from early discovery and concept through design,
              validation, and full implementation.
            </Typography>

            <Typography variant='body2'>
              I create digital experiences that balance user needs, business
              goals, and technical feasibility. I work comfortably across the
              entire product lifecycle, from research and design to delivery and
              iteration, and I enjoy collaborating closely with founders,
              engineers, and stakeholders.
            </Typography>
          </div>

          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          <div className='flex h-full w-full flex-col justify-between space-y-3 p-8 pb-0'>
            {personalInfo.map((item, index) => (
              <div key={index} className='w-full space-y-3'>
                <div className='flex w-full justify-between gap-4'>
                  <Typography
                    variant='body2'
                    className='bg-primary-color max-h-max w-full max-w-max rounded-sm px-2 py-1 text-white'
                  >
                    {item.label}:
                  </Typography>

                  <Typography variant='body2'>{item.value}</Typography>
                </div>

                {index < personalInfo.length && <Divider className='w-full' />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{philosophy.charAt(0)}</span>
            {philosophy.slice(1)}
          </Typography>
        </div>
        <Divider className='w-full' />
        <div className='mb-8 w-full space-y-4 p-8 pb-0'>
          <Typography variant='body2'>
            My design philosophy centers on creating digital experiences that
            are both beautiful and functional. I focus on clarity,
            accessibility, and intuitive interactions, ensuring that every
            element serves a purpose and enhances usability. By understanding
            user needs and business goals, I craft interfaces that are visually
            appealing, consistent, and easy to navigate, while maintaining
            flexibility for future growth and innovation. Collaboration,
            iteration, and empathy guide my process, allowing me to deliver
            designs that are engaging, meaningful, and aligned with the overall
            product vision.
          </Typography>
          <Typography variant='body2'>
            AI can inspire ideas, accelerate execution, and even generate
            layouts, colors, buttons, or full websites in seconds, but
            meaningful user experience still depends on human judgment and
            design intuition. It can’t understand why a user hesitates, doesn’t
            trust a brand, or scrolls without converting — that’s where I come
            in. I complement AI, not compete with it: knowing when a hero
            section should reassure instead of impress, when copy should sell
            instead of just sound clever, when flows should reduce fear, not
            just look clean. As a user-centric designer with hands-on frontend
            expertise, I bridge design and implementation to deliver
            empathy-driven experiences that make users feel understood and help
            businesses succeed.
          </Typography>

          <Typography variant='subtitle2' className='text-primary-color'>
            Where AI Stops, Intuition & Customization Begins
          </Typography>
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{techStack.charAt(0)}</span>
            {techStack.slice(1)}
          </Typography>
        </div>

        <Divider className='w-full' />

        <div className='mb-8 w-full space-y-4 p-8 pb-0'>
          <div className='flex flex-wrap gap-x-6 gap-y-3'>
            {tools.map(tool => {
              const Icon = toolIcons[tool];
              return (
                <div
                  key={tool}
                  className='surface flex items-center gap-2 rounded-md px-3 py-1.5 text-sm'
                >
                  <div className='flex h-6 w-6 items-center justify-center'>
                    {Icon ?? (
                      <BuildOutlined fontSize='small' className='opacity-60' />
                    )}
                  </div>
                  <span className='whitespace-nowrap'>{tool}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{skills.charAt(0)}</span>
            {skills.slice(1)}
          </Typography>
        </div>

        <Divider className='w-full' />

        <div className='flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Left Column */}
          <div className='flex w-full flex-col space-y-4 p-8 pb-0'>
            {[
              { name: 'Figma', level: 90 },
              { name: 'Adobe XD', level: 60 },
              { name: 'Sketch', level: 50 },
              { name: 'User Experience [UX] Research', level: 85 },
              { name: 'User Interface [UI] Design', level: 95 },
              { name: 'Design Systems', level: 85 },
              { name: 'Prototyping', level: 90 },
              { name: 'Wireframing', level: 80 },
            ].map(skill => (
              <div key={skill.name} className='space-y-1'>
                <Typography
                  variant='body2'
                  className='flex justify-between font-medium'
                >
                  <span className='line-clamp-1'>{skill.name}</span>
                  <span>{skill.level}%</span>
                </Typography>
                <div className='h-1 w-full rounded-full bg-white/10'>
                  <div
                    className='bg-primary-color h-1 rounded-full transition-all'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Divider */}
          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Right Column */}
          <div className='flex w-full flex-col space-y-4 p-8 py-4 pb-0 md:py-8 lg:py-4 xl:py-8'>
            {[
              { name: 'React / Next.js', level: 75 },
              { name: 'Material UI', level: 80 },
              { name: 'Tailwind CSS', level: 85 },
              { name: 'Git', level: 75 },
              { name: 'GitHub', level: 70 },
              { name: 'Bitbucket', level: 65 },
              { name: 'Jira', level: 85 },
              { name: 'Confluence', level: 90 },
            ].map(skill => (
              <div key={skill.name} className='space-y-1'>
                <Typography
                  variant='body2'
                  className='flex justify-between font-medium'
                >
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </Typography>
                <div className='h-1 w-full rounded-full bg-white/10'>
                  <div
                    className='bg-primary-color h-1 rounded-full transition-all'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{education.charAt(0)}</span>
            {education.slice(1)}
          </Typography>
        </div>
        <Divider className='w-full' />
        <div className='mb-8 w-full space-y-6 p-8 pb-0'>
          {schools.map((item, index) => (
            <div key={index}>
              <div className='space-y-1'>
                <Typography variant='body1' className='font-semibold'>
                  {item.degree}
                </Typography>

                <div className='flex w-full gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-20 font-semibold'
                  >
                    Institution:
                  </Typography>

                  <div className='flex w-full gap-4'>
                    <Typography variant='body2'>{item.school}</Typography>
                    <Button
                      variant='text'
                      size='small'
                      startIcon={<Language />}
                      href={item.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-color p-0'
                    >
                      Website
                    </Button>
                  </div>
                </div>

                <div className='flex w-full gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-20 font-semibold'
                  >
                    Year:
                  </Typography>
                  <Typography variant='body2'>{item.year}</Typography>
                </div>
              </div>

              {index < education.length - 1 && (
                <Divider className='my-4 w-full' />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{work.charAt(0)}</span>
            {work.slice(1)}
          </Typography>
        </div>
        <Divider className='w-full' />
        <div className='mb-8 w-full space-y-6 p-8 pb-0'>
          {experience.map((item, index) => (
            <div key={index}>
              <div className='space-y-4'>
                <div className='flex justify-between'>
                  <Typography variant='body1' className='font-semibold'>
                    {item.role}
                  </Typography>
                  <Typography variant='body2' className=''>
                    {item.type}
                  </Typography>
                </div>

                <div className='flex w-full flex-col gap-2 md:flex-row md:gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-32 min-w-32 font-semibold'
                  >
                    Institution:
                  </Typography>

                  <div className='flex w-full gap-4'>
                    <Typography variant='body2'>{item.employer}</Typography>
                    <Button
                      variant='text'
                      size='small'
                      startIcon={<Language />}
                      href={item.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary-color p-0'
                    >
                      Website
                    </Button>
                  </div>
                </div>

                <div className='flex w-full flex-col gap-2 md:flex-row md:gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-32 min-w-32 font-semibold'
                  >
                    Duration:
                  </Typography>
                  <Typography variant='body2'>{item.duration}</Typography>
                </div>

                <div className='flex w-full flex-col gap-2 md:flex-row md:gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-32 min-w-32 font-semibold'
                  >
                    Summary:
                  </Typography>
                  <Typography variant='body2'>{item.summary}</Typography>
                </div>

                <div className='flex w-full flex-col gap-2 md:flex-row md:gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-32 min-w-32 font-semibold'
                  >
                    Responsibilities:
                  </Typography>
                  <Typography variant='body2' className='ml-6 md:ml-4'>
                    {item.responsibilities}
                  </Typography>
                </div>

                <div className='flex w-full flex-col gap-2 md:flex-row md:gap-4'>
                  <Typography
                    variant='body2'
                    className='w-full max-w-32 min-w-32 font-semibold'
                  >
                    Achievements:
                  </Typography>
                  <Typography variant='body2' className='ml-6 md:ml-4'>
                    {item.achievements}
                  </Typography>
                </div>
              </div>

              {index < education.length - 1 && (
                <Divider className='my-4 w-full' />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{pricing.charAt(0)}</span>
            {pricing.slice(1)}
          </Typography>
        </div>

        <Divider className='w-full' />

        <div className='mb-8 flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Freelance Tier */}
          <div className='surface m-8 mb-0 flex flex-1 flex-col items-center gap-4 rounded-md p-8 pb-0 shadow-md'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full text-white'>
              <Schedule />
            </div>

            <Typography variant='h6' className='text-center font-semibold'>
              Freelance
            </Typography>

            <Divider className='my-2 w-full' />

            <Typography
              variant='body1'
              className='ms pb-8 text-center text-sm md:pb-0 lg:pb-8 xl:pb-0'
            >
              $20–$60 per hour depending on project complexity. Ideal for
              smaller projects, UI audits, and interactive prototypes.
            </Typography>
          </div>

          {/* Divider */}
          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Full Time Tier */}
          <div className='surface m-8 mb-0 flex flex-1 flex-col items-center gap-4 rounded-md p-8 shadow-md'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full text-white'>
              <WorkOutline />
            </div>
            <Typography variant='h6' className='text-center font-semibold'>
              Full Time
            </Typography>

            <Divider className='my-2 w-full' />

            <Typography variant='body1' className='text-center text-sm'>
              $2,000–$5,000 per month depending on role and project. Suitable
              for long-term engagement with full design & development support.
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
