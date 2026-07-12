import Link from 'next/link';
import { Menu } from 'lucide-react';

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
    <header className='bg-background/90 sticky top-0 z-40 px-2 py-2 backdrop-blur'>
      <div className='border-line bg-background mx-auto flex h-12 max-w-5xl items-center justify-between gap-3 border-x px-3'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <span className='border-line bg-surface grid size-8 place-items-center rounded-md border font-mono text-xs'>
            JO
          </span>
          <span className='hidden sm:inline'>{USER.displayName}</span>
        </Link>
        <nav
          className='ml-auto hidden items-center gap-1 md:flex'
          aria-label='Primary'
        >
          {nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              className='text-muted-text hover:bg-surface hover:text-foreground rounded-md px-3 py-2 text-sm'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className='flex items-center gap-3'>
          <a
            className='bg-foreground text-background hidden min-h-10 items-center rounded-md px-3 text-sm font-semibold lg:inline-flex'
            href={USER.resume}
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
          <ContactDialog
            buttonLabel='Email Me'
            className='hidden lg:inline-flex'
          />
          <ThemeToggle />
          <details className='relative md:hidden'>
            <summary
              className='border-line bg-surface grid size-10 cursor-pointer list-none place-items-center rounded-md border font-semibold'
              aria-label='Open menu'
            >
              <Menu className='size-5' aria-hidden='true' />
            </summary>
            <div className='border-line bg-background absolute top-12 right-0 w-52 rounded-md border p-2 shadow-xl'>
              {nav.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-muted-text hover:bg-surface hover:text-foreground block rounded-md px-3 py-2 text-sm'
                >
                  {item.label}
                </a>
              ))}
              <a
                href={USER.resume}
                target='_blank'
                rel='noreferrer'
                className='mt-1 block rounded-md px-3 py-2 text-sm font-semibold'
              >
                View resume
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
