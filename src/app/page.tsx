// src/app/page.tsx

'use client';

import Image from 'next/image';
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import ExampleCard from '@/components/general/cards/ExampleCard';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Person as PersonIcon,
  Description as ResumeIcon,
  Build as ServicesIcon,
  Work as WorksIcon,
  Article as BlogIcon,
  Email as ContactIcon,
} from '@mui/icons-material';

export default function Home() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div className='flex h-full w-full max-w-7xl items-center justify-center font-sans'>
      <header>
        <div className='surface flex flex-col items-center justify-between gap-4 rounded-sm py-6'>
          <Image
            className='mx-2 dark:invert'
            src='/assets/images/logo.png'
            alt='japheth logo'
            width={75}
            height={15}
            priority
          />{' '}
          <button onClick={toggleTheme} className='white-text'>
            <ThemeModeToggle theme={theme} className='white-text' />
          </button>
        </div>

        <nav className='surface mt-6 w-full rounded-sm'>
          <List>
            {[
              { label: 'About', icon: <PersonIcon /> },
              { label: 'Resume', icon: <ResumeIcon /> },
              { label: 'Services', icon: <ServicesIcon /> },
              { label: 'Works', icon: <WorksIcon /> },
              { label: 'Blog', icon: <BlogIcon /> },
              { label: 'Contact', icon: <ContactIcon /> },
            ].map(item => (
              <ListItem key={item.label} disablePadding className='px-4 py-1'>
                <Button
                  href={`#${item.label.toLowerCase()}`}
                  fullWidth
                  className='flex h-20 flex-col justify-center'
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon className='mb-1 min-w-0 justify-center'>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant='caption' className='normal-case'>
                        {item.label}
                      </Typography>
                    }
                  />
                </Button>
              </ListItem>
            ))}
          </List>
        </nav>
      </header>

      <main className='flex w-full flex-col items-center justify-between bg-white px-16 py-8 sm:items-start'>
        <div className='flex w-full items-center justify-between gap-2'></div>

        <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
          <Typography
            variant='h4'
            className='leading-tight font-semibold text-black dark:text-zinc-50'
          >
            To get started, edit the <code>page.tsx</code> file.
          </Typography>
          <Typography
            variant='body1'
            className='max-w-lg text-zinc-600 dark:text-zinc-400'
          >
            Looking for a starting point or more instructions? Check out{' '}
            <a
              href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-zinc-950 underline dark:text-zinc-50'
            >
              Templates
            </a>{' '}
            or the{' '}
            <a
              href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-zinc-950 underline dark:text-zinc-50'
            >
              Learning
            </a>{' '}
            center.
          </Typography>
        </div>

        <div>
          <ExampleCard href='/' />
        </div>

        <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
          <Button
            variant='contained'
            startIcon={
              <Image
                src='/vercel.svg'
                alt='Vercel logomark'
                width={24}
                height={24}
              />
            }
            className='flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors hover:border-transparent'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Documentation
          </Button>

          <Button
            variant='outlined'
            className='flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors hover:border-transparent'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Documentation
          </Button>
        </div>
      </main>
    </div>
  );
}
