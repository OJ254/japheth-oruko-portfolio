// src/app/page.tsx

'use client';

import React from 'react';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import Link from 'next/link';
import {
  Button,
  Typography,
  Divider,
  Modal,
  Box,
  IconButton,
  Slide,
} from '@mui/material';
import {
  Email as ContactIcon,
  DescriptionOutlined,
  Close,
} from '@mui/icons-material';
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
import Contact from '@/app/contact/Contact';
import PdfReader from '@/components/general/PdfReader/PdfReader';

const roles = [
  'Product Designer (UI/UX)',
  'Product Manager',
  'Frontend Developer',
];

const socialLinks = [
  { href: 'https://www.behance.net/japhethoruko', Icon: BehanceLogo },
  { href: 'https://github.com/OJ254', Icon: GitHubLogo },
  {
    href: 'https://www.linkedin.com/in/japheth-oruko-b5b9a4301/',
    Icon: LinkedInLogo,
  },
  {
    href: 'https://open.spotify.com/user/vdfj74s06581jrp8n5rr3ic2k',
    Icon: SpotifyLogo,
  },
];

export default function Home() {
  const { theme, toggleTheme } = useThemeToggle();
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'about' | 'services' | 'works' | 'contact'
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
        <LargeHeader
          onNavigate={section => setActiveSection(section as any)}
          activeSection={activeSection}
        />
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
                  {socialLinks.map(({ href, Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-all duration-300 hover:scale-120'
                    >
                      <Icon className='h-6 w-6 cursor-pointer' />
                    </a>
                  ))}
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
                  onClick={() => setActiveSection('contact')}
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

        <div className='body scrollbar-custom w-full overflow-hidden rounded-r-md lg:h-[700px] lg:w-3/5'>
          <Slide
            direction='left'
            in={true}
            mountOnEnter
            unmountOnExit
            key={activeSection}
            timeout={300}
          >
            <div className='scrollbar-custom h-full overflow-auto'>
              {activeSection === 'about' && <About />}
              {activeSection === 'services' && <Services />}
              {activeSection === 'works' && <Works />}
              {activeSection === 'contact' && <Contact />}
            </div>
          </Slide>
        </div>
      </main>

      <Modal
        open={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      >
        <Box className='lg:max-w-8xl absolute top-1/2 left-1/2 flex h-[90vh] w-full max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-[#3c3c3c] shadow-2xl'>
          {/* Close button */}
          <div className='flex justify-end p-2'>
            <IconButton onClick={() => setIsResumeModalOpen(false)}>
              <Close className='text-primary-color' />
            </IconButton>
          </div>

          {/* PDF Viewer */}
          <div className='flex-1 overflow-hidden'>
            <PdfReader />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
