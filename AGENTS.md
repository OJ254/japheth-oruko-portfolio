<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This repository uses a modern Next.js 16 App Router stack. Next APIs, metadata conventions, route behavior, and caching semantics may differ from older training data. Before changing framework-sensitive code, read the installed documentation in `node_modules/next/dist/docs/` for the specific API you touch.
<!-- END:nextjs-agent-rules -->

# Japheth Oruko Portfolio Agent Guide

## Project Purpose

This repository is Japheth Oruko's personal portfolio. It must present him as a product-minded design and frontend professional who can help startups move from idea to product and help established companies improve, scale, and ship mature digital experiences.

The portfolio should communicate that Japheth is not only a visual designer. He works across user-centric UI/UX strategy, product discovery, interface design, design systems, agile product documentation, frontend implementation, AI-assisted development workflows, and stakeholder collaboration.

The site should make the following positioning unmistakable:

- Japheth Oruko is a Nairobi-based Product Designer, Product Manager, Frontend Developer, and AI-assisted product builder.
- He is especially valuable in zero-to-one and early-stage product environments where product thinking, design execution, and implementation judgment must work together.
- He can also support established companies that need better UX, cleaner product documentation, stronger design systems, responsive frontend execution, and cross-functional product delivery.
- His current role is Lead Product Designer and Frontend Lead at PixeSci.
- His current PixeSci role has user-supplied detail: he leads product design and frontend direction across the PixeSci website, application experience, Figma product design, design system, frontend guidance, and AI-assisted design-to-code workflow.
- His strongest existing detailed proof comes from previous Ticet EDU work, where he contributed as Lead Product Designer, Product Manager, and Frontend Developer across a zero-to-one EdTech product.
- His work samples should be treated as case-study material, not just gallery images.

Do not turn the site into a generic freelancer landing page. It should feel like a serious portfolio for product, design, and engineering evaluators.

## Primary Audience

Design and write for these readers:

- Startup founders looking for a product partner who can design, document, and ship early product experiences.
- Hiring managers looking for a hybrid UI/UX designer, product manager, and frontend developer.
- Product leaders at established companies looking for someone who understands users, business goals, and implementation constraints.
- Engineering leads looking for a designer who can produce practical handoff specs and understand frontend tradeoffs.
- Investors or startup advisors scanning for evidence of product judgment and execution discipline.
- Non-technical stakeholders who need clarity around what Japheth can do and why his work matters.

## Personal Information Source Of Truth

Use the current repository as the source of truth for Japheth's personal content unless the user provides newer details.

Primary local source files:

- `src/app/page.tsx`
- `src/app/about/About.tsx`
- `src/app/services/Services.tsx`
- `src/app/works/PortfolioGrid/PortfolioGrid.tsx`
- `src/app/works/PortfolioGrid/ProjectDetails.tsx`
- `src/app/contact/Contact.tsx`
- `public/documents/japheth-oruko_resume.pdf`
- `src/assets/images/japheth-oruko.png`
- `public/assets/images/projects/**`

Known identity details:

- Name: Japheth Oruko
- Location: Nairobi, Kenya
- Phone: `+254 739 134882`
- Email: `japhethoruko@gmail.com`
- GitHub: `https://github.com/OJ254`
- LinkedIn: `https://www.linkedin.com/in/japheth-oruko-b5b9a4301/`
- Behance: `https://www.behance.net/japhethoruko`
- Calendly: `https://calendly.com/japhethoruko`
- Spotify: `https://open.spotify.com/user/vdfj74s06581jrp8n5rr3ic2k`
- Languages: English fluent, Swahili native
- Availability: full-time and contract available
- Current role: Lead Product Designer and Frontend Lead at PixeSci
- Current employer website/application: `https://pixesci.com/`
- Roles: Product Designer, Product Manager, Frontend Developer, Frontend Lead, AI-assisted product builder
- Mastered AI development tools: Claude and Codex
- Mastered frontend tools: React.js, Next.js, MUI, DaisyUI, shadcn/ui, and Tailwind CSS

Use care with age. The current site says `35 Years`, but age becomes stale. Prefer omitting age unless the user explicitly wants it.

## Inspiration Source

The local project `/home/japheth-oruko/projects/portfolio` is the primary inspiration for structure and interaction patterns.

Useful patterns to study:

- `AGENTS.md` for project guidance style.
- `src/app/(app)/(root)/page.tsx` for a single polished profile page composed of focused sections.
- `src/features/portfolio/components/profile-cover.tsx`
- `src/features/portfolio/components/profile-header.tsx`
- `src/features/portfolio/components/overview`
- `src/features/portfolio/components/about.tsx`
- `src/features/portfolio/components/tech-stack.tsx`
- `src/features/portfolio/components/experiences`
- `src/features/portfolio/components/projects`
- `src/features/portfolio/components/panel.tsx`
- `src/components/site-header.tsx`
- `src/components/mobile-nav-v2.tsx`
- `src/components/collapsible-list.tsx`
- `src/registry/components/text-flip`
- `src/registry/components/testimonials-marquee`
- `src/registry/components/scroll-fade-effect`
- `src/registry/components/copy-button`
- `src/registry/components/shimmering-text`
- `src/components/react-bits/electric-border.tsx`
- `src/components/react-bits/magnet.tsx`

Do not blindly copy the inspiration project. Adapt patterns that make sense for Japheth's brand and content.

## Asset Policy

You may copy selected assets or reusable components from `/home/japheth-oruko/projects/portfolio` only when they are appropriate, compatible with the target repository, and not personal to the original author.

Allowed inspiration reuse:

- Structural ideas such as panel sections, line-based separators, collapsible lists, profile header composition, and data-driven portfolio content.
- Generic reusable UI components when licensing and dependencies are acceptable.
- Small interaction patterns such as text flip, copy buttons, scroll fade, simple hover polish, and theme switching.
- Utility structure such as `cn`, data files, and typed content models when adapted cleanly.

Do not copy:

- The original author's name, bio, job history, projects, awards, testimonials, avatar, pronunciation audio, social links, private metrics, brand marks, or personal assets.
- Any copy that would imply Japheth has achievements he does not have.
- Any external asset URL from the inspiration site unless it is replaced with Japheth-owned assets or removed.

Japheth-owned current assets:

- Profile image: `src/assets/images/japheth-oruko.png`
- Logo: `public/assets/images/logo.png`
- Resume: `public/documents/japheth-oruko_resume.pdf`
- Project screenshots: `public/assets/images/projects/id1` through `id17`, with numbered gallery images. PixeSci Website assets are `id15`, PixeSci Application assets are `id16`, and PixeSci Figma/design-system assets are `id17`.

## Design Direction

The redesigned portfolio should feel:

- precise
- premium
- technical
- personal without being casual
- startup-ready
- enterprise-readable
- modern
- restrained
- confident
- product-minded

Use the inspiration project's sharp profile-page structure as a base direction, but tune the tone for Japheth:

- More product strategy and startup execution emphasis.
- Stronger case-study framing.
- More explicit bridge between user-centric UI/UX, product management, frontend engineering, and AI-assisted delivery.
- Less open-source/component-registry framing unless implemented as a small “lab” or “build notes” section.

Avoid:

- Generic purple/blue gradient portfolio styling.
- Floating blob backgrounds.
- Oversized marketing hero with little proof.
- Overly playful interactions that distract from credibility.
- One-page resume dumping with no hierarchy.
- Copy that sounds like a generic AI-generated bio.
- Claims of employment, awards, or client outcomes not supported by current content.

## Technical Expectations

Use the existing stack unless the implementation prompt explicitly changes it:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React.js and Next.js should be treated as core mastered frontend strengths in the portfolio copy.
- MUI, DaisyUI, shadcn/ui, and Tailwind CSS should be treated as mastered UI implementation systems.
- Claude and Codex should be presented as mastered AI development tools that accelerate design exploration, code generation, refactoring, and implementation workflows without replacing product judgment.
- Current MUI dependencies are installed, but a full rebuild should consider whether to reduce or remove MUI usage if it conflicts with the new system.
- Vercel Analytics and Speed Insights are installed and should remain if already wired in.
- Server components by default.
- Client components only for interactivity.
- Data-driven content modules for identity, social links, work experience, projects, services, skills, and education.

If adding dependencies, ask the user first. Explain the package, where it will be used, and why existing dependencies are insufficient.

Likely useful dependency candidates:

- `lucide-react` for crisp interface icons.
- `clsx` and `tailwind-merge` for a local `cn` helper.
- `next-themes` if the rebuild uses robust theme switching.
- `motion` only if subtle motion needs a maintained animation layer.

Do not add a CMS, auth system, database, new analytics vendor, or backend dependency unless the user explicitly asks.

## File Organization

Prefer this structure for the rebuild:

- `src/app` for routes, layouts, metadata, SEO files, and route handlers.
- `src/components/site` for header, footer, mobile nav, theme controls, and global shell.
- `src/components/portfolio` for portfolio-specific section components.
- `src/components/ui` for generic low-level primitives.
- `src/components/visuals` for project screenshot galleries, product diagrams, and non-generic visual systems.
- `src/data` or `src/features/portfolio/data` for typed content.
- `src/types` for shared content types.
- `src/lib` for utilities such as `cn`, URL helpers, date formatting, and SEO helpers.

Keep repeated content data-driven. Do not embed the project list inside a component.

## Content Rules

Use current portfolio content as raw material, but improve the language. Strong copy should be clear, specific, and evidence-led.

Write as a serious product professional:

- Use first person sparingly.
- Prefer direct statements about outcomes, capabilities, and proof.
- Avoid empty adjectives like passionate, innovative, dynamic, and cutting-edge unless supported by specifics.
- Avoid pretending a personal project has enterprise traction.
- Avoid overclaiming metrics that are not documented.
- Present PixeSci as the current employer and current role using the supplied role details:
  - Lead Product Designer and Frontend Lead at PixeSci.
  - Created the company's new public website experience.
  - Created the PixeSci Design System.
  - Redesigned/recreated the application experience into a cleaner, more structured, market-ready product UI.
  - Guides frontend direction around React, Next.js, TypeScript, Tailwind CSS, shadcn-style/Radix primitives, Redux Toolkit, and Tauri-oriented desktop patterns.
  - Uses Claude and Codex for AI-assisted design-to-code iteration, implementation, debugging, refactoring, and documentation.
  - Link: `https://pixesci.com/`.
- Preserve the strong Ticet EDU metrics as previous detailed proof from current content:
  - 400+ high-fidelity screens.
  - 400+ user stories.
  - 120+ MVP features.
  - 40% design-to-development handoff time reduction.
  - 25% task flow efficiency improvement.
  - 30% delivery cycle time reduction.
  - 40% early-stage tester satisfaction improvement.

The new portfolio should highlight Japheth's ability to:

- define and refine product requirements
- map user journeys
- design high-fidelity UI
- design user-centric interfaces around real user goals, workflow friction, accessibility, and business outcomes
- create design systems
- build responsive frontend applications
- build production-grade React.js and Next.js interfaces
- implement polished UI with MUI, DaisyUI, shadcn/ui, and Tailwind CSS
- use Claude and Codex fluently to accelerate ideation, implementation, refactoring, debugging, and UI iteration
- write user stories and acceptance criteria
- bridge founders, designers, engineers, and stakeholders
- work with AI as an accelerator while preserving human product judgment
- support startup MVP delivery
- improve established product experiences

## Project Content Rules

Every project should be treated as either a case study or concise portfolio item.

Important projects to feature:

- PixeSci Website
- PixeSci Application Experience
- PixeSci Design System and Figma Product Design
- Ticet EDU Design System
- Ticet EDU LXP web frontend
- Ticet EDU LXP UI/UX
- Ticet EDU Website
- Ticet EDU Website UI/UX
- Ticet EDU LMS UI/UX
- Sample Documentation using Jira and Confluence
- LVBICE Website
- LVBICE Website UI/UX
- Hospital Management System UI/UX
- Infobrix Insurance Website UI/UX
- Event Listing Page UX Logic
- World Federation for Animals Website
- Personal Portfolio

Prioritize PixeSci as the current role and Ticet EDU as the strongest detailed prior proof. Use supplied PixeSci accomplishments, but do not invent measured conversion, revenue, compliance, customer, funding, or adoption claims unless the user provides validated metrics.

For each project, preserve:

- title
- category
- tools
- screenshot gallery path
- external links where present
- descriptions, improved for clarity and persuasion
- tags, but normalize them into readable skills or outcomes instead of hashtag soup

## Accessibility Rules

- Use one `h1` per page.
- Preserve a logical heading hierarchy.
- All interactive elements must be keyboard accessible.
- Use links for navigation and buttons for actions.
- Give meaningful alt text to content images.
- Use empty alt text only for decorative images.
- Maintain WCAG AA contrast.
- Respect `prefers-reduced-motion`.
- Do not hide critical content behind hover-only interactions.
- Make modals, drawers, galleries, filters, tabs, and accordions accessible.

## Responsive Design Rules

Design mobile-first and verify at:

- 360px width
- 390px width
- 768px width
- 1024px width
- 1440px width

Project screenshots must not overflow or become unreadable. Text must not clip, overlap, or rely on viewport-scaled font sizing.

Use stable dimensions for:

- avatar and header blocks
- project gallery cards
- gallery thumbnails
- filter tabs
- tech stack chips
- timeline markers
- CTA buttons
- resume preview or download buttons

## SEO And Metadata

The portfolio should include:

- Strong root metadata title and description.
- Open Graph metadata.
- Twitter metadata.
- Canonical URL placeholder or current deployed URL if confirmed.
- JSON-LD for `ProfilePage` and `Person`.
- Sitemap and robots routes if not already present.
- Semantic page structure.

Do not fabricate organization affiliations or credentials in structured data.

## Contact And Conversion Rules

Primary conversion actions:

- Email Japheth.
- Book on Calendly.
- Download or view resume.
- Visit LinkedIn.
- Visit GitHub.
- View project case studies.

If a contact form remains:

- Keep validation.
- Keep the existing `/api/contact` behavior only if it is already configured and working.
- Avoid requiring a backend service for core conversion; mailto and Calendly should still work.
- Make status messages accessible.

## Verification

Before finishing implementation work, run:

- `npm run lint`
- `npm run build`

If a typecheck script is added, run it too.

For visual implementation, start the dev server and inspect mobile and desktop layouts. Fix overlap, clipping, blank screenshots, poor contrast, broken image paths, and awkward spacing before handoff.

## Git Hygiene

The repository may already contain unrelated user changes. Do not revert them unless the user explicitly requests it.

Before editing, check `git status --short`.

After editing, report changed files and verification results.

Do not commit unless the user asks.
