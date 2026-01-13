'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';

import { Person, Build, Work, ContactMail, Close } from '@mui/icons-material';

type MobileHeaderProps = {
  onNavigateAction: (section: string) => void;
  activeSection: string;
};

export default function MobileHeader({
  onNavigateAction,
  activeSection,
}: MobileHeaderProps) {
  const { theme, toggleTheme } = useThemeToggle();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'About', icon: <Person /> },
    { label: 'Services', icon: <Build /> },
    { label: 'Works', icon: <Work /> },
    { label: 'Contact', icon: <ContactMail /> },
  ];

  return (
    <>
      <header className='surface fixed top-0 right-0 left-0 z-20 mb-4 flex w-full items-center justify-between rounded-md px-6 py-4 lg:hidden'>
        <div className='flex items-center gap-4'>
          <Image
            src='/assets/images/logo.png'
            alt='japheth logo'
            width={60}
            height={14}
            priority
            className='dark:invert'
          />

          <Typography variant='h6' className='text-primary-color text-sm'>
            Japheth Oruko's Portfolio
          </Typography>
        </div>

        <div className='flex items-center gap-8'>
          <IconButton onClick={toggleTheme}>
            <ThemeModeToggle theme={theme} />
          </IconButton>

          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon className='text-2xl' />
          </IconButton>
        </div>
      </header>

      {/* Drawer */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className='surface flex h-full w-screen max-w-72 flex-col justify-between p-4 py-8'>
          <div className='space-y-4'>
            <div className='flex items-center justify-between gap-4'>
              <Image
                src='/assets/images/logo.png'
                alt='japheth logo'
                width={60}
                height={14}
                priority
                className='dark:invert'
              />

              <IconButton className='text-primary-color'>
                <Close
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                />
              </IconButton>
            </div>

            <Divider />

            <List>
              {navItems.map((item, index, array) => {
                const sectionKey = item.label.toLowerCase();
                const isActive = activeSection === sectionKey;

                return (
                  <React.Fragment key={item.label}>
                    <ListItem disablePadding className='py-1'>
                      <Button
                        onClick={() => {
                          onNavigateAction(sectionKey);
                          setDrawerOpen(false);
                        }}
                        fullWidth
                        className='flex h-12 items-center justify-center gap-3 px-2'
                        sx={{
                          color: isActive ? 'primary.main' : 'text.primary',
                          '&:hover': { bgcolor: 'action.hover' },
                        }}
                      >
                        <ListItemIcon className='min-w-0'>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant='body2'
                              className={`mx-4 max-w-max font-medium uppercase ${
                                isActive ? 'text-primary-color' : ''
                              }`}
                            >
                              {item.label}
                            </Typography>
                          }
                        />
                      </Button>
                    </ListItem>

                    {index < array.length && <Divider className='my-1' />}
                  </React.Fragment>
                );
              })}
            </List>
          </div>

          <div className='flex w-full flex-col items-center'>
            <Typography variant='body2' className='text-center text-gray-400'>
              © 2026 Japheth Oruko <br /> All rights reserved
            </Typography>
          </div>
        </div>
      </Drawer>
    </>
  );
}
