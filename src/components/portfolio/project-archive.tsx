'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { buttonClass } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { projectCategoryLabels } from '@/data/projects';
import { cn } from '@/lib/utils';
import type { Project, ProjectCategory } from '@/types/portfolio';

import { ProjectCard } from './project-card';

const filters: Array<ProjectCategory | 'all'> = [
  'all',
  'design-system',
  'frontend-development',
  'ui-design',
  'ux-logic',
  'product-management',
];

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter(project => project.category === filter)),
    [filter, projects]
  );

  return (
    <div className="space-y-5">
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Project filters">
        {filters.map(item => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            className={cn(
              'min-h-10 shrink-0 rounded-full border px-3 text-sm font-semibold',
              filter === item ? 'border-foreground bg-foreground text-background' : 'border-line bg-surface text-muted-text hover:text-foreground'
            )}
            onClick={() => setFilter(item)}
          >
            {projectCategoryLabels[item]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map(project => (
          <div key={project.id} id={`project-${project.id}`}>
            <ProjectCard
              project={project}
              action={
                <button type="button" className={buttonClass('secondary')} onClick={() => setSelected(project)}>
                  View details
                </button>
              }
            />
          </div>
        ))}
      </div>

      {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const image = project.images[index] ?? project.images[0];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setIndex(current => (current + 1) % project.images.length);
      if (event.key === 'ArrowLeft') setIndex(current => (current === 0 ? project.images.length - 1 : current - 1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project.images.length]);

  return (
    <Dialog open onOpenChange={open => !open && onClose()}>
      <DialogContent className="max-h-[94vh] overflow-y-auto p-0 sm:max-w-6xl">
        <DialogHeader className="sticky top-0 z-10 gap-1 border-b border-line bg-background/95 p-4 pr-14 backdrop-blur">
            <p className="font-mono text-xs uppercase text-muted-text">{projectCategoryLabels[project.category]}</p>
            <DialogTitle className="text-lg">{project.title}</DialogTitle>
            <DialogDescription className="sr-only">
              Project case study details, screenshots, tools, skills, and external links.
            </DialogDescription>
        </DialogHeader>

        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-line lg:border-b-0 lg:border-r">
            <div className="relative aspect-[16/10] bg-surface">
              {image && <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-contain" />}
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-line p-3">
              <button type="button" className={buttonClass('secondary')} onClick={() => setIndex(current => (current === 0 ? project.images.length - 1 : current - 1))}>
                Previous
              </button>
              <p className="font-mono text-xs text-muted-text">{index + 1} / {project.images.length}</p>
              <button type="button" className={buttonClass('secondary')} onClick={() => setIndex(current => (current + 1) % project.images.length)}>
                Next
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2 p-3 sm:grid-cols-10">
              {project.images.map((item, itemIndex) => (
                <button
                  key={item.src}
                  type="button"
                  className={cn('relative aspect-video overflow-hidden rounded border', itemIndex === index ? 'border-brand' : 'border-line')}
                  onClick={() => setIndex(itemIndex)}
                  aria-label={`Show screenshot ${itemIndex + 1}`}
                >
                  <Image src={item.src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5 p-4 sm:p-6">
            {project.note && <p className="rounded-md border border-amber-300/60 bg-amber-100/50 p-3 text-sm leading-6 text-amber-950 dark:bg-amber-300/10 dark:text-amber-100">{project.note}</p>}
            <p className="text-sm leading-7 text-muted-text">{project.summary}</p>
            {[
              ['Context', project.context],
              ['Problem', project.problem],
              ['Approach', project.approach],
              ['Outcome', project.outcome],
            ].map(([label, body]) => body && (
              <section key={label}>
                <h3 className="font-mono text-xs uppercase text-muted-text">{label}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-text">{body}</p>
              </section>
            ))}
            <section>
              <h3 className="font-mono text-xs uppercase text-muted-text">Tools and skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {[...project.tools, ...project.skills].map(item => <Badge key={item}>{item}</Badge>)}
              </div>
            </section>
            {project.links.length > 0 && (
              <section>
                <h3 className="font-mono text-xs uppercase text-muted-text">Links</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.links.map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={buttonClass('secondary')}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
