import Image from 'next/image';
import type { ComponentType, SVGProps } from 'react';

import {
  Atlassian,
  Claude,
  Codex,
  Confluence,
  Css,
  Docker,
  Figma,
  GitHub,
  Html,
  JavaScript,
  Jira,
  MaterialUI,
  NestJS,
  NextJS,
  PostgreSQL,
  Prisma,
  ReactLogo,
  Redux,
  ShadcnUI,
  Tailwind,
  Typescript,
  ViteJS,
} from '@/components/ui/dataDisplay/icons/logos';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { projectCategoryLabels } from '@/data/projects';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/portfolio';

type LogoIcon = ComponentType<SVGProps<SVGSVGElement>>;

const techIcons: Record<string, LogoIcon> = {
  Atlassian: Atlassian,
  CSS: Css,
  Claude: Claude,
  Codex: Codex,
  Confluence: Confluence,
  Docker: Docker,
  Figma: Figma,
  GitHub: GitHub,
  HTML: Html,
  JavaScript: JavaScript,
  Jira: Jira,
  'Material UI': MaterialUI,
  NestJS: NestJS,
  'Next.js': NextJS,
  PostgreSQL: PostgreSQL,
  Prisma: Prisma,
  'React.js': ReactLogo,
  'Redux Toolkit': Redux,
  'RTK Query': Redux,
  'Tailwind CSS': Tailwind,
  TypeScript: Typescript,
  'Vite.js': ViteJS,
  'shadcn-style UI primitives': ShadcnUI,
  'shadcn/ui': ShadcnUI,
};

function getTechStack(tools: string[]) {
  const seen = new Set<LogoIcon>();
  const stack: { name: string; Icon: LogoIcon }[] = [];

  for (const tool of tools) {
    const Icon = techIcons[tool];
    if (Icon && !seen.has(Icon)) {
      seen.add(Icon);
      stack.push({ name: tool, Icon });
    }
  }

  return stack;
}

export function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect?: () => void;
}) {
  const image = project.images[0];
  const techStack = getTechStack(project.tools);

  return (
    <article
      className={cn(
        'border-line bg-surface h-full overflow-hidden rounded-md border transition-colors',
        onSelect && 'hover:bg-muted cursor-pointer'
      )}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={
        onSelect
          ? event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelect();
              }
            }
          : undefined
      }
    >
      <div className='border-line bg-background relative aspect-[16/10] border-b'>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes='(min-width: 768px) 50vw, 100vw'
            className='object-cover object-left-top'
          />
        )}
      </div>
      <div className='space-y-4 p-4'>
        <div className='space-y-2'>
          <div>
            <p className='text-muted-text font-mono text-xs uppercase'>
              {projectCategoryLabels[project.category]}
            </p>
            <h3 className='mt-1 text-lg leading-7 font-semibold'>
              {project.title}
            </h3>
            <p className='text-muted-text mt-2 line-clamp-3 text-sm leading-6'>
              {project.summary}
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {techStack.map(({ name, Icon }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <span className='border-line bg-background grid size-8 place-items-center rounded-md border'>
                    <span className='sr-only'>{name}</span>
                    <Icon className='size-4' aria-hidden='true' />
                  </span>
                </TooltipTrigger>
                <TooltipContent>{name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
