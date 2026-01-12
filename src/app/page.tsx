// src/app/page.tsx

'use client';

import React from 'react';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import Link from 'next/link';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import { Email as ContactIcon, DescriptionOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import CustomCard from '@/components/general/cards/CustomCard';
import japhethOruko from '@/assets/images/japheth-oruko.png';
import {
  LinkedInLogo,
  GitHubLogo,
  BehanceLogo,
  SpotifyLogo,
} from '@/components/ui/dataDisplay/icons';
import LargeHeader from '@/components/general/Header/LargeHeader';
import SmallHeader from '@/components/general/Header/SmallHeader';
import About from '@/app/about/About';
import Services from '@/app/services/Services';
import Works from '@/app/works/Works';

const roles = ['UI/UX Designer', 'Product Manager', 'Frontend Developer'];

export default function Home() {
  const { theme, toggleTheme } = useThemeToggle();
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'about' | 'services' | 'works' | 'blog'
  >('about');

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
    <div className='flex h-full w-full max-w-7xl flex-col items-start justify-center gap-4 font-sans lg:flex-row lg:items-center'>
      <header className='w-full lg:w-auto'>
        <SmallHeader />
        <LargeHeader onNavigate={section => setActiveSection(section as any)} />
      </header>

      <main className='flex w-full flex-col items-center justify-between lg:flex-row'>
        <div className='relative flex h-full w-full flex-col items-center shadow-xl lg:w-2/5'>
          <div className='surface absolute right-4 bottom-4 -z-10 flex h-[750px] w-full flex-col items-center rounded-lg opacity-50 shadow-2xl md:h-[1000px] lg:h-[750px]' />
          <CustomCard className='flex w-full flex-col items-center shadow-2xl'>
            <div
              className='flex h-[500px] w-full items-center justify-center bg-cover bg-center md:h-[750px] lg:h-[500px]'
              style={{
                backgroundImage: `url(${japhethOruko.src})`,
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
              }}
            />
            <div className='lg flex w-full flex-col items-center justify-between'>
              <div className='flex w-full flex-col items-center gap-4 py-4'>
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
                  <BehanceLogo className='h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-120' />
                  <GitHubLogo className='h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-120' />
                  <LinkedInLogo className='h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-120' />
                  <SpotifyLogo className='h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-120' />
                </div>
              </div>

              <Divider variant='middle' className='mt-4 w-full' />

              <div className='flex h-16 w-full'>
                <Button
                  onClick={() => setIsResumeModalOpen(true)}
                  className='flex h-16 w-full uppercase'
                  endIcon={<DescriptionOutlined />}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <Typography variant='body1' className='font-medium'>
                    My Resume
                  </Typography>
                </Button>
                <Divider orientation='vertical' />
                <Button
                  component={Link}
                  href='/contact'
                  fullWidth
                  className='h-16 normal-case'
                  endIcon={<ContactIcon />}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <Typography variant='body1' className='font-medium uppercase'>
                    Contact Me
                  </Typography>
                </Button>
              </div>
            </div>
          </CustomCard>
        </div>

        <div className='body scrollbar-custom w-full overflow-auto rounded-r-md lg:h-[700px] lg:w-3/5'>
          {activeSection === 'about' && <About />}
          {activeSection === 'services' && <Services />}
          {activeSection === 'works' && <Works />}
          {activeSection === 'blog' && <div>Blog</div>}
        </div>
      </main>
    </div>
  );
}
