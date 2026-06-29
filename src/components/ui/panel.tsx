import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export function Panel({ className, ...props }: ComponentProps<'section'>) {
  return <section className={cn('panel border-x border-line', className)} {...props} />;
}

export function PanelHeader({ className, ...props }: ComponentProps<'header'>) {
  return <header className={cn('border-b border-line px-4 py-5 sm:px-6', className)} {...props} />;
}

export function PanelTitle({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 className={cn('text-2xl font-semibold text-balance sm:text-3xl', className)} {...props} />;
}

export function PanelContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('p-4 sm:p-6', className)} {...props} />;
}

export function SectionKicker({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('mb-2 font-mono text-xs uppercase text-muted-text', className)} {...props} />;
}
