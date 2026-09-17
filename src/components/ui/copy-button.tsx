'use client';

import { useState } from 'react';

import { Copy, Check } from 'lucide-react';

import { cn } from '@/lib/utils';

export function CopyButton({
  value,
  label = 'Copy',
  icon = false,
}: {
  value: string;
  label?: string;
  icon?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type='button'
      className={cn(
        'text-muted-text hover:text-foreground inline-flex items-center text-xs font-semibold transition',
        icon && !copied ? 'size-9 p-2' : 'min-h-9 px-3',
        copied && 'border-brand text-brand'
      )}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
    >
      {icon ? (
        copied ? (
          <p className='text-right text-xs text-green-600 dark:text-green-400'>
            Copied
          </p>
        ) : (
          <Copy className='size-4' />
        )
      ) : copied ? (
        'Copied'
      ) : (
        label
      )}
    </button>
  );
}
