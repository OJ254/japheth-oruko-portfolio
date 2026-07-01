import Link from 'next/link';

import { ContactDialog } from '@/components/portfolio/contact-dialog';
import { USER } from '@/data/user';

import { ThemeToggle } from './theme-toggle';

const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/experience' },
  { label: 'Process', href: '/process' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 px-2 py-2 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-3 border-x border-line bg-background px-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-md border border-line bg-surface font-mono text-xs">JO</span>
          <span className="hidden sm:inline">{USER.displayName}</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map(item => (
            <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-surface hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <a className="hidden min-h-10 items-center rounded-md bg-foreground px-3 text-sm font-semibold text-background sm:inline-flex" href={USER.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <ContactDialog buttonLabel="Email Me" className="hidden sm:inline-flex" />
        <ThemeToggle />
        <details className="relative md:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-md border border-line bg-surface font-semibold" aria-label="Open menu">
            M
          </summary>
          <div className="absolute right-0 top-12 w-52 rounded-md border border-line bg-background p-2 shadow-xl">
            {nav.map(item => (
              <a key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm text-muted-text hover:bg-surface hover:text-foreground">
                {item.label}
              </a>
            ))}
            <a href={USER.resume} target="_blank" rel="noreferrer" className="mt-1 block rounded-md px-3 py-2 text-sm font-semibold">
              View resume
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
