# Japheth Oruko Portfolio Rebuild Master Implementation Prompt

Use this prompt to rebuild Japheth Oruko's portfolio in `/home/japheth-oruko/projects/japheth-oruko-portfolio`.

/home/japheth-oruko/projects/japheth-oruko-portfolio/AGENTS.md

This is an implementation prompt, not the implementation itself. It is meant for a later Codex run that will rebuild the portfolio deliberately, using the current portfolio as the personal-content source of truth and `/home/japheth-oruko/projects/portfolio` as the primary design and architecture inspiration.

The rebuild should be treated as a near-total redesign. Almost everything about the current experience can change: information architecture, visual system, component structure, copy hierarchy, project presentation, section order, navigation, layout, motion, and data model. Preserve the user's actual identity, work samples, contact details, resume, and owned assets.

## Critical First Instruction

Before implementing the website rebuild, create or update an `AGENTS.md` file in `/home/japheth-oruko/projects/japheth-oruko-portfolio` similar in purpose and tone to `/home/japheth-oruko/projects/pixesci-website/AGENTS.md`.

The agent guide must establish:

- project purpose
- target audience
- design direction
- source-of-truth files
- inspiration boundaries
- technical expectations
- content rules
- accessibility rules
- responsive rules
- verification rules
- git hygiene

If an `AGENTS.md` already exists, read it first and update it rather than blindly overwriting user changes.

Use the following guide content as the baseline. Adapt only if the repository has changed or the user gives newer direction.

```md
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
- His PixeSci achievements are still pending user-supplied detail; use clearly marked placeholder/dummy copy for now and make it easy to replace later.
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
- Current employer website/application placeholder: `https://pixesci.com/`
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
- Project screenshots: `public/assets/images/projects/id1` through `id14`, with numbered gallery images.

## Design Direction

The redesigned portfolio should feel precise, premium, technical, personal without being casual, startup-ready, enterprise-readable, modern, restrained, confident, and product-minded.

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

## Verification

Before finishing implementation work, run:

- `npm run lint`
- `npm run build`

If a typecheck script is added, run it too.
```

## Research Basis

Use the current portfolio repository as the source of truth for Japheth's personal facts, work history, project screenshots, links, and current proof points.

Primary current repository:

- `/home/japheth-oruko/projects/japheth-oruko-portfolio`

Current source files to inspect before writing code:

- `/home/japheth-oruko/projects/japheth-oruko-portfolio/package.json`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/next.config.ts`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/tsconfig.json`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/layout.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/page.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/globals.css`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/about/About.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/services/Services.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/works/Works.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/works/PortfolioGrid/PortfolioGrid.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/works/PortfolioGrid/ProjectDetails.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/contact/Contact.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/app/api/contact/route.ts`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/context/ThemeContext.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/hooks/useThemeToggle.ts`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/components/general/Header/LargeHeader.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/components/general/Header/SmallHeader.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/components/general/PdfReader/PdfReader.tsx`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/components/ui/dataDisplay/icons`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/components/ui/dataDisplay/icons/logos`

Current asset inventory to preserve or intentionally replace:

- `/home/japheth-oruko/projects/japheth-oruko-portfolio/src/assets/images/japheth-oruko.png`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/logo.png`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/documents/japheth-oruko_resume.pdf`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id1/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id2/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id3/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id4/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id5/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id6/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id7/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id8/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id9/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id10/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id11/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id12/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id13/1.jpg` through `10.jpg`
- `/home/japheth-oruko/projects/japheth-oruko-portfolio/public/assets/images/projects/id14/1.jpg` through `10.jpg`

Primary inspiration repository:

- `/home/japheth-oruko/projects/portfolio`

Inspiration files to inspect before implementation:

- `/home/japheth-oruko/projects/portfolio/AGENTS.md`
- `/home/japheth-oruko/projects/portfolio/package.json`
- `/home/japheth-oruko/projects/portfolio/src/app/(app)/(root)/page.tsx`
- `/home/japheth-oruko/projects/portfolio/src/app/layout.tsx`
- `/home/japheth-oruko/projects/portfolio/src/styles/globals.css`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/data/user.ts`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/data/projects.ts`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/data/experiences.ts`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/data/tech-stack.ts`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/data/social-links.ts`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/profile-cover.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/profile-header.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/overview/index.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/about.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/tech-stack.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/experiences/index.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/experiences/experience-item.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/experiences/experience-position-item.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/projects/index.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/projects/project-item.tsx`
- `/home/japheth-oruko/projects/portfolio/src/features/portfolio/components/panel.tsx`
- `/home/japheth-oruko/projects/portfolio/src/components/collapsible-list.tsx`
- `/home/japheth-oruko/projects/portfolio/src/components/site-header.tsx`
- `/home/japheth-oruko/projects/portfolio/src/components/mobile-nav-v2.tsx`
- `/home/japheth-oruko/projects/portfolio/src/components/nav-scrollspy.tsx`
- `/home/japheth-oruko/projects/portfolio/src/components/theme-toggle.tsx`
- `/home/japheth-oruko/projects/portfolio/src/registry/components/text-flip/text-flip.tsx`
- `/home/japheth-oruko/projects/portfolio/src/registry/components/scroll-fade-effect/scroll-fade-effect.tsx`
- `/home/japheth-oruko/projects/portfolio/src/registry/components/copy-button/copy-button.tsx`
- `/home/japheth-oruko/projects/portfolio/src/registry/components/shimmering-text/shimmering-text.tsx`

Use the inspiration project for:

- compact profile-page composition
- border and separator language
- panel primitives
- data-driven section structure
- polished collapsible lists
- crisp personal details grid
- professional portfolio rhythm
- subtle motion and interaction
- command/menu/nav polish where useful
- JSON-LD profile metadata patterns

Do not use the inspiration project for:

- Japheth's personal data
- project content
- career claims
- external asset URLs
- unrelated component registry routes unless intentionally useful
- blog/content architecture unless the new portfolio includes real content

## Non-Negotiable Rules

- Rebuild the portfolio as a serious product/design/frontend portfolio, not a generic personal website.
- Use the current repository for Japheth's facts and samples.
- Use `/home/japheth-oruko/projects/portfolio` as inspiration, not as a source of personal content.
- Do not copy the inspiration author's name, biography, jobs, metrics, awards, projects, avatar, audio, or social links.
- Do not invent testimonials.
- Do not invent certifications.
- Do not invent employer names.
- Do not invent client outcomes.
- Do not claim public launch, revenue, funding, user counts, or enterprise adoption unless the current portfolio or user explicitly supplies it.
- Do not present PixeSci placeholder achievements as final facts. Mark them as placeholder/dummy information until the user supplies real achievements.
- Do not display stale age unless the user explicitly asks.
- Do not make a landing page that hides work samples below generic marketing.
- Do not remove the resume unless replacing it with an equal or better resume action.
- Do not break direct conversion paths: email, Calendly, LinkedIn, GitHub, resume, and project links must remain easy to access.
- Do not rely on hover-only interactions.
- Do not build the whole site as one giant client component.
- Do not keep project and experience data embedded in JSX.
- Do not introduce a backend, CMS, database, auth, or new analytics vendor.
- Do not silently install dependencies.
- Do not silently add shadcn components or registries.
- Do not revert unrelated user changes.

## Phase 0: Required Pre-Implementation Setup

Before writing implementation code, complete this setup phase.

- Run `git status --short`.
- Note any existing changes and avoid overwriting unrelated user work.
- Read `AGENTS.md`.
- If `AGENTS.md` is missing, create it first using the guide content above.
- Inspect `package.json` and identify the installed stack.
- Inspect `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/globals.css`.
- Inspect all current portfolio content files listed in the research basis.
- Inspect the inspiration files listed in the research basis.
- Read relevant Next.js 16 docs in `node_modules/next/dist/docs/` before changing metadata, routing, image behavior, route handlers, or App Router conventions.
- Decide whether to keep MUI, reduce MUI usage, or remove MUI from the rebuilt UI.
- If removing MUI, do not uninstall it unless the user approves.
- Identify any dependency additions that would materially improve quality.
- Ask the user before installing any dependency.
- Identify whether shadcn/ui components are needed.
- Ask the user before running `npx shadcn@latest` or modifying component registry config.
- Prepare an implementation plan with routes, sections, file organization, data models, component primitives, asset strategy, and verification commands.

## Recommended Implementation Strategy

Prefer a full replacement of the UI while preserving the Next.js app shell and assets.

Recommended direction:

- Keep Next.js App Router.
- Keep TypeScript.
- Keep Tailwind CSS 4.
- Treat React.js and Next.js mastery as a major frontend positioning pillar.
- Treat MUI, DaisyUI, shadcn/ui, and Tailwind CSS mastery as a major UI implementation pillar.
- Treat Claude and Codex mastery as a major AI-assisted delivery pillar.
- Move portfolio content into typed data files.
- Build a minimal custom design system inspired by the reference project.
- Reduce reliance on MUI for the new public-facing UI unless keeping it saves time without compromising style.
- Use local SVG/icon components only when already available or necessary.
- Prefer `lucide-react` if icons are needed and the user approves adding it.
- Preserve the contact API only if it remains useful and working.
- Keep the resume PDF.
- Keep project galleries from `public/assets/images/projects`.
- Use `next/image` for local screenshots and profile image.
- Use server components for static sections.
- Use small client components for filters, galleries, theme switcher, mobile navigation, and copy-to-clipboard.

## Target Experience Summary

The rebuilt portfolio should feel like a compact but high-end professional profile and case-study system.

The first viewport should immediately answer:

- Who is Japheth?
- What does he do?
- Why is he valuable?
- What proof does he have?
- How can a founder, hiring manager, or product leader contact him?

Ideal first-viewport message:

- Name: `Japheth Oruko`
- Positioning: `Lead Product Designer and Frontend Lead helping teams turn early product ideas into usable, scalable digital experiences.`
- Location: `Nairobi, Kenya`
- Availability: `Available for full-time and contract work`
- Current focus: `User-centric UI/UX, frontend leadership, React/Next.js implementation, design systems, AI-assisted delivery, and product documentation`
- Proof chips: `PixeSci`, `Lead Product Designer`, `Frontend Lead`, `React.js`, `Next.js`, `Claude`, `Codex`, `MUI`, `DaisyUI`, `shadcn/ui`, `Tailwind CSS`
- CTAs: `Book a call`, `Email me`, `View work`, `Download resume`

The site should combine:

- personal profile
- resume highlights
- case studies
- capabilities
- startup-focused value proposition
- product process
- current PixeSci placeholder profile
- contact conversion

## Information Architecture

Build the site as a polished single-page profile with optional detail routes only if time and quality permit.

Primary route:

- `/`

Recommended optional routes:

- `/projects/[slug]` for project detail pages if project case studies need more room.
- `/resume` if a clean resume viewer route is desired.
- `/contact` only if a dedicated conversion page is useful.

If implementing only `/`, it must still have deep sections with anchor navigation.

Recommended homepage sections:

1. Profile cover and header.
2. Overview and contact grid.
3. Value proposition.
4. Proof metrics.
5. Featured work.
6. Capabilities.
7. Experience timeline.
8. Product process.
9. Tech stack and tools.
10. Education.
11. Full project archive.
12. Services or engagement model.
13. Contact and resume.

Section anchors:

- `#about`
- `#proof`
- `#work`
- `#capabilities`
- `#experience`
- `#process`
- `#stack`
- `#education`
- `#contact`

Navigation should be compact, sticky where appropriate, and optimized for scanning.

## Core Positioning

Use this positioning as the backbone:

Japheth Oruko helps teams design, define, and ship digital products with a rare mix of product strategy, user-centric UI/UX design, frontend leadership, and AI-assisted implementation. He is strongest in early-stage and zero-to-one environments where teams need someone who can translate ambiguous ideas into user flows, design systems, user stories, prototypes, and production-ready React/Next.js interfaces.

Support this with:

- 8+ years creating digital products.
- Current Lead Product Designer and Frontend Lead at PixeSci.
- Hands-on work as Product Designer, Product Manager, Frontend Developer, and Frontend Lead.
- Startup experience at PixeSci and previous Ticet EDU work.
- Strong Figma and design-system work.
- Product documentation and user-story depth.
- Frontend implementation mastery with React.js, Next.js, TypeScript, Redux Toolkit, MUI, DaisyUI, shadcn/ui, and Tailwind CSS.
- Mastery of Claude and Codex for AI-assisted product design, frontend implementation, refactoring, debugging, and iteration.
- Cross-functional collaboration with founders, engineers, designers, and stakeholders.

Avoid reducing him to only:

- UI designer
- frontend developer
- product manager
- freelancer
- generic creative

He is a hybrid product builder.

## Voice And Copy Direction

Tone:

- direct
- mature
- polished
- product-literate
- practical
- confident
- human

Avoid:

- hype
- buzzword overload
- vague “passionate about technology” copy
- exaggerated enterprise claims
- excessive first-person paragraphs
- generic AI-portfolio wording

Preferred writing style:

- short subject-verb-object sentences
- concrete proof
- active verbs
- clear audience benefit
- startup and product delivery language
- measured claims

Use phrases like:

- `turn ambiguous product ideas into clear, buildable experiences`
- `bridge discovery, design, documentation, and frontend delivery`
- `design systems that make teams faster and more consistent`
- `user stories that developers can actually build from`
- `interfaces that account for real constraints, not just visual polish`
- `from early product definition to responsive implementation`
- `built for founders, product teams, and engineering partners`

Avoid phrases like:

- `passionate creative`
- `innovative solutions`
- `cutting-edge`
- `world-class` in body copy unless substantiated
- `I create amazing experiences`
- `leveraging synergy`
- `transforming dreams into reality`

## Personal Data To Use

Create a typed `USER` data object or equivalent with:

- firstName: `Japheth`
- lastName: `Oruko`
- displayName: `Japheth Oruko`
- username: `OJ254`
- pronouns: omit unless user supplies them
- primaryTitle: `Lead Product Designer, Frontend Lead & AI-assisted Product Builder`
- shortBio: `I help teams turn early product ideas into usable, scalable digital experiences across user-centric UI/UX, product thinking, design systems, documentation, and React/Next.js frontend implementation.`
- currentCompany: `PixeSci`
- currentCompanyWebsite: `https://pixesci.com/`
- currentCompanyApplication: `https://pixesci.com/`
- currentRole: `Lead Product Designer and Frontend Lead`
- currentRoleNote: `PixeSci achievements are placeholder/dummy content until the user supplies final details.`
- location: `Nairobi, Kenya`
- email: `japhethoruko@gmail.com`
- phone: `+254 739 134882`
- calendly: `https://calendly.com/japhethoruko`
- github: `https://github.com/OJ254`
- linkedin: `https://www.linkedin.com/in/japheth-oruko-b5b9a4301/`
- behance: `https://www.behance.net/japhethoruko`
- spotify: `https://open.spotify.com/user/vdfj74s06581jrp8n5rr3ic2k`
- resume: `/documents/japheth-oruko_resume.pdf`
- avatar: use imported `src/assets/images/japheth-oruko.png` or move to public if appropriate
- languages: English fluent, Swahili native
- availability: full-time and contract available
- timeZone: `Africa/Nairobi`
- keywords: Japheth Oruko, Product Designer, UI UX Designer, User-Centric UI UX, Product Manager, Frontend Developer, Frontend Lead, Next.js Developer, React Developer, Claude, Codex, MUI, DaisyUI, shadcn/ui, Tailwind CSS, Figma Designer, Nairobi, Kenya, Startup Product Designer, Design Systems

Do not include age by default.

## Hero Section Requirements

The hero should be the profile header, not a generic marketing hero.

Required elements:

- profile image
- display name
- verified/professional indicator if tasteful
- animated role line or rotating role text
- short positioning statement
- current work focus
- location
- availability
- primary CTA: `Book a call`
- secondary CTA: `Email me`
- tertiary links: GitHub, LinkedIn, Behance, Resume
- proof chips

Suggested role rotation:

- `Product Designer`
- `Product Manager`
- `Frontend Developer`
- `Lead Product Designer at PixeSci`
- `Frontend Lead at PixeSci`
- `React.js and Next.js specialist`
- `MUI, DaisyUI, shadcn/ui, and Tailwind builder`
- `Claude and Codex power user`
- `Zero-to-one product builder`
- `Design systems and MVP delivery`

Hero copy option:

`I help founders and product teams turn rough ideas into clear, buildable digital products: user-centered flows, polished interfaces, design systems, user stories, and production-ready React/Next.js frontend experiences.`

Alternative tighter hero copy:

`Lead Product Designer and Frontend Lead helping teams move from ambiguous ideas to user-centered, scalable digital products.`

Do not use a giant decorative hero background that overwhelms the portfolio.

## Overview Section Requirements

Use the inspiration project's overview grid as a model.

Show:

- current roles
- location
- local time in Nairobi
- email
- phone
- Calendly link
- website/deployed portfolio URL if known
- availability
- languages

Role rows should include:

- `Lead Product Designer at PixeSci`
- `Frontend Lead at PixeSci`
- `Previous Lead Product Designer at Ticet EDU`
- `Previous Product Manager at Ticet EDU`
- `Previous Frontend Developer at Ticet EDU`

PixeSci role rows should link to `#experience` and `https://pixesci.com/` where appropriate. Ticet EDU role rows should be clearly framed as previous work.

## Value Proposition Section

Create a section that explicitly speaks to startups and established companies.

Title option:

`A product partner for the messy middle between idea, design, and code.`

Content pillars:

- For startups: clarify the product, design the MVP, write buildable stories, and ship interfaces without bloated process.
- For product teams: improve UX, stabilize design systems, document product behavior, and reduce handoff friction.
- For engineering teams: translate designs into practical frontend components with awareness of state, responsiveness, and implementation constraints.

Use three or four compact panels.

Panel examples:

- `Zero-to-one product definition`
- `Design systems and UI execution`
- `User stories and delivery clarity`
- `Frontend implementation`

Each panel should include outcomes and concrete examples.

## Proof Metrics Section

Use the current portfolio's strongest detailed metrics from prior Ticet EDU work, and add a clearly marked PixeSci placeholder block.

PixeSci placeholder/dummy information:

- Current role: `Lead Product Designer and Frontend Lead`
- Company/product: `PixeSci`
- Website/application placeholder: `https://pixesci.com/`
- Placeholder focus: user-centric UI/UX for scientific workflow software, frontend leadership, React/Next.js interface development, design-system direction, responsive application implementation, and AI-assisted development with Claude and Codex.
- Placeholder achievements must be visually marked or internally commented as temporary until the user provides real PixeSci achievements.

Metrics:

- `400+` high-fidelity screens and prototypes
- `400+` user stories with acceptance criteria
- `120+` MVP features across web and mobile platform work
- `40%` faster design-to-development handoff through shared components and documentation
- `30%` delivery cycle time reduction through disciplined backlog grooming and sprint planning
- `25%` task-flow efficiency improvement from UX friction analysis and redesign
- `40%` early-stage tester satisfaction improvement through continuous feedback loops

Be careful:

- Present these as selected portfolio highlights from previous Ticet EDU work.
- Do not imply independently audited metrics.
- Do not overdecorate metrics.
- Add a short note if needed: `Selected outcomes from existing portfolio materials. PixeSci details are placeholders pending final achievements.`

## About Section Requirements

Rewrite the current About into polished, concise copy.

Key facts:

- Based in Nairobi, Kenya.
- 8+ years creating digital products.
- Current Lead Product Designer and Frontend Lead at PixeSci.
- UI/UX Product Designer with hands-on experience as Product Owner/Product Manager, Frontend Developer, and Frontend Lead.
- Specializes in zero-to-one product development.
- Works from discovery and concept through design, validation, documentation, and implementation.
- Balances user needs, business goals, and technical feasibility.
- Comfortable collaborating with founders, engineers, and stakeholders.
- Strong emphasis on user-centric UI/UX, React.js and Next.js implementation, and polished UI systems using MUI, DaisyUI, shadcn/ui, and Tailwind CSS.
- Uses Claude and Codex as mastered AI development tools to accelerate ideation, prototyping, implementation, debugging, and refactoring.

Suggested about copy:

`I'm a Nairobi-based Lead Product Designer and Frontend Lead with 8+ years of experience creating digital products. My strongest work sits at the intersection of product definition, user-centric UI/UX, interface systems, and React/Next.js implementation. I help teams make early product decisions clearer, turn user needs into buildable flows, and carry those ideas through design systems, prototypes, user stories, and responsive frontend interfaces.`

Second paragraph:

`I am especially useful in zero-to-one and startup environments where there is no perfect brief. I can help define the problem, shape the MVP, design the experience, document the behavior, and lead frontend implementation. For established teams, I bring structure to product experiences that need clearer UX, stronger UI systems, modern React/Next.js execution, and better handoff between product, design, and engineering.`

## AI And Design Judgment Section

The current portfolio includes a useful philosophy about AI and human judgment. Keep the idea but tighten it.

Title option:

`Where AI accelerates, product judgment still matters.`

Core message:

- AI can accelerate ideation, visual exploration, layout generation, and production.
- Claude and Codex are mastered tools in Japheth's workflow and should be presented as practical accelerators for product thinking, UI exploration, frontend implementation, refactoring, debugging, and iteration.
- Good UX still requires understanding user hesitation, trust, conversion, accessibility, business constraints, and implementation tradeoffs.
- Japheth uses AI as an accelerator, not a substitute for product judgment.
- His value is knowing what to customize, what to simplify, what to validate, and what to ship.

Avoid sounding anti-AI.

Suggested copy:

`Claude and Codex help me move faster across ideation, prototyping, frontend implementation, debugging, and refactoring. They do not replace the judgment needed to decide which interaction earns trust, which flow reduces anxiety, which feature should wait, or which component will remain maintainable after launch. I use AI to accelerate the work, then apply product judgment, UX intuition, and frontend constraints to make it usable, credible, and buildable.`

## Capabilities Section

Use the current Services and Skills as raw material, but upgrade presentation.

Core capabilities:

1. Product discovery and UX strategy.
2. UI/UX design.
3. Design systems.
4. Prototyping and wireframing.
5. User stories and product documentation.
6. Frontend development.
7. Cross-functional collaboration.
8. Usability testing and iteration.
9. AI-assisted product and frontend delivery with Claude and Codex.
10. UI implementation systems with MUI, DaisyUI, shadcn/ui, and Tailwind CSS.

For each capability include:

- what Japheth does
- what artifact comes out of it
- why it helps the team

Example:

`User stories and product documentation`

`I translate business goals and user needs into clear user stories, acceptance criteria, flows, and Confluence/Jira-ready documentation so developers can build with fewer assumptions.`

Frontend capability example:

`Frontend development`

`I build polished, responsive React.js and Next.js interfaces with TypeScript, MUI, DaisyUI, shadcn/ui, and Tailwind CSS, translating user-centered designs into maintainable production-ready components.`

AI-assisted delivery example:

`Claude and Codex workflow`

`I use Claude and Codex fluently to accelerate product exploration, code generation, UI iteration, refactoring, debugging, and implementation planning while keeping human product judgment in control.`

## Tech Stack Section

Use current tools:

- Figma
- Material UI
- MUI
- DaisyUI
- shadcn/ui
- Next.js
- Tailwind CSS
- Jira
- Confluence
- PostgreSQL
- TypeScript
- React.js
- JavaScript
- HTML
- CSS
- Vite.js
- Redux Toolkit
- Atlassian
- GitHub
- Git
- Bitbucket
- Adobe XD
- Sketch
- Claude
- Codex

Group them:

- Design: Figma, Adobe XD, Sketch, prototyping, wireframing, design systems
- Frontend: Next.js, React.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, MUI, DaisyUI, shadcn/ui, Material UI, Vite.js
- Product delivery: Jira, Confluence, Atlassian, user stories, backlog management, Agile/Scrum
- Engineering workflow: GitHub, Git, Bitbucket, Redux Toolkit, PostgreSQL
- AI-assisted delivery: Claude, Codex, AI-assisted UI exploration, AI-assisted refactoring, AI-assisted debugging, AI-assisted implementation planning

Do not overemphasize exact percentage skill bars. Replace with grouped, readable capability chips or proficiency descriptions.

If skill bars are used, make them subtle and avoid implying scientifically precise skill measurement.

## Experience Section Requirements

Represent PixeSci as the current company and Ticet EDU as previous detailed proof. Use a multi-position/timeline structure similar to the inspiration project's experience component.

Current company:

- `PixeSci`
- Website/application placeholder: `https://pixesci.com/`
- Current employer
- Role: `Lead Product Designer and Frontend Lead`
- Status: current
- Achievement detail: placeholder/dummy until the user supplies final achievements.

PixeSci placeholder summary:

`Lead Product Designer and Frontend Lead for PixeSci, currently shaping user-centered product experiences and frontend implementation for the PixeSci website and application. Placeholder details should emphasize scientific workflow UX, product interface design, responsive React/Next.js implementation, design-system foundations, frontend architecture, and AI-assisted delivery with Claude and Codex. Replace this copy once final achievements are provided.`

PixeSci placeholder responsibilities:

- Lead user-centric UI/UX direction for the PixeSci website and application.
- Shape product flows, interface patterns, and design-system foundations for a technical scientific software audience.
- Lead frontend implementation using React.js, Next.js, TypeScript, Tailwind CSS, and relevant UI systems.
- Use MUI, DaisyUI, shadcn/ui, and Tailwind CSS to build polished, responsive interfaces.
- Use Claude and Codex to accelerate frontend implementation, debugging, refactoring, and iteration.
- Collaborate with product and engineering stakeholders to connect design decisions with buildable product behavior.

PixeSci placeholder achievements:

- Placeholder: designed initial user-centered interface direction for PixeSci website and application.
- Placeholder: established early frontend component and styling patterns for scalable implementation.
- Placeholder: accelerated design-to-code iteration using Claude and Codex.
- Placeholder: improved clarity of technical product workflows through structured UI patterns.

Mark every PixeSci achievement as placeholder/dummy information until the user provides final detail.

Previous company:

Company:

- `Ticet EDU Limited`
- Location: Nairobi, Kenya
- Type: EdTech startup
- Website: `https://about.ticetedu.com/`
- Remote
- Previous employer/work

Roles:

1. `Lead Product Designer`
   - Duration: `February 2021 - Present`
   - Summary: Lead Product Designer for a zero-to-one educational platform focused on personalized and social learning. Owned end-to-end design of web and mobile experiences, from product discovery and UX strategy to high-fidelity UI, design systems, and developer handoff.

2. `Product Manager`
   - Duration: `June 2023 - Present`
   - Summary: Product Manager leading end-to-end product lifecycle of a zero-to-one digital learning platform serving learners, educators, and content creators. Owned roadmap strategy, backlog prioritization, MVP delivery, and alignment between business objectives, user needs, and engineering capacity.

3. `Frontend Developer`
   - Duration: `January 2025 - Present`
   - Summary: Frontend Developer building a zero-to-one EdTech web platform using React, Next.js, TypeScript, Material UI, Tailwind CSS, and Redux Toolkit. Translates complex UX designs into scalable, accessible, performant frontend features.

Include responsibilities and achievements, but make them collapsible or summarized. Do not dump long bullet walls by default.

Lead Product Designer responsibilities:

- Conducted user research, competitor analysis, and usability testing.
- Built and maintained a scalable component-based Ticet EDU Design System/Kit.
- Designed onboarding, learner dashboards, content discovery, creator tools, rewards systems, and responsive web/mobile flows.
- Defined information architecture, interaction patterns, and visual language.
- Designed mobile-first layouts with light and dark theme support.
- Created user stories and product documentation to support handoff.
- Prepared structured design handoff packages with wireframes, prototypes, interaction specs, and component documentation.
- Collaborated with product and engineering teams to validate feasibility and manage constraints.
- Used AI-powered design tools to accelerate design exploration and execution.

Lead Product Designer achievements:

- Reduced design-to-development handoff time by 40%.
- Improved task-flow efficiency by 25%.
- Delivered 400+ high-fidelity screens and interactive prototypes.
- Established foundational UX standards and design systems.

Product Manager responsibilities:

- Owned and prioritized roadmap, epics, and feature backlog.
- Translated business requirements and research into user stories, workflows, and acceptance criteria.
- Prioritized backlog with MoSCoW and impact-effort frameworks.
- Facilitated Agile ceremonies.
- Conducted requirements sessions.
- Bridged engineering, design, and business stakeholders.
- Defined onboarding flows, go-to-market considerations, and success metrics.
- Made scope, timeline, and priority tradeoffs for MVP delivery.

Product Manager achievements:

- Authored 400+ detailed user stories.
- Delivered 120+ MVP features across web and mobile platform work.
- Reduced delivery cycle time by 30%.
- Increased early-stage tester satisfaction by 40%.

Frontend Developer responsibilities:

- Developed core frontend features using Next.js, TypeScript, Tailwind CSS, and Material UI.
- Implemented global state management using Redux Toolkit.
- Translated high-fidelity Figma designs into responsive UI components.
- Built reusable component-driven UI architecture.
- Integrated frontend components with backend APIs.
- Managed async data fetching, loading states, and error handling.
- Collaborated with product managers and designers to clarify requirements.
- Implemented responsive layouts and accessibility improvements.
- Participated in code reviews and incremental refactoring.

Frontend Developer achievements:

- Transitioned frontend codebase from React.js to Next.js.
- Delivered core MVP features including dashboards, onboarding flows, and content-driven interfaces.
- Improved state predictability and reduced UI bugs with Redux Toolkit slices.
- Increased development efficiency by aligning Material UI components with the design system.
- Strengthened design-to-code workflow through close collaboration during handoff.

## Education Section Requirements

Use current education:

1. `Maseno University, Kisumu, Kenya`
   - Website: `https://www.maseno.ac.ke/`
   - Degree: `Bachelor of Business Administration with Information Technology, Finance Major`
   - Year: `2015`

2. `Moringa School, Nairobi, Kenya`
   - Website: `https://moringaschool.com/`
   - Degree: `Diploma in Product Design (UI/UX)`
   - Year: `2018`

3. `Moringa School, Nairobi, Kenya`
   - Website: `https://moringaschool.com/`
   - Degree: `Diploma in Full Stack Software Engineering`
   - Year: `2025`

Display cleanly. Do not overemphasize school logos unless available.

## Featured Work Strategy

The portfolio should not show all 14 projects with equal weight at the top.

Feature 5 to 7 projects first:

1. PixeSci Website and Application placeholder case study.
2. Ticet EDU Design System.
3. Ticet EDU LXP.
4. Ticet EDU LXP UI/UX.
5. Sample Documentation.
6. LVBICE Website.
7. Hospital Management System UI/UX or Event Listing Page UX Logic.

PixeSci must appear first because it is Japheth's current role. Its achievements should remain clearly marked as placeholder/dummy information until the user supplies final details. Ticet EDU should remain close behind as the strongest existing detailed proof.

Then include a full project archive with filters:

- All
- Product Design
- UI Design
- UX Logic
- Web Development
- Product Management
- Design Systems
- Documentation
- Current Work Placeholder

Normalize categories:

- `User Interface Design` -> `UI Design`
- `User Experience Logic` -> `UX Logic`
- `Web Development` -> `Frontend Development`
- `Product Management` -> `Product Management`

Each project card should show:

- title
- category
- short outcome-led description
- tools
- project image
- tags as readable chips
- links if available
- `View case study` or `View details`

Each project detail modal or page should show:

- title
- category
- context
- role
- tools
- problem
- approach
- outcome
- screenshots gallery
- external links
- related skills

If the current project descriptions lack explicit `problem`, `approach`, or `outcome`, infer carefully from current descriptions and label as `Overview` rather than inventing unsupported results.

## Project Data Model

Create a typed project model similar to:

```ts
export type ProjectCategory =
  | "frontend-development"
  | "ui-design"
  | "ux-logic"
  | "product-management"
  | "design-system"
  | "current-work-placeholder"

export type Project = {
  id: string
  legacyId: number
  title: string
  category: ProjectCategory
  featured?: boolean
  priority: number
  role: string[]
  organization?: string
  period?: string
  tools: string[]
  skills: string[]
  summary: string
  context?: string
  problem?: string
  approach?: string
  outcome?: string
  links: {
    label: string
    href: string
  }[]
  images: {
    src: string
    alt: string
  }[]
}
```

Use slugs:

- `personal-portfolio`
- `pixesci-website-application`
- `ticet-edu-design-system`
- `ticet-edu-lxp-frontend`
- `ticet-edu-lxp-ui-ux`
- `ticet-edu-website`
- `ticet-edu-website-ui-ux`
- `ticet-edu-lms-ui-ux`
- `sample-product-documentation`
- `lvbice-website-ui-ux`
- `lvbice-website`
- `hospital-management-system-ui-ux`
- `infobrix-insurance-website-ui-ux`
- `event-listing-page-ux-logic`
- `world-federation-for-animals-website-ui-ux`

## Project Rewrite Guidance

Use the following rewritten summaries as starting points. Improve further during implementation if needed, but do not invent unsupported claims.

### PixeSci Website and Application

Category: Current Work Placeholder

Status:

`Placeholder/dummy case study until Japheth supplies final PixeSci achievements. Keep the project visible as current work, but label details as in progress or placeholder where appropriate.`

Summary:

`Current work as Lead Product Designer and Frontend Lead at PixeSci, shaping user-centered UI/UX and frontend implementation for the PixeSci website and application. This placeholder case study should communicate Japheth's role across product interface design, responsive React/Next.js development, design-system direction, and AI-assisted delivery with Claude and Codex.`

Context:

`PixeSci needs a polished website and application experience for a technical scientific software audience. The work requires clear UX, credible product storytelling, scalable frontend patterns, and interfaces that make complex workflows easier to understand and use.`

Approach:

`Placeholder: define user-centered flows, design interface patterns, establish early design-system and frontend component foundations, implement responsive React/Next.js UI, and use Claude and Codex to accelerate iteration, debugging, and refactoring.`

Outcome:

`Placeholder: initial PixeSci outcomes will be added later by the user. Until then, do not claim measured business, product, or user results.`

Tools:

- Claude
- Codex
- React.js
- Next.js
- TypeScript
- MUI
- DaisyUI
- shadcn/ui
- Tailwind CSS
- Figma

Links:

- `https://pixesci.com/`

### Personal Portfolio

Category: Frontend Development

Summary:

`A personal portfolio built to present product strategy, UI/UX design, product management, and frontend engineering work in one cohesive professional narrative. The project demonstrates responsive layout design, component composition, image-heavy portfolio presentation, and personal brand development.`

Context:

`The portfolio needed to function as both a career profile and work-sample hub, making it easy for founders, hiring managers, and collaborators to understand Japheth's hybrid product, design, and frontend capabilities.`

Tools:

- GitHub
- Next.js
- TypeScript
- Material UI
- Tailwind CSS
- HTML
- CSS

Links:

- `https://japheth-oruko-portfolio.vercel.app/`
- `https://github.com/OJ254/japheth-oruko-portfolio`

### Ticet EDU Design System

Category: Design System

Summary:

`A structured Figma design kit for Ticet EDU's web platform, covering reusable components, responsive layouts, typography, color palettes, icons, interaction states, and product patterns for learning, content discovery, community, and creator workflows.`

Context:

`Ticet EDU needed a scalable UI foundation that could support rapid product development while keeping the platform visually consistent across learner, educator, and creator experiences.`

Approach:

`Built a modular component library, documented interactive states, aligned spacing and typography rules, and prepared handoff-ready assets for design and engineering collaboration.`

Outcome:

`Created the foundation for faster prototyping, more consistent implementation, and a more cohesive learning platform experience.`

Tools:

- Figma

### Ticet EDU LXP Frontend

Category: Frontend Development

Summary:

`A Next.js and TypeScript frontend for the Ticet EDU Learning Experience Platform, focused on responsive interfaces, scalable component architecture, API integration, state management, and polished implementation of complex learning workflows.`

Context:

`The platform needed a frontend that could support dynamic courses, users, learning resources, dashboards, onboarding, and content-driven experiences while remaining maintainable during MVP development.`

Approach:

`Implemented responsive UI with Tailwind CSS and Material UI, managed application state with Redux Toolkit, integrated backend APIs, and translated high-fidelity Figma designs into reusable frontend components.`

Outcome:

`Delivered core frontend foundations for a modern learning platform with improved scalability, predictable state management, and stronger design-to-code alignment.`

Tools:

- GitHub
- Next.js
- TypeScript
- Redux Toolkit
- Material UI
- Tailwind CSS
- HTML
- CSS

Link:

- `https://ticetedu.com/`

### Ticet EDU LXP UI/UX

Category: UI Design

Summary:

`A personalized learning experience design for Ticet EDU's LXP, covering onboarding, dashboards, content discovery, analytics, creator tools, responsive layouts, and interactive learning flows.`

Context:

`The product required an interface that could make personalized and collaborative learning feel clear, engaging, and accessible across devices.`

Approach:

`Designed modular Figma components, mapped core user journeys, built responsive flows, defined visual hierarchy, and prepared prototypes for stakeholder review and developer handoff.`

Outcome:

`Established a scalable design direction for a modern EdTech platform with reusable patterns and clearer learner navigation.`

Tools:

- Figma

### Ticet EDU Website

Category: Frontend Development

Summary:

`A responsive marketing website for Ticet EDU, built with Vite, JavaScript, Tailwind CSS, HTML, and CSS to communicate the platform's collaborative learning mission and provide a clean public-facing brand experience.`

Context:

`The website needed to introduce Ticet EDU clearly, support brand credibility, and provide a fast, accessible experience for educators, learners, and stakeholders.`

Approach:

`Built responsive sections, reusable components, and a clean front-end structure aligned with the visual direction from the design process.`

Tools:

- GitHub
- Vite.js
- JavaScript
- Tailwind CSS
- HTML
- CSS

Links:

- `https://ticet-edu-website.vercel.app/`
- `https://github.com/OJ254/ticet-edu-website`

### Ticet EDU Website UI/UX

Category: UI Design

Summary:

`A Figma design and prototype for the Ticet EDU website, including wireframes, high-fidelity mockups, responsive layouts, reusable UI components, animated transitions, and stakeholder-ready prototypes.`

Context:

`The public website needed to balance modern education branding, clear navigation, accessibility, and scalable content sections.`

Approach:

`Created a component-based design system, mapped the landing-page journey, defined responsive behavior, and prepared interactive prototypes to align stakeholders before development.`

Links:

- `https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=105-985`
- `https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6210-36526&t=DZedl3Y68or48MTT-1`

### Ticet EDU LMS UI/UX

Category: UI Design

Summary:

`A learner-centered LMS interface designed in Figma, covering onboarding, course browsing, progress tracking, feedback flows, reusable components, and responsive layouts.`

Context:

`The LMS needed to make educational content easier to browse, track, and interact with while maintaining a consistent and scalable visual system.`

Approach:

`Built wireframes, high-fidelity screens, and interactive prototypes with reusable components for navigation, cards, forms, and learning workflows.`

Tools:

- Figma

### Sample Product Documentation

Category: Product Management

Summary:

`A product documentation sample showing how Confluence and Jira can turn subscription packages, feature requirements, epics, user stories, tasks, and acceptance criteria into a transparent delivery system.`

Context:

`Product and engineering teams need shared documentation that clarifies what should be built, why it matters, and how work moves through planning and delivery.`

Approach:

`Structured Confluence pages for product specifications and Jira workflows for epics, stories, tasks, bugs, traceability, and sprint planning.`

Outcome:

`Demonstrates practical product-management discipline: clear requirements, user-centered stories, backlog visibility, and collaborative delivery rituals.`

Tools:

- Atlassian
- Jira
- Confluence

### LVBICE Website UI/UX

Category: UI Design

Summary:

`A responsive Figma website design for LVBICE, focused on institutional identity, accessible content structure, clear navigation, professional visual hierarchy, and reusable interface components.`

Context:

`The institution needed a modern public website design that could communicate credibility and make information easier to navigate across devices.`

Approach:

`Created wireframes, high-fidelity screens, responsive layouts, reusable cards and forms, and interactive prototypes for stakeholder review and development handoff.`

Links:

- `https://www.figma.com/design/tlz7RVpv2Rr6tGwiupmEHc/LVBIWCE---Website?node-id=5598-7991&t=kesJxF2mY6cn9tez-1`

### LVBICE Website

Category: Frontend Development

Summary:

`A modern institutional website built with Next.js, TypeScript, Material UI, Tailwind CSS, HTML, and CSS, focused on responsive layouts, accessible navigation, performance, and professional brand presentation.`

Context:

`The website needed to translate an institutional identity into a clear, responsive digital presence.`

Approach:

`Built structured layouts, reusable components, and a responsive front-end architecture aligned with the institution's design direction.`

Links:

- `https://www.lvbice.com/`
- `https://github.com/OJ254/lvbice-website`

### Hospital Management System UI/UX

Category: UI Design

Summary:

`A Figma prototype for a hospital management system designed to help clinical teams access patient records, medical history, vitals, medication schedules, and SOAP notes through a clear dashboard experience.`

Context:

`Healthcare workflows require speed, clarity, and low cognitive load. The design needed to support medical staff with role-aware navigation and data-heavy screens that remain usable under pressure.`

Approach:

`Designed authentication, role-based access patterns, patient profiles, dashboard views, clinical documentation surfaces, and responsive layouts with accessibility and data clarity in mind.`

Links:

- `https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=105-985`
- `https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=8179-2388&t=FPCj8UyIeFdOkOJr-1`

### Infobrix Insurance Website UI/UX

Category: UI Design

Summary:

`A high-fidelity Figma prototype for an insurance technology platform with intentionally designed light and dark modes, clear content hierarchy, reusable components, analytics-style visuals, integrations, and mobile app presentation.`

Context:

`The design needed to make complex insurance technology content feel understandable, credible, and modern across both light and dark themes.`

Approach:

`Structured product sections, feature panels, data visuals, theme variants, and reusable interface components to support a polished enterprise-style presentation.`

Links:

- `https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23368`
- `https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23582&t=DZedl3Y68or48MTT-1`

### Event Listing Page UX Logic

Category: UX Logic

Summary:

`A UX logic exercise for an event discovery platform, focused on reducing cognitive overload through clear event-card hierarchy, featured events, searchable listings, status badges, and scalable component behavior.`

Problem:

`As event volume grows, users can miss relevant events when layouts are hard to scan, metadata is inconsistent, or status cues are hidden.`

Approach:

`Designed reusable event cards with banner imagery, title, short description, grouped metadata, badges for event state, a featured event layout, responsive listing grids, search/filter affordances, and empty-state behavior.`

Reasoning:

`The solution prioritizes decision speed, pattern recognition, modular reuse, and immediate clarity around relevance, location, mode, cost, and registration status.`

Links:

- `https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=4-6598`
- `https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=9096-21636&t=FPCj8UyIeFdOkOJr-1`

### World Federation for Animals Website UI/UX

Category: UI Design

Summary:

`A Figma website design for a global advocacy organization, using accessible layouts, light and dark themes, clear content hierarchy, storytelling sections, and reusable responsive components.`

Context:

`The website needed to communicate advocacy, impact, and educational resources through an emotionally resonant but professional interface.`

Approach:

`Designed homepage sections, navigation, advocacy updates, impact areas, educational content blocks, responsive components, and theme variations.`

Links:

- `https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=6386-23676&t=FPCj8UyIeFdOkOJr-1`

## Visual Design System

Use the inspiration site's precision, but make the portfolio distinct.

Design principles:

- line-based structure
- compact information density
- strong typography
- crisp borders
- restrained color
- subtle depth
- high-contrast readable surfaces
- profile-first composition
- proof-led sections
- project screenshots treated as real work evidence

Recommended palette:

- background: near-white technical neutral
- foreground: graphite or near-black
- muted text: cool gray
- borders: low-contrast neutral hairlines
- primary accent: focused cyan, blue, or teal
- secondary accent: restrained green for availability/proof
- warning/accent: limited amber for highlights
- dark mode: near-black background with neutral border and restrained accent

Avoid:

- purple-dominated palette
- blue-purple gradient-heavy design
- beige/tan editorial palette
- dark slate everything
- decorative glow blobs
- bokeh backgrounds
- oversized radius on everything

Typography:

- Use installed fonts unless adding a font is justified and approved.
- If adopting inspiration patterns, consider a clean sans plus a small monospace accent.
- Do not use viewport-width font scaling.
- Do not use negative letter spacing.
- Use big type only in true hero/profile contexts.
- Use compact type inside panels, timelines, chips, and cards.

Spacing:

- Use a centered content width around `768px` to `960px` for profile structure, or up to `1120px` if the design needs wider project galleries.
- Use full-width background bands only when needed.
- Avoid nested cards.
- Keep repeated panels consistent.
- Use stable aspect ratios for screenshots and galleries.

## Component Requirements

Build or adapt the following primitives:

- `Panel`
- `PanelHeader`
- `PanelTitle`
- `PanelContent`
- `Separator`
- `ProfileHeader`
- `ProfileCover`
- `OverviewGrid`
- `SocialLinks`
- `MetricGrid`
- `CapabilityCard`
- `ExperienceTimeline`
- `ExperienceRole`
- `ProjectCard`
- `ProjectGallery`
- `ProjectDetail`
- `ProjectFilter`
- `TechStack`
- `EducationTimeline`
- `ResumeActions`
- `ContactPanel`
- `ThemeToggle`
- `MobileNav`
- `DesktopNav`
- `CopyButton`
- `ExternalLink`

Client components should be limited to:

- role text flip
- theme toggle
- mobile navigation
- project filters
- image gallery modal/carousel
- copy-to-clipboard
- local time
- contact form if retained

Everything else should be server-rendered where possible.

## Header And Navigation

Build a clean top navigation inspired by the reference project.

Required nav links:

- About
- Work
- Experience
- Stack
- Contact

Required nav actions:

- Resume
- Book a call
- Theme toggle if theme switching is supported

Mobile:

- Use a sheet/drawer or compact menu.
- Keep actions accessible.
- Do not hide contact paths.

Desktop:

- Sticky or near-sticky navigation is acceptable.
- Avoid overly tall nav bars.
- Use scrollspy only if implemented cleanly and accessibly.

## Project Gallery Requirements

The current project screenshot library is a major asset. Use it better than the current site.

Requirements:

- Show a strong preview image on each card.
- Use alt text specific to project title and screenshot number.
- For project details, show a gallery with thumbnails or carousel controls.
- Keep keyboard navigation for gallery controls.
- Avoid loading all 140 full-size images above the fold.
- Use lazy loading where appropriate.
- Use `next/image` with stable dimensions.
- Handle missing images gracefully.
- Do not assume every project has exactly 10 images unless verified.

Suggested implementation:

- Generate image arrays from known paths in project data.
- Store only images that exist.
- Use `public/assets/images/projects/id${legacyId}/${n}.jpg`.
- Use first image as card thumbnail unless project `id13` intentionally uses image `2.jpg`.

## Contact Section Requirements

Primary contact section should include:

- email link
- phone link
- Calendly link
- LinkedIn link
- GitHub link
- resume download/view

Suggested title:

`Have a product that needs clearer UX, sharper execution, or a stronger bridge between design and code?`

Suggested supporting copy:

`I am available for full-time and contract work with startups, product teams, and organizations that need practical product design, UX documentation, and frontend implementation support.`

CTA labels:

- `Book a call`
- `Email Japheth`
- `Download resume`
- `View LinkedIn`

If contact form remains:

- Keep fields: name, email, phone optional, message.
- Keep validation.
- Keep accessible status messages.
- Keep direct email and Calendly as backup.
- Do not make form the only contact method.

## Resume Handling

The resume PDF must remain accessible:

- `/documents/japheth-oruko_resume.pdf`

Offer:

- `View resume`
- `Download resume`

If building a PDF modal:

- Make it accessible.
- Make it responsive.
- Allow download.
- Allow close with Escape.
- Do not trap users in an unreadable mobile PDF viewer.

Simpler acceptable approach:

- Link directly to the PDF in a new tab.
- Provide a download attribute where appropriate.

## SEO Requirements

Add or improve:

- `metadata` in `src/app/layout.tsx`
- title template
- description
- keywords
- Open Graph image handling
- Twitter card metadata
- canonical URL if known
- robots route
- sitemap route
- `ProfilePage` JSON-LD
- `Person` JSON-LD

Metadata copy:

Title:

`Japheth Oruko | Lead Product Designer, Frontend Lead & React/Next.js Developer`

Description:

`Portfolio of Japheth Oruko, a Nairobi-based Lead Product Designer and Frontend Lead helping teams design, document, and ship user-centered digital products with React, Next.js, modern UI systems, Claude, and Codex.`

Keywords:

- Japheth Oruko
- Product Designer Nairobi
- UI UX Designer Kenya
- Product Manager
- Frontend Developer
- Frontend Lead
- Next.js Developer
- React Developer
- Claude
- Codex
- MUI
- DaisyUI
- shadcn/ui
- Tailwind CSS
- Figma Designer
- Design Systems
- Startup Product Design
- EdTech Product Design

JSON-LD should identify:

- name
- image
- jobTitle
- email
- telephone
- address
- url
- sameAs social links
- knowsAbout skills

Do not include false awards, alumni claims beyond listed education, or employment details unsupported by current content.

## Accessibility And UX Quality

Accessibility is not optional.

Requirements:

- one logical `h1`
- headings in order
- keyboard reachable controls
- visible focus states
- semantic landmarks
- alt text for content images
- contrast suitable for WCAG AA
- reduced-motion support
- no hover-only content
- no text clipping
- no horizontal overflow
- no tap targets below practical size on mobile
- labels for form controls
- descriptive link text
- `aria-label` only when visible text is insufficient

Modal/gallery:

- focus should move into modal
- Escape closes modal
- background scroll should be controlled
- close button should be visible and labeled
- image navigation buttons should be labeled

## Responsive Requirements

Verify manually at:

- 360x800
- 390x844
- 768x1024
- 1024x768
- 1280x800
- 1440x900

Fix:

- overlapping text
- broken nav
- gallery overflow
- cards with clipped titles
- buttons with truncated labels
- project chips wrapping badly
- hero image crushing text
- sections with inconsistent spacing
- modals too tall for viewport
- empty visual areas

## Performance Requirements

- Avoid shipping unnecessary client JavaScript.
- Avoid making every section a client component.
- Optimize images with `next/image`.
- Avoid loading all gallery images eagerly.
- Keep animations light.
- Avoid layout shift.
- Do not add heavy animation libraries unless approved and genuinely useful.
- Keep web vitals in mind.
- Keep bundle size reasonable.

## File Organization Target

Recommended final structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
    api/
      contact/
        route.ts
  components/
    site/
      site-header.tsx
      site-footer.tsx
      mobile-nav.tsx
      theme-toggle.tsx
    portfolio/
      about.tsx
      capabilities.tsx
      contact.tsx
      education.tsx
      experience.tsx
      metrics.tsx
      overview.tsx
      profile-cover.tsx
      profile-header.tsx
      project-card.tsx
      project-detail.tsx
      project-filter.tsx
      project-gallery.tsx
      projects.tsx
      tech-stack.tsx
      value-proposition.tsx
    ui/
      button.tsx
      panel.tsx
      separator.tsx
      badge.tsx
      external-link.tsx
      copy-button.tsx
  data/
    user.ts
    social-links.ts
    experience.ts
    projects.ts
    skills.ts
    education.ts
    services.ts
    metrics.ts
  lib/
    utils.ts
    seo.ts
  types/
    portfolio.ts
```

Keep existing icon components if useful:

- `src/components/ui/dataDisplay/icons`
- `src/components/ui/dataDisplay/icons/logos`

Do not keep old page sections if they conflict with the new architecture.

## Suggested Data Files

### `src/data/user.ts`

Should include identity, links, contact, bio, and availability.

### `src/data/social-links.ts`

Should include social label, URL, icon key, and priority.

### `src/data/experience.ts`

Should include PixeSci as the current company with placeholder details, followed by Ticet EDU as previous detailed proof with nested positions.

### `src/data/projects.ts`

Should include normalized project entries and image galleries.

### `src/data/skills.ts`

Should include grouped stack and capability categories.

### `src/data/education.ts`

Should include schools and degree details.

### `src/data/metrics.ts`

Should include proof metrics and caveat/source text.

## The Homepage Narrative

The homepage should flow like this:

1. `ProfileHeader`: identity, positioning, image, role rotation, contact actions.
2. `Overview`: location, roles, availability, time, contact links.
3. `ValueProposition`: why a hybrid product/design/frontend profile matters.
4. `Metrics`: current PixeSci placeholder plus detailed prior proof from Ticet EDU.
5. `FeaturedProjects`: strongest work, not all projects.
6. `Capabilities`: what he can help with.
7. `Experience`: current PixeSci role first, then previous Ticet EDU timeline with three roles.
8. `Process`: how he works from discovery to shipped UI.
9. `TechStack`: grouped tools and technologies.
10. `Education`: formal background.
11. `ProjectArchive`: all projects with filters and details.
12. `Contact`: conversion close.

## Product Process Section

Add a section showing how Japheth works.

Title:

`From product ambiguity to shipped interface.`

Steps:

1. `Clarify the product problem`
   - research, business goals, users, constraints, success criteria
2. `Map the experience`
   - journeys, flows, information architecture, edge cases
3. `Design the system`
   - wireframes, high-fidelity UI, reusable components, theme behavior
4. `Document the build`
   - user stories, acceptance criteria, Jira/Confluence specs
5. `Implement and iterate`
   - responsive frontend, API integration, QA feedback, usability improvements

Make this section useful for founders and product leaders. It should show that Japheth can reduce ambiguity, not just produce screens.

## Engagement Model Section

The current portfolio includes pricing. Reframe it carefully.

Do not make the portfolio feel like a commodity rate card above the fold.

If keeping pricing, put it near the bottom and frame as availability/engagement options:

- `Contract projects`
- `Fractional product/design support`
- `Full-time roles`

Current rate content:

- Freelance: `$20-$60 per hour depending on project complexity`
- Full-time: `$2,000-$5,000 per month depending on role and project`

Consider making pricing optional or less prominent:

`Available for contract and full-time opportunities. Rates and scope depend on project complexity, role expectations, and engagement length.`

If showing exact ranges, add context and avoid making them the main brand message.

## Theme Requirements

If implementing theme support:

- Use a reliable theme provider.
- Preserve system preference if feasible.
- Avoid hydration mismatch.
- Make both themes intentional.
- Ensure screenshots and borders look good in both themes.
- Store preference in local storage only if implemented cleanly.

If not implementing theme support in the first pass:

- Build an excellent default light theme.
- Do not leave a broken toggle.

## Motion Requirements

Motion should be subtle and useful.

Allowed:

- role text flip
- gentle section reveal
- small hover transitions
- active nav indicator
- gallery transitions
- copy button feedback

Avoid:

- heavy parallax
- random animated blobs
- constant motion
- motion that delays reading
- interactions that work only on hover

Respect `prefers-reduced-motion`.

## Implementation Checklist

Phase 1: Grounding

- Read `AGENTS.md`.
- Check git status.
- Inspect current content.
- Inspect inspiration project.
- Confirm dependency plan.
- Create data model plan.

Phase 2: Data Extraction

- Extract user data.
- Extract social links.
- Extract education.
- Extract experience.
- Extract capabilities.
- Extract metrics.
- Extract projects.
- Normalize project categories.
- Build image gallery arrays.

Phase 3: Design Foundation

- Update global CSS tokens.
- Add utility helpers.
- Build panel primitives.
- Build button/link/chip primitives.
- Build responsive shell.
- Build accessible focus styles.

Phase 4: Page Sections

- Build profile cover/header.
- Build overview grid.
- Build value proposition.
- Build metrics.
- Build featured projects.
- Build capabilities.
- Build experience timeline.
- Build process.
- Build tech stack.
- Build education.
- Build project archive.
- Build contact/resume section.

Phase 5: Interactivity

- Build mobile nav.
- Build theme toggle if included.
- Build role text flip.
- Build project filter.
- Build project detail modal or route.
- Build screenshot gallery.
- Build copy buttons.
- Keep client components narrow.

Phase 6: SEO

- Update metadata.
- Add JSON-LD.
- Add sitemap.
- Add robots.
- Verify titles and descriptions.

Phase 7: QA

- Run lint.
- Run build.
- Start dev server.
- Inspect desktop.
- Inspect tablet.
- Inspect mobile.
- Fix visual issues.
- Verify links.
- Verify resume.
- Verify images.
- Verify contact paths.

## Expected Final Quality Bar

The final site should feel better than the current portfolio in these ways:

- clearer positioning
- stronger first impression
- more credible startup/product story
- cleaner technical implementation
- data-driven content
- stronger use of project screenshots
- more concise copy
- better mobile layout
- better accessibility
- better SEO
- more refined visual system
- less dependency on generic Material UI styling
- stronger conversion paths

## Verification Commands

Run:

```bash
npm run lint
npm run build
```

If a typecheck script exists or is added:

```bash
npm run typecheck
```

If formatting scripts exist:

```bash
npm run format:check
```

Start local server:

```bash
npm run dev
```

Then inspect:

- homepage first viewport
- work section
- project detail/gallery
- mobile navigation
- contact section
- resume link
- dark/light theme if included

## Final Handoff Requirements

When implementation is complete, report:

- changed files
- major architectural changes
- sections implemented
- dependencies added, if any
- verification commands and results
- any unresolved issues
- any assets or copy that still need user input
- local dev URL if server is running

Do not end with a vague “let me know if you want changes.” Provide concrete next steps only if they are genuinely useful.

## Implementation Warning

This rebuild should be ambitious, but it should still be shippable. Do not create an over-engineered component registry or content platform unless it directly improves Japheth's portfolio. The inspiration project is a guide to quality and structure, not a requirement to copy every feature.

The goal is a world-class portfolio for Japheth Oruko: focused, polished, credible, fast, accessible, and strong enough to speak to startup founders, product leaders, design managers, and engineering teams.
