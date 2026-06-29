'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className={cn(
        'inline-flex min-h-9 items-center rounded-md border border-line px-3 text-xs font-semibold text-muted-text transition hover:text-foreground',
        copied && 'border-brand text-brand'
      )}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
    >
      {copied ? 'Copied' : label}
    </button>
  );
}
