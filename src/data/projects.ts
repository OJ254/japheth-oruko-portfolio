import type { Project, ProjectCategory } from '@/types/portfolio';

const imageSet = (
  legacyId: number,
  title: string,
  start = 1,
  count = 10,
  extension = 'jpg'
) =>
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
  'fullstack-development': 'Fullstack',
  'frontend-development': 'Frontend Development',
  'product-management': 'Product Management',
  'ui-design': 'UI Design',
  'ux-logic': 'UX Logic',
};

const projectEntries = [
  {
    id: 'rwt-motors',
    legacyId: 18,
    title: 'RWT Motors',
    category: 'fullstack-development',
    featured: true,
    priority: 1,
    role: [
      'Product Designer',
      'Product Manager',
      'Frontend Developer',
      'Backend Developer',
    ],
    organization: 'Self-built product',
    period: 'Current',
    tools: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Redux Toolkit',
      'RTK Query',
      'Prisma',
      'PostgreSQL',
      'Identity and access management',
      'Docker',
      'Figma',
      'Claude',
    ],
    skills: [
      'Product and interaction design',
      'Trust-centered UX',
      'Design systems thinking',
      'Full-stack frontend implementation',
      'Product reasoning and documentation',
    ],
    summary:
      'A self-built vehicle marketplace concept for Kenya, designed and built end-to-end to explore how trust, verification, and reputation can be made legible in an interface, from first discovery through booking and dispute resolution.',
    context:
      "Kenya's vehicle rental and resale market still runs mostly on personal trust: word of mouth, WhatsApp threads, and no reliable way to tell whether a car, a driver, or a mechanic is what they claim to be before money changes hands. RWT Motors is my response to that gap, designed and built solo as a personal product.",
    problem:
      'The hard design problem was never inventory, it was legibility: how do you show a stranger that a vehicle, a driver, or a mechanic can be trusted, using an interface people can read in seconds, without burying them in badges, disclaimers, and fine print?',
    approach:
      "I designed the interaction model before touching UI: separating what a vehicle is from what's being offered on it, so one listing could support both rental and resale without the data drifting apart. From there I designed role-aware dashboards, verification and review surfaces, and a component system that makes trust visible at a glance, then built the frontend in React, TypeScript, and Tailwind CSS with shadcn-style primitives, on a full-stack Next.js codebase with Redux Toolkit and RTK Query handling state and data flow.",
    outcome:
      "The result is a working product that treats trust as a first-class design problem rather than a policy footnote, with verification, reputation, and reviews built into the interface itself. It's the clearest example in my portfolio of carrying a product from an ambiguous, real-world problem through interaction design to a production-grade frontend and backend implementation.",
    note: 'Current personal project, still pre-release, so this case study stays intentionally high-level.',
    links: [],
    images: imageSet(18, 'RWT Motors', 1, 10, 'png'),
  },
  {
    id: 'pixesci-website',
    legacyId: 15,
    title: 'PixeSci Website and Portal',
    category: 'fullstack-development',
    featured: true,
    priority: 2,
    role: [
      'Lead Product Designer',
      'Lead Frontend Developer',
      'Full-Stack Portal Developer',
    ],
    organization: 'PixeSci',
    period: 'Current',
    tools: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Redux Toolkit',
      'Drizzle ORM',
      'libSQL',
      'Access workflows',
      'Figma',
      'Claude',
      'Codex',
    ],
    skills: [
      'Product storytelling',
      'Design systems continuity',
      'Full-stack frontend implementation',
      'Access and account UX',
    ],
    summary:
      'A full-stack PixeSci web platform that combines the public product website with an authenticated organization portal for account setup, license visibility, seat administration, and offline license-support workflows.',
    context:
      'PixeSci needed more than a marketing frontend. The web project had to explain a technically complex scientific-automation platform to a first-time visitor, then hand that same visitor into a secure, authenticated portal without it feeling like a different product.',
    problem:
      "The hard part wasn't designing a marketing site or a portal in isolation — it was making the handoff between them invisible, so credibility built on the public site carried straight through into account setup and license administration.",
    approach:
      "I designed the marketing narrative and page system first — product storytelling, visual language, and a page structure built to make a complex product legible to a non-technical buyer. Then I extended the same design system into the authenticated portal, designing account setup, license visibility, and seat-administration flows, and built both surfaces end-to-end in Next.js, TypeScript, Tailwind CSS, and Redux Toolkit, with Drizzle ORM and libSQL backing the portal's data layer.",
    outcome:
      'The result reads as one coherent product across two very different jobs — a marketing site that sells the idea and a portal that operationalizes it — without exposing sensitive operational detail in the public experience.',
    links: [{ label: 'PixeSci', href: 'https://pixesci.com/' }],
    images: imageSet(15, 'PixeSci Website and Portal', 1, 5, 'png'),
  },
  {
    id: 'pixesci-application-experience',
    legacyId: 16,
    title: 'PixeSci Application Experience',
    category: 'frontend-development',
    featured: true,
    priority: 3,
    role: ['Lead Product Designer', 'Lead Frontend Developer'],
    organization: 'PixeSci',
    period: 'Current',
    tools: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Redux Toolkit',
      'shadcn-style UI primitives',
      'Radix UI',
      'Desktop product patterns',
      'Claude',
      'Codex',
    ],
    skills: [
      'Complex workflow UX',
      'Interaction design',
      'Component systems',
      'Frontend direction',
    ],
    summary:
      'A recreated PixeSci application experience that moves the product from an earlier interface into a cleaner, more structured, and more market-ready product UI for complex scientific workflow automation.',
    context:
      'The existing application worked, but its structure fought the people using it — a technical audience running chat-linked automation workflows had to hold too much context in their heads at once.',
    problem:
      "There was no clear hierarchy between what a user was reviewing, what the system had already done, and what needed a human decision — so the interface didn't actually reduce the cognitive load the workflows demanded.",
    approach:
      'I mapped the core user journeys end to end, then redesigned the interaction model around a clear hierarchy: workflow context always visible, review and artifact surfaces separated from history and audit trails, and assistant-driven actions made legible rather than opaque. I translated that into a component system and a desktop-oriented frontend built in Next.js, React, TypeScript, Tailwind CSS, and Redux Toolkit, using shadcn-style and Radix primitives.',
    outcome:
      "The redesign gave the product a hierarchy it didn't have before — a clearer review flow, reusable components instead of one-off screens, and an interface built to scale as more workflow types get added instead of accumulating special cases.",
    links: [{ label: 'PixeSci', href: 'https://pixesci.com/' }],
    images: imageSet(16, 'PixeSci Application Experience', 1, 2, 'png'),
  },
  {
    id: 'pixesci-design-system-figma',
    legacyId: 17,
    title: 'PixeSci Design System and Figma Product Design',
    category: 'design-system',
    featured: true,
    priority: 4,
    role: ['Lead Product Designer'],
    organization: 'PixeSci',
    period: 'Current',
    tools: [
      'Figma',
      'Claude',
      'Codex',
      'Tailwind CSS',
      'shadcn-style UI primitives',
    ],
    skills: [
      'Design systems',
      'Figma component architecture',
      'Interaction states',
      'Design-to-code handoff',
    ],
    summary:
      'A PixeSci design system and Figma product-design foundation covering interface patterns, product visuals, responsive behavior, typography, spacing, color, component states, and scientific workflow surfaces.',
    context:
      'Three PixeSci surfaces — the marketing site, the redesigned application, and a growing set of scientific-workflow screens — were at risk of drifting into three different visual languages if each was designed in isolation.',
    problem:
      'A design system only earns its keep if it actually gets used consistently under deadline pressure — the challenge was building one specific enough to remove guesswork, without being so rigid it slowed down every new screen.',
    approach:
      'I built the design system as the connective layer: typography, color, spacing, and component states defined once in Figma, then used to design every surface, from wireframes and user flows through high-fidelity screens and interactive prototypes. Every component ships with its interaction states and documentation so engineering can implement directly from Figma with minimal back-and-forth.',
    outcome:
      "The system now underwrites every PixeSci surface I design — it's what let the website and application redesigns ship as one coherent product instead of two.",
    links: [{ label: 'PixeSci', href: 'https://pixesci.com/' }],
    images: imageSet(
      17,
      'PixeSci Design System and Figma Product Design',
      1,
      2,
      'png'
    ),
  },
  {
    id: 'ticet-edu-design-system',
    legacyId: 2,
    title: 'Ticet EDU Design System',
    category: 'design-system',
    featured: true,
    priority: 5,
    role: ['Lead Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: [
      'Design systems',
      'Component libraries',
      'Design-to-code handoff',
      'Responsive UI',
    ],
    summary:
      "A structured Figma design kit for Ticet EDU's web platform, covering reusable components, responsive layouts, typography, color palettes, icons, interaction states, and product patterns.",
    context:
      'Ticet EDU was building three different experiences at once — for learners, educators, and content creators — and without a shared component language each one risked shipping with its own visual rules.',
    problem:
      'The system had to hold up across three audiences with different needs, on a timeline where each product surface was moving fast enough that a loose spec would drift within weeks.',
    approach:
      'I built a modular Figma component library from the ground up: typography and color rules, spacing conventions, and every component documented across its interaction states, then packaged as handoff-ready assets so engineering could implement without guessing at intent.',
    outcome:
      'The system became the shared reference for every Ticet EDU surface that followed, including the LXP frontend I later built myself — proof the components held up under real implementation, not just in Figma.',
    links: [],
    images: imageSet(2, 'Ticet EDU Design System'),
  },
  {
    id: 'ticet-edu-lxp-frontend',
    legacyId: 3,
    title: 'Ticet EDU LXP Frontend',
    category: 'frontend-development',
    featured: true,
    priority: 6,
    role: ['Frontend Developer'],
    organization: 'Ticet EDU Limited',
    tools: [
      'GitHub',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Material UI',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
    skills: [
      'Frontend architecture',
      'State management',
      'Design-system implementation',
      'API integration',
    ],
    summary:
      'A Next.js and TypeScript frontend for the Ticet EDU Learning Experience Platform, focused on responsive interfaces, scalable component architecture, API integration, and polished implementation of complex learning workflows.',
    context:
      'The design system existed, but a learning platform carries a lot of moving state — courses, enrollment, progress, content types — and translating a static design system into a frontend that stays correct as that state changes is where most implementations quietly rot.',
    problem:
      "The risk wasn't building any one screen, it was building enough screens, fast enough, during MVP development, without the component library and the real API data model drifting apart.",
    approach:
      'I translated the design system into a real component library, wired it to Redux Toolkit for predictable state management, and integrated it against the backend APIs for courses, users, and learning resources — keeping components close enough to the original Figma system that new screens could be assembled rather than rebuilt.',
    outcome:
      'The frontend held up as the MVP grew: new course and dashboard features composed from existing components instead of forcing rewrites, which is the real test of whether a design system survives contact with a real application.',
    links: [{ label: 'Project', href: 'https://ticetedu.com/' }],
    images: imageSet(3, 'Ticet EDU LXP Frontend'),
  },
  {
    id: 'ticet-edu-lxp-ui-ux',
    legacyId: 4,
    title: 'Ticet EDU LXP UI/UX',
    category: 'ui-design',
    featured: true,
    priority: 7,
    role: ['Lead Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: [
      'UX strategy',
      'Learner-centered design',
      'Prototyping',
      'Responsive layouts',
    ],
    summary:
      "A personalized learning experience design for Ticet EDU's LXP, covering onboarding, dashboards, content discovery, analytics, creator tools, responsive layouts, and interactive learning flows.",
    context:
      'Personalized learning software tends to either overwhelm learners with everything at once, or hide the personalization so deep it stops feeling personal.',
    problem:
      'The LXP needed a dashboard and content-discovery experience that threaded that needle — clear and calm by default, but responsive to what each learner was actually doing.',
    approach:
      'I mapped the core learner and creator journeys before designing a single screen, then built the onboarding, dashboard, and content-discovery flows as modular Figma components with a clear visual hierarchy, keeping the interaction patterns consistent with the design system so the frontend team could implement directly from the file.',
    outcome:
      'The result shaped how learners actually find and track content in the shipped product, and gave the frontend build a design file it could implement screen by screen without reinterpreting intent.',
    links: [],
    images: imageSet(4, 'Ticet EDU LXP UI/UX'),
  },
  {
    id: 'sample-product-documentation',
    legacyId: 8,
    title: 'Sample Product Documentation',
    category: 'product-management',
    featured: true,
    priority: 8,
    role: ['Product Manager'],
    tools: ['Atlassian', 'Jira', 'Confluence'],
    skills: [
      'Requirements writing',
      'User stories and acceptance criteria',
      'Backlog structuring',
      'Agile delivery',
    ],
    summary:
      'A product documentation sample showing how Confluence and Jira can turn subscription packages, feature requirements, epics, user stories, tasks, and acceptance criteria into a transparent delivery system.',
    context:
      'Product documentation tends to fail in one of two directions: over-specified walls of requirements nobody reads, or under-specified one-line tickets that leave engineering guessing.',
    problem:
      'This sample exists to answer a concrete question — what does documentation look like in between those two failure modes, structured enough to plan a sprint against without losing the "why" behind each requirement?',
    approach:
      'I structured Confluence around product specifications — subscription packages, feature requirements, epics — then broke each epic down into Jira user stories, tasks, and acceptance criteria with clear traceability back to the spec, so anyone could follow a requirement from why it exists to the ticket that implements it.',
    outcome:
      "It's a compact demonstration of how I think about requirements: user-centered, traceable, and structured enough for a team to actually plan and deliver against.",
    links: [],
    images: imageSet(8, 'Sample Product Documentation'),
  },
  {
    id: 'lvbice-website',
    legacyId: 10,
    title: 'LVBICE Website',
    category: 'frontend-development',
    featured: true,
    priority: 9,
    role: ['Frontend Developer'],
    tools: [
      'Next.js',
      'TypeScript',
      'Material UI',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
    skills: [
      'Responsive development',
      'Institutional web presence',
      'Accessible navigation',
      'Reusable components',
    ],
    summary:
      'A modern institutional website built with Next.js, TypeScript, Material UI, Tailwind CSS, HTML, and CSS, focused on responsive layouts, accessible navigation, performance, and professional brand presentation.',
    context:
      'The website needed to translate an institutional identity into a clear, responsive digital presence.',
    problem:
      "An institutional website has a narrow job: read as credible and load fast for a visitor who's checking whether the organization is legitimate before doing anything else — the challenge was building that without over-designing it.",
    approach:
      "I built the frontend from structured, reusable layout components rather than one-off pages, keeping the implementation aligned with the institution's brand direction while making each section easy to extend as new content was added.",
    outcome:
      'The site shipped as a fast, accessible, brand-consistent presence — a straightforward brief executed cleanly, which is its own kind of discipline.',
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
    priority: 10,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: [
      'Healthcare UX',
      'Role-based information architecture',
      'Data-dense interfaces',
      'Accessibility',
    ],
    summary:
      'A Figma prototype for a hospital management system designed to help clinical teams access patient records, medical history, vitals, medication schedules, and SOAP notes through a clear dashboard experience.',
    context:
      'Healthcare workflows require speed, clarity, and low cognitive load. The design needed to support medical staff with role-aware navigation and data-heavy screens that remain usable under pressure.',
    problem:
      "Clinical staff don't have the attention budget for a cluttered interface — every extra click or ambiguous label costs time in a context where that time matters — so the design had to earn its data density instead of just displaying it.",
    approach:
      'I designed role-aware navigation so a nurse, doctor, and admin each see only what their role needs, then built the patient-record and SOAP-note surfaces around a clear visual hierarchy — the most time-critical data (vitals, medication schedule) always above the fold, less urgent history one level down.',
    outcome:
      'The result is a prototype that treats a data-heavy clinical workflow as a design problem worth solving carefully, not just a form to lay out — the kind of judgment that matters more in healthcare UI than almost anywhere else.',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=105-985',
      },
      {
        label: 'Prototype',
        href: 'https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=8179-2388&t=FPCj8UyIeFdOkOJr-1',
      },
    ],
    images: imageSet(11, 'Hospital Management System UI/UX'),
  },
  {
    id: 'personal-portfolio',
    legacyId: 1,
    title: 'Personal Portfolio',
    category: 'frontend-development',
    priority: 11,
    role: ['Frontend Developer', 'Product Designer'],
    tools: [
      'GitHub',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'HTML',
      'CSS',
    ],
    skills: [
      'Personal brand and narrative',
      'Content-driven frontend',
      'Interaction design',
      'Responsive layout',
    ],
    summary:
      'A personal portfolio built to present product strategy, UI/UX design, product management, and frontend engineering work in one cohesive professional narrative.',
    context:
      'The portfolio needed to function as both a career profile and work-sample hub, making it easy for founders, hiring managers, and collaborators to understand my hybrid product, design, and frontend capabilities.',
    problem:
      "Most portfolios force a choice: read as a designer's book of pretty screens, or a developer's list of repos — neither shows how the two connect, which is actually the point of my work.",
    approach:
      'I designed and built this site myself, end to end, as a working example of the same process I use on client work: a structured content model first — the project data you’re reading right now — then a component system in Next.js, TypeScript, Tailwind CSS, and shadcn/ui built to make that content easy to scan, filter, and drill into.',
    outcome:
      "The site is itself the proof: every project card, filter, and dialog here is a small frontend and interaction-design decision, made the same way I'd make it on a client project.",
    links: [
      { label: 'Website', href: 'https://japheth-oruko-portfolio.vercel.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/OJ254/japheth-oruko-portfolio',
      },
    ],
    images: imageSet(1, 'Personal Portfolio', 1, 10, 'png'),
  },
  {
    id: 'ticet-edu-website',
    legacyId: 5,
    title: 'Ticet EDU Website',
    category: 'frontend-development',
    priority: 12,
    role: ['Frontend Developer'],
    organization: 'Ticet EDU Limited',
    tools: ['GitHub', 'Vite.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    skills: [
      'Marketing site development',
      'Performance-conscious frontend',
      'Reusable components',
    ],
    summary:
      "A responsive marketing website for Ticet EDU, built with Vite, JavaScript, Tailwind CSS, HTML, and CSS to communicate the platform's collaborative learning mission and provide a clean public-facing brand experience.",
    context:
      'The website needed to introduce Ticet EDU clearly, support brand credibility, and provide a fast, accessible experience for educators, learners, and stakeholders.',
    problem:
      "A marketing site for an early-stage EdTech company has to build credibility fast, before a visitor has any other reason to trust the brand — that's as much a performance and clarity problem as a visual one.",
    approach:
      "I built the site as fast, accessible, reusable sections in Vite and vanilla JavaScript rather than reaching for a heavier framework the project didn't need, keeping the structure close to the Figma design system so it could evolve alongside it.",
    outcome:
      "It shipped as a clean, credible front door for the brand — proof that the right tool for a marketing site isn't always the biggest one.",
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
    priority: 13,
    role: ['Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: [
      'Website UX',
      'Component-based design systems',
      'Interactive prototyping',
    ],
    summary:
      'A Figma design and prototype for the Ticet EDU website, including wireframes, high-fidelity mockups, responsive layouts, reusable UI components, animated transitions, and stakeholder-ready prototypes.',
    context:
      'The public website needed to balance modern education branding, clear navigation, accessibility, and scalable content sections.',
    problem:
      'The website needed to feel credible to institutional buyers and approachable to individual learners at the same time — two audiences with different expectations of what a trustworthy education brand looks like.',
    approach:
      'I mapped the landing-page journey around both audiences, then built a component-based system — navigation, content sections, responsive behavior — with animated transitions used deliberately rather than decoratively, and interactive prototypes to align stakeholders before a line of frontend code was written.',
    outcome:
      'The prototype gave engineering — including my own later frontend build for the LXP — a design file that was implementation-ready, not just a set of static mockups.',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=105-985',
      },
      {
        label: 'Prototype',
        href: 'https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6210-36526&t=DZedl3Y68or48MTT-1',
      },
    ],
    images: imageSet(6, 'Ticet EDU Website UI/UX'),
  },
  {
    id: 'ticet-edu-lms-ui-ux',
    legacyId: 7,
    title: 'Ticet EDU LMS UI/UX',
    category: 'ui-design',
    priority: 14,
    role: ['Product Designer'],
    organization: 'Ticet EDU Limited',
    tools: ['Figma'],
    skills: ['LMS UX', 'Course discovery patterns', 'Reusable components'],
    summary:
      'A learner-centered LMS interface designed in Figma, covering onboarding, course browsing, progress tracking, feedback flows, reusable components, and responsive layouts.',
    context:
      'The LMS needed to make educational content easier to browse, track, and interact with while maintaining a consistent and scalable visual system.',
    problem:
      'Course catalogs are easy to make comprehensive and hard to make navigable — the LMS needed learners to find and track the right content without the browsing experience turning into a wall of cards.',
    approach:
      'I designed the course-discovery and progress-tracking flows around reusable card, form, and navigation components, prototyping the full learner journey from browse to enrolled to in-progress before handing off a system engineering could implement piece by piece.',
    outcome:
      'The component set gave the LMS a consistent, scalable browsing experience instead of a one-off catalog page — the same design-system discipline I applied across the rest of the Ticet EDU work.',
    links: [],
    images: imageSet(7, 'Ticet EDU LMS UI/UX'),
  },
  {
    id: 'lvbice-website-ui-ux',
    legacyId: 9,
    title: 'LVBICE Website UI/UX',
    category: 'ui-design',
    priority: 15,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: [
      'Institutional UX',
      'Responsive design systems',
      'Stakeholder-ready prototyping',
    ],
    summary:
      'A responsive Figma website design for LVBICE, focused on institutional identity, accessible content structure, clear navigation, professional visual hierarchy, and reusable interface components.',
    context:
      'The institution needed a modern public website design that could communicate credibility and make information easier to navigate across devices.',
    problem:
      "An institutional site's design has to read as credible on a phone as much as a desktop, for a visitor who's often verifying legitimacy before doing anything else — it needed to hold up at every breakpoint, not just the hero shot.",
    approach:
      'I designed from wireframes through high-fidelity, responsive screens, building reusable cards and form components rather than bespoke layouts per page, and prototyped the full experience for stakeholder review before handoff.',
    outcome:
      "The design became the frontend build's blueprint directly — the same reusable-component thinking that made the later frontend implementation straightforward.",
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/tlz7RVpv2Rr6tGwiupmEHc/LVBIWCE---Website?node-id=5598-7991&t=kesJxF2mY6cn9tez-1',
      },
    ],
    images: imageSet(9, 'LVBICE Website UI/UX'),
  },
  {
    id: 'infobrix-insurance-website-ui-ux',
    legacyId: 12,
    title: 'Infobrix Insurance Website UI/UX',
    category: 'ui-design',
    priority: 16,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: [
      'Enterprise UI',
      'Light/dark theme systems',
      'Data visualization UI',
    ],
    summary:
      'A high-fidelity Figma prototype for an insurance technology platform with intentionally designed light and dark modes, clear content hierarchy, reusable components, analytics-style visuals, integrations, and mobile app presentation.',
    context:
      'The design needed to make complex insurance technology content feel understandable, credible, and modern across both light and dark themes.',
    problem:
      'Insurance technology is inherently dense — the design problem was making feature-heavy, data-driven content feel approachable in both themes, without dark mode being an afterthought reskin.',
    approach:
      'I designed both themes together from the start rather than deriving one from the other, structuring product sections, feature panels, and analytics-style data visuals as reusable components so the theme variants stayed in sync as the design evolved.',
    outcome:
      'The result is an enterprise-grade prototype where dark mode is a genuine design decision, not a filter — a distinction that shows in how the data visuals hold contrast and hierarchy in both themes.',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23368',
      },
      {
        label: 'Prototype',
        href: 'https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23582&t=DZedl3Y68or48MTT-1',
      },
    ],
    images: imageSet(12, 'Infobrix Insurance Website UI/UX'),
  },
  {
    id: 'event-listing-page-ux-logic',
    legacyId: 13,
    title: 'Event Listing Page UX Logic',
    category: 'ux-logic',
    priority: 17,
    role: ['UX Designer'],
    tools: ['Figma'],
    skills: [
      'UX logic',
      'Component behavior',
      'Search and filters',
      'Empty-state design',
    ],
    summary:
      'A UX logic exercise for an event discovery platform, focused on reducing cognitive overload through clear event-card hierarchy, featured events, searchable listings, status badges, and scalable component behavior.',
    context:
      'Event-discovery products tend to accumulate more filters and badges every time a new event type shows up, until the listing page produces noise instead of signal.',
    problem:
      'As event volume grows, users can miss relevant events when layouts are hard to scan, metadata is inconsistent, or status cues are hidden.',
    approach:
      'I designed reusable event cards around a strict information hierarchy — banner, title, short description, grouped metadata — then layered in featured placement, status badges, and search/filter affordances without letting any of them compete with the primary scan pattern. I also defined the empty-state behavior, which is usually the first thing left undesigned.',
    outcome:
      'The result prioritizes decision speed: relevance, location, mode, cost, and registration status are all readable at a glance, and the card pattern scales as event volume grows instead of degrading.',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=4-6598',
      },
      {
        label: 'Prototype',
        href: 'https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=9096-21636&t=FPCj8UyIeFdOkOJr-1',
      },
    ],
    images: imageSet(13, 'Event Listing Page UX Logic', 2),
  },
  {
    id: 'world-federation-for-animals-website-ui-ux',
    legacyId: 14,
    title: 'World Federation for Animals Website UI/UX',
    category: 'ui-design',
    priority: 18,
    role: ['Product Designer'],
    tools: ['Figma'],
    skills: [
      'Advocacy and narrative UX',
      'Accessible layouts',
      'Theme systems',
    ],
    summary:
      'A Figma website design for a global advocacy organization, using accessible layouts, light and dark themes, clear content hierarchy, storytelling sections, and reusable responsive components.',
    context:
      'The website needed to communicate advocacy, impact, and educational resources through an emotionally resonant but professional interface.',
    problem:
      'Advocacy sites often lean too hard on one lever — emotional storytelling or credible authority. This one needed both: urgent enough to move someone to act, credible enough that a donor or partner takes it seriously.',
    approach:
      'I designed the homepage and impact sections to carry the emotional narrative — imagery, storytelling blocks — while keeping the information architecture (navigation, educational resources, updates) structured and predictable, so the site never sacrifices findability for feeling. Light and dark theme variants were built from the same component set to keep both registers consistent.',
    outcome:
      'The design balances advocacy and credibility in the same interface — a tension a lot of nonprofit sites resolve badly, and one I was intentional about not letting slide.',
    links: [
      {
        label: 'Figma design',
        href: 'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=6386-23676&t=FPCj8UyIeFdOkOJr-1',
      },
    ],
    images: imageSet(14, 'World Federation for Animals Website UI/UX'),
  },
] satisfies Project[];

export const projects: Project[] = [...projectEntries].sort(
  (a, b) => a.priority - b.priority
);

export const featuredProjects = projects.filter(project => project.featured);
