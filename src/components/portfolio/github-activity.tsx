'use client';

import { useEffect, useMemo, useState } from 'react';

import { Panel, PanelContent } from '@/components/ui/panel';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { USER } from '@/data/user';
import { cn } from '@/lib/utils';

type Activity = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  contributions?: Activity[];
};

const API_BASE =
  process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ??
  'https://github-contributions-api.jogruber.de';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const SKELETON_END_DATE = '2026-12-31';

export function GitHubActivity() {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function loadActivity() {
      try {
        setStatus('loading');
        const response = await fetch(`${API_BASE}/v4/${USER.username}?y=last`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`GitHub activity request failed with ${response.status}`);
        }

        const data = (await response.json()) as ContributionsResponse;
        setActivity(data.contributions ?? []);
        setStatus('ready');
      } catch {
        if (!controller.signal.aborted) {
          setStatus('error');
        }
      }
    }

    loadActivity();

    return () => controller.abort();
  }, []);

  const graph = useMemo(() => buildContributionGraph(activity), [activity]);
  const total = activity.reduce((sum, item) => sum + item.count, 0);
  const yearLabel = graph.yearLabel;

  return (
    <Panel id="github-activity">
      <PanelContent className="space-y-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="font-mono text-xs uppercase text-muted-text">GitHub activity</p>
            <h2 className="mt-2 text-2xl font-semibold text-balance">
              Recent engineering activity across public GitHub work.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-text">
              A live view of public contribution activity from my GitHub account, showing the consistency behind my frontend, product, and AI-assisted development practice.
            </p>
          </div>
          <div className="rounded-md border border-line bg-surface p-4">
            <p className="font-mono text-xs uppercase text-muted-text">Last year</p>
            <p className="mt-2 text-3xl font-semibold">
              {status === 'ready' ? total.toLocaleString('en') : 'Loading'}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-text">
              Contributions in {yearLabel} on{' '}
              <a className="font-semibold text-brand hover:underline" href={USER.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>

        <div className="rounded-md border border-line bg-surface p-4">
          {status === 'error' ? (
            <div className="text-sm leading-7 text-muted-text">
              GitHub activity could not be loaded right now. Visit{' '}
              <a className="font-semibold text-brand hover:underline" href={USER.github} target="_blank" rel="noreferrer">
                my GitHub profile
              </a>{' '}
              for the live contribution graph.
            </div>
          ) : (
            <ContributionGraphView graph={graph} isLoading={status === 'loading'} />
          )}
        </div>
      </PanelContent>
    </Panel>
  );
}

function ContributionGraphView({
  graph,
  isLoading,
}: {
  graph: ContributionGraphData;
  isLoading: boolean;
}) {
  const blockSize = 11;
  const gap = 4;
  const cellTrack = `${blockSize}px`;
  const graphGap = `${gap}px`;

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto pb-2">
        <div
          className={cn('min-w-[760px]', isLoading && 'animate-pulse opacity-70')}
          role="img"
          aria-label="GitHub contribution activity for the last year"
        >
          <div
            className="mb-2 ml-10 grid text-xs text-muted-text"
            style={{
              gridTemplateColumns: `repeat(${graph.weeks.length}, ${cellTrack})`,
              gap: graphGap,
            }}
            aria-hidden="true"
          >
            {graph.monthLabels.map(label => (
              <span
                key={`${label.month}-${label.weekIndex}`}
                className="whitespace-nowrap"
                style={{ gridColumnStart: label.weekIndex + 1 }}
              >
                {label.month}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-[32px_1fr] gap-2">
            <div
              className="grid text-xs text-muted-text"
              style={{
                gridTemplateRows: `repeat(7, ${cellTrack})`,
                gap: graphGap,
              }}
              aria-hidden="true"
            >
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${graph.weeks.length}, ${cellTrack})`,
                gridTemplateRows: `repeat(7, ${cellTrack})`,
                gridAutoFlow: 'column',
                gap: graphGap,
              }}
            >
              {graph.weeks.map((week, weekIndex) =>
                week.map((day, dayIndex) => {
                  const key = day?.date ?? `empty-${weekIndex}-${dayIndex}`;

                  if (!day) {
                    return <span key={key} className="size-[11px]" aria-hidden="true" />;
                  }

                  return (
                    <Tooltip key={day.date}>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            'size-[11px] rounded-[2px] border border-transparent outline-none transition-transform hover:scale-125 focus-visible:scale-125 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                            levelClassName(day.level)
                          )}
                          aria-label={contributionLabel(day)}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        {contributionLabel(day)}
                      </TooltipContent>
                    </Tooltip>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs text-muted-text">
        <span>{graph.total.toLocaleString('en')} contributions in {graph.yearLabel}</span>
        <span className="inline-flex items-center gap-2">
          Less
          {[0, 1, 2, 3, 4].map(level => (
            <span key={level} className={cn('size-3 rounded-[2px]', levelClassName(level))} />
          ))}
          More
        </span>
      </div>
    </div>
  );
}

type ContributionGraphData = {
  weeks: Array<Array<Activity | undefined>>;
  monthLabels: Array<{ month: string; weekIndex: number }>;
  total: number;
  yearLabel: string;
};

function buildContributionGraph(activity: Activity[]): ContributionGraphData {
  const normalized = activity.length > 0 ? activity : makeSkeletonActivity();
  const sorted = [...normalized].sort((a, b) => a.date.localeCompare(b.date));
  const weeks: Array<Array<Activity | undefined>> = [];
  const firstDate = parseDateAsUtc(sorted[0]?.date);
  const firstDay = Number.isNaN(firstDate.getTime()) ? 0 : firstDate.getUTCDay();
  const mondayOffset = firstDay === 0 ? 6 : firstDay - 1;
  let currentWeek: Array<Activity | undefined> = Array.from({ length: mondayOffset }, () => undefined);

  for (const item of sorted) {
    currentWeek.push(item);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    weeks.push([...currentWeek, ...Array.from({ length: 7 - currentWeek.length }, () => undefined)]);
  }

  const monthLabels: Array<{ month: string; weekIndex: number }> = [];
  let previousMonth = '';
  weeks.forEach((week, weekIndex) => {
    const firstActivity = week.find(Boolean);
    if (!firstActivity) return;
    const month = MONTHS[parseDateAsUtc(firstActivity.date).getUTCMonth()] ?? '';
    if (month && month !== previousMonth) {
      monthLabels.push({ month, weekIndex });
      previousMonth = month;
    }
  });

  const yearLabel = sorted.at(-1)?.date.slice(0, 4) ?? SKELETON_END_DATE.slice(0, 4);

  return {
    weeks,
    monthLabels,
    total: activity.reduce((sum, item) => sum + item.count, 0),
    yearLabel,
  };
}

function makeSkeletonActivity(): Activity[] {
  const endDate = parseDateAsUtc(SKELETON_END_DATE);
  const days = 365;

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(endDate);
    date.setUTCDate(endDate.getUTCDate() - (days - index - 1));

    return {
      date: date.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    };
  });
}

function parseDateAsUtc(date?: string) {
  if (!date) return new Date(Number.NaN);
  return new Date(`${date}T00:00:00.000Z`);
}

function levelClassName(level: number) {
  if (level <= 0) return 'bg-[#ebedf0] dark:bg-[#161b22]';
  if (level === 1) return 'bg-[#9be9a8] dark:bg-[#0e4429]';
  if (level === 2) return 'bg-[#40c463] dark:bg-[#006d32]';
  if (level === 3) return 'bg-[#30a14e] dark:bg-[#26a641]';
  return 'bg-[#216e39] dark:bg-[#39d353]';
}

function contributionLabel(day: Activity) {
  const date = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parseDateAsUtc(day.date));

  return `${day.count} contribution${day.count === 1 ? '' : 's'} on ${date}`;
}
