export const capabilities = [
  {
    title: 'Product discovery and UX strategy',
    body: 'Clarify product goals, users, constraints, and MVP scope so early teams can move from vague intent to buildable product direction.',
    artifact: 'Research notes, journeys, flows, opportunity maps, MVP scope.',
  },
  {
    title: 'UI/UX design',
    body: 'Design user-centered interfaces around real tasks, friction points, accessibility needs, and business outcomes.',
    artifact:
      'Wireframes, high-fidelity screens, prototypes, responsive states.',
  },
  {
    title: 'Design systems',
    body: 'Create reusable patterns, components, tokens, and interaction states that make product teams faster and more consistent.',
    artifact: 'Figma libraries, component specs, UI rules, handoff notes.',
  },
  {
    title: 'User stories and product documentation',
    body: 'Translate business goals and user needs into clear user stories, acceptance criteria, flows, and Jira/Confluence-ready documentation.',
    artifact: 'Epics, stories, acceptance criteria, backlog structure.',
  },
  {
    title: 'Frontend and portal development',
    body: 'Build polished, responsive React.js and Next.js interfaces with TypeScript, MUI, DaisyUI, shadcn/ui, Tailwind CSS, and practical server-side product workflows.',
    artifact:
      'Production-ready components, responsive pages, authenticated portal flows.',
  },
  {
    title: 'Claude and Codex workflow',
    body: 'Use Claude and Codex to accelerate product exploration, code generation, UI iteration, refactoring, debugging, and planning while keeping product judgment in control.',
    artifact:
      'Faster prototypes, cleaner refactors, implementation plans, debug paths.',
  },
] as const;

export const stackGroups = [
  {
    title: 'Design',
    items: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Prototyping',
      'Wireframing',
      'Design systems',
    ],
  },
  {
    title: 'Frontend and full-stack',
    items: [
      'Next.js',
      'Nest.js',
      'React.js',
      'Tauri',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'DaisyUI',
      'Shadcn/ui',
      'Material UI',
      'Vite.js',
      'Drizzle ORM',
      'libSQL',
      'Access workflows',
    ],
  },
  {
    title: 'Product delivery',
    items: [
      'Jira',
      'Confluence',
      'Atlassian',
      'User stories',
      'Backlog management',
      'Agile/Scrum',
    ],
  },
  {
    title: 'Engineering workflow',
    items: [
      'GitHub',
      'Git',
      'Bitbucket',
      'Redux Toolkit',
      'PostgreSQL',
      'Prisma',
      'Keycloak',
    ],
  },
  {
    title: 'AI-assisted delivery',
    items: [
      'Claude',
      'Codex',
      'Vibe coding',
      'AI-assisted UI execution',
      'AI-assisted UI exploration',
      'AI-assisted refactoring',
      'AI-assisted debugging',
      'Implementation planning',
    ],
  },
] as const;
