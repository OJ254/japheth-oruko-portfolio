// src/app/about/About.tsx

import { Divider, Typography, Box, Button } from '@mui/material';
import React from 'react';
import {
  DesignServices,
  Code,
  FactCheck,
  AutoFixHigh,
  ViewQuilt,
  Groups,
} from '@mui/icons-material';

const Works = () => {
  const portfolio = 'My Portfolio';
  return (
    <Box className='flex h-full flex-col gap-4'>
      <div>
        <div className='flex w-full items-center justify-between gap-8 p-8'>
          <Typography
            variant='h5'
            className='font-semibold tracking-wider whitespace-nowrap'
          >
            <span className='text-primary-color'>{portfolio.charAt(0)}</span>
            {portfolio.slice(1)}
          </Typography>

          <div className='hidden w-full max-w-[360px] gap-2 md:flex md:justify-end'>
            {['All', 'UI/UX', 'Web Dev', 'Product Mgmt'].map(label => (
              <Button
                key={label}
                variant='text'
                size='small'
                sx={{
                  whiteSpace: 'normal', // allow text to wrap
                  textAlign: 'center', // center text
                  minWidth: 0, // prevents overflow
                  textTransform: 'none',
                }}
                className='px-2 text-sm text-black dark:text-white'
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <Divider className='w-full' />

        <div className='flex w-full gap-4 p-4 md:hidden'>
          {['All', 'UI/UX', 'Web Dev', 'Product Mgmt'].map(label => (
            <Button
              key={label}
              variant='text'
              size='small'
              sx={{
                whiteSpace: 'normal', // allow text to wrap
                textAlign: 'center', // center text
                minWidth: 0, // prevents overflow
                textTransform: 'none',
              }}
              className='px-2 text-sm text-black dark:text-white'
            >
              {label}
            </Button>
          ))}
        </div>

        <div className='flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Left column */}
          <div className='flex w-full flex-col items-center justify-between gap-2 p-8'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <DesignServices />
            </div>

            <Typography variant='h6' className='text-center'>
              UI/UX Design
            </Typography>
            <Typography variant='body1' className='text-center'>
              Design clean, intuitive interfaces that focus on usability,
              accessibility, and a consistent visual experience.
            </Typography>

            <Divider className='mt-8 w-full' />
          </div>

          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Right column */}
          <div className='flex w-full flex-col items-center justify-between gap-2 px-8 md:p-8 lg:p-0 lg:px-8 xl:p-8'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <Code />
            </div>

            <Typography variant='h6' className='text-center'>
              Web Development
            </Typography>
            <Typography variant='body1' className='text-center'>
              Build responsive, high-performance web applications using modern
              frontend technologies and best practices.
            </Typography>

            <Divider className='mt-8 w-full' />
          </div>
        </div>

        <div className='flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Left column */}
          <div className='flex w-full flex-col items-center justify-between gap-2 px-8 pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <FactCheck />
            </div>
            <Typography variant='h6' className='text-center'>
              User Stories & Product Thinking
            </Typography>
            <Typography variant='body1' className='text-center'>
              Translate business and user needs into clear user stories that
              guide design decisions and development work.
            </Typography>

            <Divider className='mt-8 w-full' />
          </div>

          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Right column */}
          <div className='flex w-full flex-col items-center justify-between gap-2 px-8 pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <AutoFixHigh />
            </div>

            <Typography variant='h6' className='text-center'>
              Prototyping & Wireframing
            </Typography>
            <Typography variant='body1' className='text-center'>
              Create wireframes and interactive prototypes to validate ideas
              early and reduce design and development risks.
            </Typography>

            <Divider className='mt-8 w-full' />
          </div>
        </div>

        <div className='mb-8 flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Left column */}
          <div className='flex w-full flex-col items-center justify-between gap-2 px-8 pt-8'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <ViewQuilt />
            </div>
            <Typography variant='h6' className='text-center'>
              Design Systems & UI Consistency
            </Typography>
            <Typography variant='body1' className='text-center'>
              Develop and maintain reusable design systems that ensure
              consistency, scalability, and faster product development.
            </Typography>

            <Divider className='mt-8 w-full' />
          </div>

          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Right column */}
          <div className='flex w-full flex-col items-center justify-between gap-2 px-8 pt-8'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <Groups />
            </div>
            <Typography variant='h6' className='text-center'>
              Collaboration & Cross-functional Work
            </Typography>
            <Typography variant='body1' className='text-center'>
              Work closely with designers, developers, and stakeholders to align
              goals and deliver user-centered solutions.
            </Typography>

            <Divider className='mt-8 w-full' />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Works;
