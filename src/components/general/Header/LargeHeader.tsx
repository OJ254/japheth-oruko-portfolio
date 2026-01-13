import React from 'react';
import Image from 'next/image';
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
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';

import { Person, Build, Work, ContactMail } from '@mui/icons-material';

type LargeHeaderProps = {
  onNavigateAction: (section: string) => void;
  activeSection: string;
};

export default function LargeHeader({
  onNavigateAction,
  activeSection,
}: LargeHeaderProps) {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <header className='hidden space-y-2 lg:block'>
      {/* Logo + Theme */}
      <div className='surface flex flex-col items-center justify-between gap-4 rounded-full py-6'>
        <Image
          src='/assets/images/logo.png'
          alt='japheth logo'
          width={75}
          height={15}
          priority
          className='dark:invert'
        />
        <ListItem
          disablePadding
          className='flex w-full items-center justify-center'
        >
          <Button
            onClick={toggleTheme}
            className='flex h-20 flex-col justify-center'
            sx={{
              color: 'text.primary',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <ThemeModeToggle
              theme={theme}
              className='mb-1 min-w-0 justify-center'
            />
            <ListItemText
              primary={
                <Typography variant='caption' className='font-medium uppercase'>
                  Theme
                </Typography>
              }
            />
          </Button>
        </ListItem>
      </div>

      {/* Navigation */}
      <nav className='surface w-full rounded-full py-8'>
        <List>
          {[
            { label: 'About', icon: <Person /> },
            { label: 'Services', icon: <Build /> },
            { label: 'Works', icon: <Work /> },
            { label: 'Contact', icon: <ContactMail /> },
          ].map((item, index, array) => {
            const sectionKey = item.label.toLowerCase();
            const isActive = activeSection === sectionKey;

            return (
              <React.Fragment key={item.label}>
                <ListItem disablePadding className='py-1'>
                  <Button
                    onClick={() => onNavigateAction(sectionKey)}
                    fullWidth
                    className='active:bg-primary-color flex h-20 flex-col justify-center'
                    sx={{
                      color: 'text.primary',
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <ListItemIcon
                      className={`mb-1 min-w-0 justify-center transition-colors duration-200 ${
                        isActive ? 'text-primary-color' : ''
                      }`}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={
                        <Typography
                          variant='caption'
                          className={`font-medium uppercase transition-colors duration-200 ${
                            isActive ? 'text-primary-color' : ''
                          }`}
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
            );
          })}
        </List>
      </nav>
    </header>
  );
}
