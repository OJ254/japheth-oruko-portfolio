import { ArrowRight, Boxes, Code2, Compass, IterationCcw, Route } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Panel, PanelContent, PanelHeader, PanelTitle, SectionKicker } from '@/components/ui/panel';
import { processSignals, productProcess } from '@/data/process';
import { cn } from '@/lib/utils';
import type { ProductProcessPhase } from '@/types/portfolio';

const phaseIcons = {
  discover: Compass,
  define: Route,
  design: Boxes,
  build: Code2,
  improve: IterationCcw,
} as const;

export function ProductProcessSection({
  id = 'process',
  expanded = false,
}: {
  id?: string;
  expanded?: boolean;
}) {
  const visiblePhases = expanded ? productProcess : productProcess.slice(0, 5);

  return (
    <Panel id={id}>
      <PanelHeader>
        <SectionKicker>Process</SectionKicker>
        <PanelTitle>From Research to Release.</PanelTitle>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-text">
          I do not treat product work as a screen-production exercise. I move from market context and user understanding into product structure, interface systems, implementation, testing, and ongoing improvement.
        </p>
      </PanelHeader>
      <PanelContent className="space-y-6">
        <div className="grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-md border border-line bg-surface p-4 sm:p-5">
            <p className="font-mono text-xs uppercase text-muted-text">Operating principles</p>
            <h3 className="mt-2 text-xl font-semibold">The product has to make sense before the interface can feel right.</h3>
            <p className="mt-3 text-sm leading-7 text-muted-text">
              My process helps teams make decisions in the right order: understand the opportunity, define what matters, design the system, build the product behavior, then improve it with feedback.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {processSignals.map(signal => (
                <Badge key={signal}>{signal}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-line bg-surface p-4 sm:p-5">
            <p className="font-mono text-xs uppercase text-muted-text">Journey map</p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {productProcess.map((phase, index) => {
                const Icon = phaseIcons[phase.id as keyof typeof phaseIcons];

                return (
                  <div key={phase.id} className="relative">
                    <div className="grid aspect-square place-items-center rounded-md border border-line bg-background">
                      <Icon className="size-5 text-brand" aria-hidden="true" />
                    </div>
                    {index < productProcess.length - 1 && (
                      <ArrowRight className="absolute left-[calc(100%+2px)] top-1/2 z-10 hidden size-4 -translate-y-1/2 text-muted-text lg:block" aria-hidden="true" />
                    )}
                    <p className="mt-2 text-center font-mono text-[10px] uppercase text-muted-text">{phase.phase}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 grid gap-2">
              {productProcess.map(phase => (
                <div key={phase.id} className="grid grid-cols-[48px_1fr] gap-3 rounded-md border border-line bg-background p-3">
                  <span className="font-mono text-xs text-brand">{phase.phase}</span>
                  <span className="text-sm font-medium">{phase.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {visiblePhases.map((phase, index) => (
            <ProcessPhaseCard key={phase.id} phase={phase} index={index} expanded={expanded} />
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}

function ProcessPhaseCard({
  phase,
  index,
  expanded,
}: {
  phase: ProductProcessPhase;
  index: number;
  expanded: boolean;
}) {
  const Icon = phaseIcons[phase.id as keyof typeof phaseIcons];

  return (
    <article className="relative overflow-hidden rounded-md border border-line bg-surface">
      <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
        <div className={cn('border-b border-line p-4 lg:border-b-0 lg:border-r', index % 2 === 0 ? 'bg-brand-soft/50' : 'bg-background')}>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md border border-line bg-background">
              <Icon className="size-5 text-brand" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs uppercase text-muted-text">Phase {phase.phase}</p>
              <p className="text-sm font-semibold">{phase.focus.split(',')[0]}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-text">{phase.proof}</p>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-text">{phase.summary}</p>
            </div>
            <Badge>{phase.focus}</Badge>
          </div>

          <div className={cn('mt-5 grid gap-4', expanded ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-2')}>
            <div>
              <h4 className="font-mono text-xs uppercase text-muted-text">What happens here</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-text">
                {phase.activities.map(activity => (
                  <li key={activity} className="grid grid-cols-[16px_1fr] gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase text-muted-text">Useful outputs</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {phase.outputs.map(output => (
                  <Badge key={output}>{output}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
