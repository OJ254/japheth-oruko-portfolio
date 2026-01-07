// src/app/page.tsx

'use client';

import React from 'react';
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
  Divider,
} from '@mui/material';
import {
  Person as PersonIcon,
  Build as ServicesIcon,
  Work as WorksIcon,
  Article as BlogIcon,
  Email as ContactIcon,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import CustomCard from '@/components/general/cards/CustomCard';
import japhethOruko from '@/assets/images/japheth-oruko.jpg';
import {
  LinkedInLogo,
  GitHubLogo,
  BehanceLogo,
  SpotifyLogo,
} from '@/components/ui/dataDisplay/icons';

const roles = ['UI/UX Designer', 'Product Manager', 'Frontend Developer'];

export default function Home() {
  const { theme, toggleTheme } = useThemeToggle();
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setText(prev => {
        if (!isDeleting) {
          // Add one character
          if (prev.length < currentRole.length)
            return currentRole.slice(0, prev.length + 1);
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2400);
          return prev;
        } else {
          // Delete one character
          if (prev.length > 0) return prev.slice(0, prev.length - 1);
          // Move to next role
          setIsDeleting(false);
          setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
          return '';
        }
      });
    };

    const timeout = setTimeout(
      handleTyping,
      text === '' && !isDeleting ? 100 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className='flex h-full w-full max-w-7xl items-center justify-center gap-4 font-sans'>
      <header className='space-y-2'>
        <div className='surface flex flex-col items-center justify-between gap-4 rounded-sm py-6'>
          <Image
            className='mx-2 dark:invert'
            src='/assets/images/logo.png'
            alt='japheth logo'
            width={75}
            height={15}
            priority
          />
          <button onClick={toggleTheme} className='white-text'>
            <ThemeModeToggle theme={theme} className='white-text' />
          </button>
        </div>

        <nav className='surface w-full rounded-sm'>
          <List>
            {[
              { label: 'About', icon: <PersonIcon /> },
              { label: 'Services', icon: <ServicesIcon /> },
              { label: 'Works', icon: <WorksIcon /> },
              { label: 'Blog', icon: <BlogIcon /> },
              { label: 'Contact', icon: <ContactIcon /> },
            ].map((item, index, array) => (
              <React.Fragment key={item.label}>
                <ListItem disablePadding className='w-full py-1'>
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
                        <Typography
                          variant='caption'
                          className='font-medium uppercase'
                        >
                          {item.label}
                        </Typography>
                      }
                    />
                  </Button>
                </ListItem>
                {index < array.length - 1 && (
                  <Divider variant='middle' className='m-0 w-full' />
                )}
              </React.Fragment>
            ))}
          </List>
        </nav>
      </header>

      <main className='flex w-full flex-col items-center justify-between lg:flex-row'>
        <CustomCard className='flex h-full w-full flex-col items-center shadow-2xl lg:h-[calc(100vh-16rem)] lg:w-2/5'>
          <div
            className='flex w-full flex-2 items-center justify-center bg-cover bg-center'
            style={{
              backgroundImage: `url(${japhethOruko.src})`,
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
            }}
          />
          <div className='flex w-full flex-1 flex-col items-center justify-between'>
            <div className='flex w-full flex-col items-center gap-4'>
              <div className='flex flex-col items-center'>
                <Typography
                  variant='h4'
                  className='mt-6 leading-tight font-semibold'
                >
                  Japheth Oruko
                </Typography>
                <Typography
                  variant='body1'
                  className='secondary-text h-6 font-medium'
                >
                  {text}
                </Typography>
              </div>
              <div className='flex gap-4'>
                <BehanceLogo />
                <GitHubLogo />
                <LinkedInLogo />
                <SpotifyLogo />
              </div>
            </div>

            <Divider variant='middle' className='mt-4 w-full' />

            <div className='flex h-16 w-full'>
              <div className='flex w-full items-center justify-center'>
                My Resume
              </div>
              <Divider orientation='vertical' />
              <div className='flex w-full items-center justify-center'>
                Contact Me
              </div>
            </div>
          </div>
        </CustomCard>

        <div className='surface lg:min-h-[calc(100vh-18rem)]'>
          <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
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
        </div>
      </main>
    </div>
  );
}
