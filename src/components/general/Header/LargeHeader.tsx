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

// icons (replace with your actual imports)
// import {
//   Person as PersonIcon,
//   Build as ServicesIcon,
//   Work as WorksIcon,
//   Article as BlogIcon,
//   Email as ContactIcon,
//   DescriptionOutlined,
// } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';

type LargeHeaderProps = {
  onNavigate: (section: string) => void;
};

export default function LargeHeader({ onNavigate }: LargeHeaderProps) {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <header className='hidden space-y-2 lg:block'>
      {/* Logo + Theme */}
      <div className='surface flex flex-col items-center justify-between gap-4 rounded-sm py-6'>
        <Image
          src='/assets/images/logo.png'
          alt='japheth logo'
          width={75}
          height={15}
          priority
          className='dark:invert'
        />
        <button onClick={toggleTheme}>
          <ThemeModeToggle theme={theme} />
        </button>
      </div>

      {/* Navigation */}
      <nav className='surface w-full rounded-sm'>
        <List>
          {[
            { label: 'About', icon: <PersonIcon /> },
            { label: 'Services', icon: <BuildIcon /> },
            { label: 'Works', icon: <WorkOutlineIcon /> },
            { label: 'Blog', icon: <ArticleIcon /> },
            { label: 'Contact', icon: <ContactMailIcon /> },
          ].map((item, index, array) => (
            <React.Fragment key={item.label}>
              <ListItem disablePadding className='py-1'>
                <Button
                  onClick={() => onNavigate(item.label.toLowerCase())}
                  fullWidth
                  className='flex h-20 flex-col justify-center'
                  sx={{
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
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
  );
}
