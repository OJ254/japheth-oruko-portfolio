import { Panel, PanelContent, SectionKicker } from '@/components/ui/panel';

export function PageIntro({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <Panel>
      <PanelContent className='space-y-3 py-10 sm:py-14'>
        <SectionKicker>{kicker}</SectionKicker>
        <h1 className='max-w-4xl text-4xl font-semibold text-balance sm:text-5xl'>
          {title}
        </h1>
        <p className='text-muted-text max-w-2xl text-sm leading-7'>{body}</p>
      </PanelContent>
    </Panel>
  );
}
