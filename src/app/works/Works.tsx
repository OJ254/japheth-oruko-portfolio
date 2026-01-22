'use client';

import { Divider, Typography, Box, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import PortfolioGrid from '@/app/works/PortfolioGrid/PortfolioGrid';
import { projects, filterMap } from '@/app/works/PortfolioGrid/PortfolioGrid'; // import your projects array

const Works = () => {
  const portfolio = 'My Portfolio';
  const filters = ['All', 'UI Design', 'UX Logic', 'Web Dev', 'Product Mgmt'];

  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === filterMap[activeFilter]);

  return (
    <Box className='flex h-full flex-col gap-4'>
      <div>
        {/* Portfolio Header */}
        <div className='flex w-full items-center justify-between gap-8 p-8'>
          <Typography
            variant='h5'
            className='relative font-semibold tracking-wider'
          >
            <span className='bg-primary-color absolute -bottom-1 -left-2.5 h-8 w-8 rounded-full opacity-10' />
            <span className='text-primary-color'>{portfolio.charAt(0)}</span>
            {portfolio.slice(1)}
          </Typography>

          {/* Desktop Filter Buttons */}
          <div className='hidden w-full max-w-[400px] gap-0 md:flex md:justify-end'>
            {filters.map(label => (
              <Button
                key={label}
                size='small'
                onClick={() => setActiveFilter(label)}
                sx={{
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  minWidth: 0,
                  textTransform: 'none',
                }}
                className={`px-2 text-sm tracking-wide transition-shadow hover:scale-105 hover:cursor-pointer hover:shadow-sm ${
                  activeFilter === label
                    ? 'bg-primary-color font-semibold text-black dark:text-white'
                    : 'px-2 text-sm tracking-wide text-blue-950 dark:text-purple-200'
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <Divider className='w-full' />

        {/* Mobile Filter Buttons */}
        <div className='flex w-full gap-2 px-8 py-4 md:hidden'>
          {filters.map(label => (
            <Button
              key={label}
              size='small'
              onClick={() => setActiveFilter(label)}
              sx={{
                whiteSpace: 'normal',
                textAlign: 'center',
                minWidth: 0,
                textTransform: 'none',
              }}
              className={`px-2 text-sm tracking-wide transition-shadow hover:scale-105 hover:cursor-pointer hover:shadow-sm ${
                activeFilter === label
                  ? 'text-primary-color font-semibold'
                  : 'px-2 text-sm tracking-wide text-blue-950 dark:text-purple-200'
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid / Alert */}
        <div className='flex w-full flex-col gap-4 p-8 pt-0 md:pt-8'>
          {filteredProjects.length > 0 ? (
            <PortfolioGrid activeFilter={activeFilter} />
          ) : (
            <Alert severity='info'>
              No projects to show for &quot;{activeFilter}&quot;
            </Alert>
          )}
        </div>
      </div>
    </Box>
  );
};

export default Works;
