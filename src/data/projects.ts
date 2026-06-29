import type { Project, ProjectCategory } from '@/types/portfolio';

const imageSet = (legacyId: number, title: string, start = 1, count = 10, extension = 'jpg') =>
  Array.from({ length: count }, (_, index) => {
    const imageNumber = index + 1;
    return {
      src: `/assets/images/projects/id${legacyId}/${imageNumber}.${extension}`,
      alt: `${title} screenshot ${imageNumber}`,
    };
  }).sort((a, b) => {
    if (a.src.endsWith(`/${start}.${extension}`)) return -1;
    if (b.src.endsWith(`/${start}.${extension}`)) return 1;
    return a.src.localeCompare(b.src, undefined, { numeric: true });
  });

export const projectCategoryLabels: Record<ProjectCategory | 'all', string> = {
  all: 'All',
  'design-system': 'Design Systems',
  'frontend-development': 'Frontend Development',
  'product-management': 'Product Management',
  'ui-design': 'UI Design',
  'ux-logic': 'UX Logic',
};

const projectEntries = [
  {
    id: 'pixesci-website',
    legacyId: 15,
    title: 'PixeSci Website',
    category: 'frontend-development',
    featured: true,
    priority: 1,
    role: ['Lead Product Designer', 'Frontend Lead'],
    organization: 'PixeSci',
    period: 'Current',
    tools: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Claude', 'Codex'],
    skills: ['Product website', 'Market readiness', 'SEO foundations', 'Conversion paths'],
    summary:
      "A responsive product-led website for PixeSci that gives the company a clearer public presence, stronger product positioning, reusable page systems, SEO foundations, product visuals, and demo-booking conversion paths.",
    context:
      'PixeSci needed a credible market-facing website that could explain a technically complex scientific workflow platform to regulated life sciences, secure research, core facilities, and other high-control scientific environments.',
    approach:
      'Created a product-led marketing experience with structured pages, reusable content sections, product-inspired visuals, route-level metadata, generated social image support, robots and sitemap foundations, analytics events, Speed Insights, uptime checks, demo-booking paths, and compliance-aware messaging.',
    outcome:
      'Gave PixeSci a stronger market-facing product presence and clearer product narrative as the company moved into the market with a more polished public experience.',
    links: [{ label: 'PixeSci', href: 'https://pixesci.com/' }],
    images: imageSet(15, 'PixeSci Website', 1, 2, 'png'),
  },
  {
    id: 'pixesci-application-experience',
    legacyId: 16,
    title: 'PixeSci Application Experience',
    category: 'frontend-development',
    featured: true,
    priority: 2,
    role: ['Lead Product Designer', 'Frontend Lead'],
    organization: 'PixeSci',
    period: 'Current',
    tools: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'shadcn-style UI primitives', 'Radix UI', 'Tauri', 'Claude', 'Codex'],
    skills: ['Application redesign', 'Scientific workflow UX', 'Frontend direction', 'Component systems'],
    summary:
      'A recreated PixeSci application experience that moves the product from an earlier interface into a cleaner, more structured, and more market-ready product UI for complex scientific workflow automation.',
    context:
      'The core product needed clearer workflows for a technical audience working with chat-linked workflows, workflow context, artifact review, template management, audit logs, agent activity, software catalogs, and admin/security surfaces.',
    approach:
      'Mapped user flows, designed interaction patterns, shaped chat-to-workflow and workflow-side chat experiences, defined artifact and context surfaces, and guided frontend implementation around Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, shadcn-style/Radix primitives, and Tauri-oriented desktop patterns.',
    outcome:
      'Helped move the application toward a more modern frontend foundation with clearer hierarchy, reusable component requirements, stronger workflow context, and desktop-ready UI patterns for a local-first scientific automation product.',
    links: [{ label: 'PixeSci', href: 'https://pixesci.com/' }],
    images: imageSet(16, 'PixeSci Application Experience', 1, 2, 'png'),
  },
  {
    id: 'pixesci-design-system-figma',
    legacyId: 17,
    title: 'PixeSci Design System and Figma Product Design',
    category: 'design-system',
    featured: true,
    priority: 3,
    role: ['Lead Product Designer'],
    organization: 'PixeSci',
    period: 'Current',
    tools: ['Figma', 'Claude', 'Codex', 'Tailwind CSS', 'shadcn-style UI primitives'],
    skills: ['Design systems', 'Figma product design', 'Interaction states', 'Design-to-code direction'],
    summary:
      'A PixeSci design system and Figma product-design foundation covering interface patterns, product visuals, responsive behavior, typography, spacing, color, component states, and scientific workflow surfaces.',
    context:
      'PixeSci needed a consistent product foundation that could support website storytelling, application redesign, implementation handoff, and complex workflow surfaces without fragmenting the visual and interaction model.',
    approach:
      'Created Figma wireframes, user flows, high-fidelity screens, prototypes, product visuals, component patterns, responsive layouts, interaction states, typography, color, spacing, navigation structures, and design-system guidance for frontend execution.',
    outcome:
      'Established a consistent visual and product system that supports faster design-to-code iteration, stronger UI consistency, and clearer translation of scientific automation concepts into buildable product interfaces.',
    links: [{ label: 'PixeSci', href: 'https://pixesci.com/' }],
    images: imageSet(17, 'PixeSci Design System and Figma Product Design', 1, 2, 'png'),
  },
  {
    id: 'ticet-edu-design-system',
    legacyId: 2,
    title: 'Ticet EDU Design System',
    category: 'design-system',
    featured: true,
    priority: 4,
    role: ['Lead Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: ['Design systems', 'Component libraries', 'Handoff', 'Responsive UI'],
    summary:
      "A structured Figma design kit for Ticet EDU's web platform, covering reusable components, responsive layouts, typography, color palettes, icons, interaction states, and product patterns.",
    context:
      'Ticet EDU needed a scalable UI foundation that could support rapid product development while keeping learner, educator, and creator experiences visually consistent.',
    approach:
      'Built a modular component library, documented interactive states, aligned spacing and typography rules, and prepared handoff-ready assets for design and engineering collaboration.',
    outcome:
      'Created the foundation for faster prototyping, more consistent implementation, and a more cohesive learning platform experience.',
    links: [],
    images: imageSet(2, 'Ticet EDU Design System'),
  },
  {
    id: 'ticet-edu-lxp-frontend',
    legacyId: 3,
    title: 'Ticet EDU LXP Frontend',
    category: 'frontend-development',
    featured: true,
    priority: 5,
    role: ['Frontend Developer'],
    organization: 'Ticet EDU Limited',
    tools: ['GitHub', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Tailwind CSS', 'HTML', 'CSS'],
    skills: ['Frontend architecture', 'API integration', 'State management', 'Responsive UI'],
    summary:
      'A Next.js and TypeScript frontend for the Ticet EDU Learning Experience Platform, focused on responsive interfaces, scalable component architecture, API integration, and polished implementation of complex learning workflows.',
    context:
      'The platform needed a frontend that could support dynamic courses, users, learning resources, dashboards, onboarding, and content-driven experiences while remaining maintainable during MVP development.',
    approach:
      'Implemented responsive UI with Tailwind CSS and Material UI, managed application state with Redux Toolkit, integrated backend APIs, and translated high-fidelity Figma designs into reusable frontend components.',
    outcome:
      'Delivered core frontend foundations for a modern learning platform with improved scalability, predictable state management, and stronger design-to-code alignment.',
    links: [{ label: 'Project', href: 'https://ticetedu.com/' }],
    images: imageSet(3, 'Ticet EDU LXP Frontend'),
  },
  {
    id: 'ticet-edu-lxp-ui-ux',
    legacyId: 4,
    title: 'Ticet EDU LXP UI/UX',
    category: 'ui-design',
    featured: true,
    priority: 6,
    role: ['Lead Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: ['UX strategy', 'Product design', 'Responsive layouts', 'Prototyping'],
    summary:
      "A personalized learning experience design for Ticet EDU's LXP, covering onboarding, dashboards, content discovery, analytics, creator tools, responsive layouts, and interactive learning flows.",
    context:
      'The product required an interface that could make personalized and collaborative learning feel clear, engaging, and accessible across devices.',
    approach:
      'Designed modular Figma components, mapped core user journeys, built responsive flows, defined visual hierarchy, and prepared prototypes for stakeholder review and developer handoff.',
    outcome:
      'Established a scalable design direction for a modern EdTech platform with reusable patterns and clearer learner navigation.',
    links: [],
    images: imageSet(4, 'Ticet EDU LXP UI/UX'),
  },
  {
    id: 'sample-product-documentation',
    legacyId: 8,
    title: 'Sample Product Documentation',
    category: 'product-management',
    featured: true,
    priority: 7,
    role: ['Product Manager'],
    tools: ['Atlassian', 'Jira', 'Confluence'],
    skills: ['User stories', 'Acceptance criteria', 'Backlog management', 'Agile delivery'],
    summary:
      'A product documentation sample showing how Confluence and Jira can turn subscription packages, feature requirements, epics, user stories, tasks, and acceptance criteria into a transparent delivery system.',
    context:
      'Product and engineering teams need shared documentation that clarifies what should be built, why it matters, and how work moves through planning and delivery.',
    approach:
      'Structured Confluence pages for product specifications and Jira workflows for epics, stories, tasks, bugs, traceability, and sprint planning.',
    outcome:
      'Demonstrates practical product-management discipline: clear requirements, user-centered stories, backlog visibility, and collaborative delivery rituals.',
    links: [],
    images: imageSet(8, 'Sample Product Documentation'),
  },
  {
    id: 'lvbice-website',
    legacyId: 10,
    title: 'LVBICE Website',
    category: 'frontend-development',
    featured: true,
    priority: 8,
    role: ['Frontend Developer'],
    tools: ['Next.js', 'TypeScript', 'Material UI', 'Tailwind CSS', 'HTML', 'CSS'],
    skills: ['Responsive development', 'Institutional website', 'Accessible navigation'],
    summary:
      'A modern institutional website built with Next.js, TypeScript, Material UI, Tailwind CSS, HTML, and CSS, focused on responsive layouts, accessible navigation, performance, and professional brand presentation.',
    context: 'The website needed to translate an institutional identity into a clear, responsive digital presence.',
    approach:
      "Built structured layouts, reusable components, and a responsive front-end architecture aligned with the institution's design direction.",
    links: [
      { label: 'Website', href: 'https://www.lvbice.com/' },
      { label: 'GitHub', href: 'https://github.com/OJ254/lvbice-website' },
    ],
    images: imageSet(10, 'LVBICE Website'),
  },
  {
    id: 'hospital-management-system-ui-ux',
    legacyId: 11,
    title: 'Hospital Management System UI/UX',
    category: 'ui-design',
    featured: true,
    priority: 9,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: ['Healthcare UX', 'Data-heavy dashboards', 'Role-aware navigation'],
    summary:
      'A Figma prototype for a hospital management system designed to help clinical teams access patient records, medical history, vitals, medication schedules, and SOAP notes through a clear dashboard experience.',
    context:
      'Healthcare workflows require speed, clarity, and low cognitive load. The design needed to support medical staff with role-aware navigation and data-heavy screens that remain usable under pressure.',
    approach:
      'Designed authentication, role-based access patterns, patient profiles, dashboard views, clinical documentation surfaces, and responsive layouts with accessibility and data clarity in mind.',
    links: [
      { label: 'Figma design', href: 'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=105-985' },
      { label: 'Prototype', href: 'https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=8179-2388&t=FPCj8UyIeFdOkOJr-1' },
    ],
    images: imageSet(11, 'Hospital Management System UI/UX'),
  },
  {
    id: 'personal-portfolio',
    legacyId: 1,
    title: 'Personal Portfolio',
    category: 'frontend-development',
    priority: 10,
    role: ['Frontend Developer', 'Product Designer'],
    tools: ['GitHub', 'Next.js', 'TypeScript', 'Material UI', 'Tailwind CSS', 'HTML', 'CSS'],
    skills: ['Portfolio strategy', 'Responsive layout', 'Personal brand'],
    summary:
      'A personal portfolio built to present product strategy, UI/UX design, product management, and frontend engineering work in one cohesive professional narrative.',
    context:
      'The portfolio needed to function as both a career profile and work-sample hub, making it easy for founders, hiring managers, and collaborators to understand my hybrid product, design, and frontend capabilities.',
    links: [
      { label: 'Website', href: 'https://japheth-oruko-portfolio.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/OJ254/japheth-oruko-portfolio' },
    ],
    images: imageSet(1, 'Personal Portfolio'),
  },
  {
    id: 'ticet-edu-website',
    legacyId: 5,
    title: 'Ticet EDU Website',
    category: 'frontend-development',
    priority: 11,
    role: ['Frontend Developer'],
    organization: 'Ticet EDU Limited',
    tools: ['GitHub', 'Vite.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    skills: ['Marketing site', 'Responsive sections', 'Reusable components'],
    summary:
      "A responsive marketing website for Ticet EDU, built with Vite, JavaScript, Tailwind CSS, HTML, and CSS to communicate the platform's collaborative learning mission and provide a clean public-facing brand experience.",
    context:
      'The website needed to introduce Ticet EDU clearly, support brand credibility, and provide a fast, accessible experience for educators, learners, and stakeholders.',
    approach:
      'Built responsive sections, reusable components, and a clean front-end structure aligned with the visual direction from the design process.',
    links: [
      { label: 'Website', href: 'https://ticet-edu-website.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/OJ254/ticet-edu-website' },
    ],
    images: imageSet(5, 'Ticet EDU Website'),
  },
  {
    id: 'ticet-edu-website-ui-ux',
    legacyId: 6,
    title: 'Ticet EDU Website UI/UX',
    category: 'ui-design',
    priority: 12,
    role: ['Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: ['Website design', 'Interactive prototypes', 'Responsive layouts'],
    summary:
      'A Figma design and prototype for the Ticet EDU website, including wireframes, high-fidelity mockups, responsive layouts, reusable UI components, animated transitions, and stakeholder-ready prototypes.',
    context:
      'The public website needed to balance modern education branding, clear navigation, accessibility, and scalable content sections.',
    approach:
      'Created a component-based design system, mapped the landing-page journey, defined responsive behavior, and prepared interactive prototypes to align stakeholders before development.',
    links: [
      { label: 'Figma design', href: 'https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=105-985' },
      { label: 'Prototype', href: 'https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6210-36526&t=DZedl3Y68or48MTT-1' },
    ],
    images: imageSet(6, 'Ticet EDU Website UI/UX'),
  },
  {
    id: 'ticet-edu-lms-ui-ux',
    legacyId: 7,
    title: 'Ticet EDU LMS UI/UX',
    category: 'ui-design',
    priority: 13,
    role: ['Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: ['LMS UX', 'Course discovery', 'Reusable components'],
    summary:
      'A learner-centered LMS interface designed in Figma, covering onboarding, course browsing, progress tracking, feedback flows, reusable components, and responsive layouts.',
    context:
      'The LMS needed to make educational content easier to browse, track, and interact with while maintaining a consistent and scalable visual system.',
    approach:
      'Built wireframes, high-fidelity screens, and interactive prototypes with reusable components for navigation, cards, forms, and learning workflows.',
    links: [],
    images: imageSet(7, 'Ticet EDU LMS UI/UX'),
  },
  {
    id: 'lvbice-website-ui-ux',
    legacyId: 9,
    title: 'LVBICE Website UI/UX',
    category: 'ui-design',
    priority: 14,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: ['Institutional UX', 'Accessible content', 'Handoff'],
    summary:
      'A responsive Figma website design for LVBICE, focused on institutional identity, accessible content structure, clear navigation, professional visual hierarchy, and reusable interface components.',
    context:
      'The institution needed a modern public website design that could communicate credibility and make information easier to navigate across devices.',
    approach:
      'Created wireframes, high-fidelity screens, responsive layouts, reusable cards and forms, and interactive prototypes for stakeholder review and development handoff.',
    links: [{ label: 'Figma design', href: 'https://www.figma.com/design/tlz7RVpv2Rr6tGwiupmEHc/LVBIWCE---Website?node-id=5598-7991&t=kesJxF2mY6cn9tez-1' }],
    images: imageSet(9, 'LVBICE Website UI/UX'),
  },
  {
    id: 'infobrix-insurance-website-ui-ux',
    legacyId: 12,
    title: 'Infobrix Insurance Website UI/UX',
    category: 'ui-design',
    priority: 15,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: ['Enterprise UI', 'Light and dark modes', 'Reusable components'],
    summary:
      'A high-fidelity Figma prototype for an insurance technology platform with intentionally designed light and dark modes, clear content hierarchy, reusable components, analytics-style visuals, integrations, and mobile app presentation.',
    context:
      'The design needed to make complex insurance technology content feel understandable, credible, and modern across both light and dark themes.',
    approach:
      'Structured product sections, feature panels, data visuals, theme variants, and reusable interface components to support a polished enterprise-style presentation.',
    links: [
      { label: 'Figma design', href: 'https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23368' },
      { label: 'Prototype', href: 'https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23582&t=DZedl3Y68or48MTT-1' },
    ],
    images: imageSet(12, 'Infobrix Insurance Website UI/UX'),
  },
  {
    id: 'event-listing-page-ux-logic',
    legacyId: 13,
    title: 'Event Listing Page UX Logic',
    category: 'ux-logic',
    priority: 16,
    role: ['UX Designer'],
    tools: ['Figma'],
    skills: ['UX logic', 'Component behavior', 'Search and filters'],
    summary:
      'A UX logic exercise for an event discovery platform, focused on reducing cognitive overload through clear event-card hierarchy, featured events, searchable listings, status badges, and scalable component behavior.',
    problem:
      'As event volume grows, users can miss relevant events when layouts are hard to scan, metadata is inconsistent, or status cues are hidden.',
    approach:
      'Designed reusable event cards with banner imagery, title, short description, grouped metadata, badges for event state, a featured event layout, responsive listing grids, search/filter affordances, and empty-state behavior.',
    outcome:
      'The solution prioritizes decision speed, pattern recognition, modular reuse, and immediate clarity around relevance, location, mode, cost, and registration status.',
    links: [
      { label: 'Figma design', href: 'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=4-6598' },
      { label: 'Prototype', href: 'https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=9096-21636&t=FPCj8UyIeFdOkOJr-1' },
    ],
    images: imageSet(13, 'Event Listing Page UX Logic', 2),
  },
  {
    id: 'world-federation-for-animals-website-ui-ux',
    legacyId: 14,
    title: 'World Federation for Animals Website UI/UX',
    category: 'ui-design',
    priority: 17,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: ['Advocacy website', 'Accessible layouts', 'Theme variants'],
    summary:
      'A Figma website design for a global advocacy organization, using accessible layouts, light and dark themes, clear content hierarchy, storytelling sections, and reusable responsive components.',
    context:
      'The website needed to communicate advocacy, impact, and educational resources through an emotionally resonant but professional interface.',
    approach:
      'Designed homepage sections, navigation, advocacy updates, impact areas, educational content blocks, responsive components, and theme variations.',
    links: [{ label: 'Figma design', href: 'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=6386-23676&t=FPCj8UyIeFdOkOJr-1' }],
    images: imageSet(14, 'World Federation for Animals Website UI/UX'),
  },
] satisfies Project[];

export const projects: Project[] = [...projectEntries].sort((a, b) => a.priority - b.priority);

export const featuredProjects = projects.filter(project => project.featured);
