import Image from 'next/image';
import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { projectCategoryLabels } from '@/data/projects';
import type { Project } from '@/types/portfolio';

export function ProjectCard({ project, action }: { project: Project; action?: React.ReactNode }) {
  const image = project.images[0];

  return (
    <article className="overflow-hidden rounded-md border border-line bg-surface">
      <div className="relative aspect-[16/10] border-b border-line bg-background">
        {image && <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-left-top" />}
      </div>
      <div className="space-y-4 p-4">
        <div>
          <p className="font-mono text-xs uppercase text-muted-text">{projectCategoryLabels[project.category]}</p>
          <h3 className="mt-1 text-lg font-semibold leading-7">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-text">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.slice(0, 4).map(skill => <Badge key={skill}>{skill}</Badge>)}
        </div>
        {action}
      </div>
    </article>
  );
}
