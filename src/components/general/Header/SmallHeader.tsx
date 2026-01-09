'use client';

import React from 'react';
import Image from 'next/image';
import ThemeModeToggle from '@/components/shared/ThemeToggle/ThemeModeToggle';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export default function MobileHeader() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <header className='surface mb-4 flex w-full items-center justify-between rounded-md px-4 py-3 lg:hidden'>
      <Image
        src='/assets/images/logo.png'
        alt='japheth logo'
        width={60}
        height={14}
        priority
        className='dark:invert'
      />

      <button onClick={toggleTheme}>
        <ThemeModeToggle theme={theme} />
      </button>
    </header>
  );
}
