import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  SectionKicker,
} from '@/components/ui/panel';
import { projects } from '@/data/projects';

import { ProjectArchive } from './project-archive';

export function ProjectArchiveSection() {
  return (
    <Panel id='work'>
      <PanelHeader>
        <SectionKicker>Work</SectionKicker>
        <PanelTitle>
          Selected work spanning design systems, product design, frontend
          development, and product management.
        </PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ProjectArchive projects={projects} />
      </PanelContent>
    </Panel>
  );
}
