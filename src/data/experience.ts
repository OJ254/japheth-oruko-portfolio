import type { ExperienceCompany } from '@/types/portfolio';

export const experience: ExperienceCompany[] = [
  {
    company: 'PixeSci',
    location: 'Remote / Nairobi, Kenya',
    type: 'Scientific software',
    website: 'https://pixesci.com/',
    status: 'current',
    roles: [
      {
        title: 'Lead Product Designer, Frontend Developer, and Full-Stack Portal Developer',
        duration: 'Current',
        summary:
          'Lead product design, frontend direction, and full-stack portal development for a scientific workflow platform, connecting product storytelling, application UX, design-system foundations, Figma product design, implementation guidance, and customer administration workflows.',
        responsibilities: [
          'Lead UX and product design direction for the PixeSci application, company website, and organization portal.',
          'Create Figma wireframes, user flows, high-fidelity interface designs, prototypes, product visuals, and design-system patterns.',
          'Create and maintain the PixeSci Design System for layouts, components, interaction states, typography, spacing, color, and responsive behavior.',
          'Redesign the application experience from an earlier interface into a more modern, structured, and market-ready product UI.',
          'Shape interface patterns for chat-to-workflow experiences, workflow context, artifact review, template management, audit logs, agent activity, software catalogs, and administration surfaces.',
          'Guide frontend implementation so React/Next.js interfaces match the intended UX, component behavior, responsive layouts, and product hierarchy.',
          'Build full-stack portal workflows for customer account setup, organization profile management, license visibility, seat administration, and offline license support.',
          'Implement backend rules for account access, organization-scoped data, license and seat workflows, audit-minded actions, and offline license-support artifacts without exposing sensitive operational details.',
          'Use Claude and Codex for implementation, debugging, refactoring, documentation, and rapid iteration.',
        ],
        achievements: [
          'Created the PixeSci Design System, giving the product a consistent foundation for components, visual hierarchy, spacing, typography, color, interaction states, and responsive layouts.',
          "Designed and built the company's web platform as both a public product website and an authenticated customer portal foundation.",
          'Redesigned the application experience from an earlier interface into a cleaner, more structured, and more usable product UI.',
          'Guided the recreation of the application frontend around a modern Next.js, React, TypeScript, Tailwind CSS, shadcn-style/Radix, Redux Toolkit, and desktop-oriented product stack.',
          'Implemented portal backend workflows for account access, organization administration, license visibility, seat lifecycle actions, and offline license-support artifacts.',
          'Created product-inspired visuals and interface mockups for workflow, execution, catalog, audit, template, environment-control, and agent experiences.',
          'Helped move PixeSci into the market with a clearer website, stronger visual system, more polished application experience, and a practical full-stack portal surface.',
        ],
      },
    ],
  },
  {
    company: 'Ticet EDU Limited',
    location: 'Nairobi, Kenya',
    type: 'EdTech startup / Remote',
    website: 'https://about.ticetedu.com/',
    status: 'previous',
    roles: [
      {
        title: 'Lead Product Designer',
        duration: 'February 2021 - December 2025',
        summary:
          'Lead Product Designer for a zero-to-one educational platform focused on personalized and social learning. Owned end-to-end design of web and mobile experiences from product discovery and UX strategy to high-fidelity UI, design systems, and developer handoff.',
        responsibilities: [
          'Conducted user research, competitor analysis, and usability testing.',
          'Built and maintained a scalable component-based Ticet EDU Design System/Kit.',
          'Designed onboarding, learner dashboards, content discovery, creator tools, rewards systems, and responsive web/mobile flows.',
          'Defined information architecture, interaction patterns, and visual language.',
          'Created user stories and product documentation to support handoff.',
          'Prepared structured design handoff packages with wireframes, prototypes, interaction specs, and component documentation.',
        ],
        achievements: [
          'Reduced design-to-development handoff time by 40%.',
          'Improved task-flow efficiency by 25%.',
          'Delivered 400+ high-fidelity screens and interactive prototypes.',
          'Established foundational UX standards and design systems.',
        ],
      },
      {
        title: 'Frontend Developer',
        duration: 'January 2021 - December 2025',
        summary:
          'Frontend Developer building a zero-to-one EdTech web platform using React, Next.js, TypeScript, Material UI, Tailwind CSS, and Redux Toolkit.',
        responsibilities: [
          'Developed core frontend features using Next.js, TypeScript, Tailwind CSS, and Material UI.',
          'Implemented global state management using Redux Toolkit.',
          'Translated high-fidelity Figma designs into responsive UI components.',
          'Built reusable component-driven UI architecture.',
          'Integrated frontend components with backend APIs and managed loading/error states.',
          'Implemented responsive layouts and accessibility improvements.',
        ],
        achievements: [
          'Transitioned the frontend codebase from React.js to Next.js.',
          'Delivered core MVP features including dashboards, onboarding flows, and content-driven interfaces.',
          'Improved state predictability and reduced UI bugs with Redux Toolkit slices.',
          'Strengthened design-to-code workflow through close collaboration during handoff.',
        ],
      },
      {
        title: 'Product Manager',
        duration: 'June 2023 - December 2025',
        summary:
          'Product Manager leading the end-to-end lifecycle of a zero-to-one digital learning platform serving learners, educators, and content creators. Owned roadmap strategy, backlog prioritization, MVP delivery, and stakeholder alignment.',
        responsibilities: [
          'Owned and prioritized roadmap, epics, and feature backlog.',
          'Translated business requirements and research into user stories, workflows, and acceptance criteria.',
          'Prioritized backlog with MoSCoW and impact-effort frameworks.',
          'Facilitated Agile ceremonies and requirements sessions.',
          'Bridged engineering, design, and business stakeholders.',
          'Made scope, timeline, and priority tradeoffs for MVP delivery.',
        ],
        achievements: [
          'Authored 400+ detailed user stories.',
          'Delivered 120+ MVP features across web and mobile platform work.',
          'Reduced delivery cycle time by 30%.',
          'Increased early-stage tester satisfaction by 40%.',
        ],
      },
    ],
  },
];
