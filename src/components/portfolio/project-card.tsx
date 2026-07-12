import Image from 'next/image';
import type React from 'react';

import { Badge } from '@/components/ui/badge';
import { projectCategoryLabels } from '@/data/projects';
import type { Project } from '@/types/portfolio';

export function ProjectCard({
  project,
  action,
}: {
  project: Project;
  action?: React.ReactNode;
}) {
  const image = project.images[0];

  return (
    <article className='border-line bg-surface h-full overflow-hidden rounded-md border'>
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
            <p className='text-muted-text mt-2 line-clamp-4 text-sm leading-6'>
              {project.summary}
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {project.skills.slice(0, 4).map(skill => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>

        {action}
      </div>
    </article>
  );
}
