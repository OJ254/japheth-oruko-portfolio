import type { ProductProcessPhase } from '@/types/portfolio';

export const productProcess: ProductProcessPhase[] = [
  {
    id: 'discover',
    phase: '01',
    title: 'Discover the market and the real problem',
    summary:
      'I start by understanding the business context, market pressure, user pain, and constraints before suggesting screens or features.',
    focus: 'Market research, problem discovery, target users, interviews, personas, and competitor analysis.',
    activities: [
      'Review the market, product category, and competing experiences.',
      'Clarify the audience, use cases, decision makers, and adoption barriers.',
      'Run stakeholder conversations, user interviews, or persona-based discovery when direct users are not yet available.',
      'Separate symptoms from root problems so the team does not build the wrong thing faster.',
    ],
    outputs: ['Research notes', 'Problem framing', 'Audience segments', 'Competitor patterns'],
    proof:
      'A clearer product brief that connects user needs, business goals, and realistic delivery constraints.',
  },
  {
    id: 'define',
    phase: '02',
    title: 'Define product goals and the experience structure',
    summary:
      'Once the problem is clear, I turn ambiguity into a buildable product direction: goals, scope, flows, and information architecture.',
    focus: 'Product goals, feature scope, information architecture, user flows, and success criteria.',
    activities: [
      'Translate research and stakeholder goals into product outcomes.',
      'Prioritize MVP scope against effort, risk, and user value.',
      'Map navigation, content hierarchy, user flows, edge cases, and system states.',
      'Write user stories, acceptance criteria, and delivery notes that engineering can build from.',
    ],
    outputs: ['Product goals', 'MVP scope', 'User flows', 'Information architecture', 'User stories'],
    proof:
      'A shared product map that helps founders, product teams, designers, and engineers make the same tradeoffs.',
  },
  {
    id: 'design',
    phase: '03',
    title: 'Design the interaction, interface, and system',
    summary:
      'I move from UX structure into wireframes, high-fidelity UI, reusable components, prototypes, and design-system rules.',
    focus: 'UX wireframing, UI design, design systems, reusable components, responsive states, and prototyping.',
    activities: [
      'Sketch and wireframe core journeys before polishing visual details.',
      'Design responsive screens, component states, empty states, errors, and accessibility-aware interactions.',
      'Build reusable UI patterns for consistency across product surfaces.',
      'Prototype key flows so stakeholders can review behavior, not only static screens.',
    ],
    outputs: ['Wireframes', 'High-fidelity UI', 'Design system', 'Prototype', 'Handoff notes'],
    proof:
      'A product experience that looks polished, behaves consistently, and is easier to implement without guesswork.',
  },
  {
    id: 'build',
    phase: '04',
    title: 'Build the interface and product workflows',
    summary:
      'I translate the product design into responsive React/Next.js interfaces and practical server-side workflows where the product requires them.',
    focus: 'Frontend development, component implementation, portal workflows, API integration, state, responsiveness, and QA.',
    activities: [
      'Create component-driven frontend interfaces with React, Next.js, TypeScript, Tailwind CSS, and UI systems.',
      'Connect screens to APIs, authenticated sessions, and data states where the product requires it.',
      'Account for loading states, errors, permissions, data boundaries, responsiveness, accessibility, and maintainability.',
      'Use Claude and Codex to accelerate implementation, debugging, refactoring, and iteration while keeping product judgment in control.',
    ],
    outputs: ['Frontend components', 'Integrated flows', 'Portal workflows', 'Responsive UI', 'QA fixes', 'Implementation notes'],
    proof:
      'A working product surface that respects the design intent while handling real implementation constraints.',
  },
  {
    id: 'improve',
    phase: '05',
    title: 'Test, launch, learn, and improve',
    summary:
      'The work does not stop at handoff. I test, gather feedback, improve friction points, and help the product mature after launch.',
    focus: 'Testing, feedback, iteration, launch readiness, analytics thinking, and ongoing optimization.',
    activities: [
      'Review usability, visual quality, responsiveness, edge cases, and interaction details before release.',
      'Collect feedback from stakeholders, testers, users, or product analytics where available.',
      'Iterate on flows that create confusion, friction, hesitation, or unnecessary engineering complexity.',
      'Support launch readiness, post-launch improvements, and product-system cleanup.',
    ],
    outputs: ['Usability notes', 'Iteration backlog', 'Launch fixes', 'Optimization ideas', 'System improvements'],
    proof:
      'A product that can keep improving after release instead of becoming a one-time design handoff.',
  },
];

export const processSignals = [
  'Market fit before visual polish',
  'User flows before isolated screens',
  'Reusable systems before one-off UI',
  'Buildable stories before vague handoff',
  'Data boundaries before backend shortcuts',
  'Testing and iteration before final claims',
] as const;
