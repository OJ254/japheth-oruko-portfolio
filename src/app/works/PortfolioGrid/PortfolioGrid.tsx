'use client';

import React, { useEffect, useState, JSX } from 'react';
import { Typography, Box, CardActionArea } from '@mui/material';
import CustomCard from '@/components/general/cards/CustomCard';
import {
  Code,
  Brush,
  Storage,
  Dashboard,
  Architecture,
} from '@mui/icons-material';
import Image from 'next/image';

import MaterialUI from '@/components/ui/dataDisplay/icons/logos/MaterialUI';
import Figma from '@/components/ui/dataDisplay/icons/logos/Figma';
import Tailwind from '@/components/ui/dataDisplay/icons/logos/Tailwind';
import NextJS from '@/components/ui/dataDisplay/icons/logos/NextJS';
import Confluence from '@/components/ui/dataDisplay/icons/logos/Confluence';
import Jira from '@/components/ui/dataDisplay/icons/logos/Jira';
import PostgreSQL from '@/components/ui/dataDisplay/icons/logos/PostgreSQL';
import TypeScript from '@/components/ui/dataDisplay/icons/logos/Typescript';
import { useRouter } from 'next/navigation';

type Project = {
  id: number;
  title: string;
  tools: string[];
  image: string;
  category: 'UI/UX Design' | 'Web Development' | 'Product Management';
};

const toolIcons: Record<string, JSX.Element> = {
  Figma: <Figma className='h-6 w-6' />,
  'Material UI': <MaterialUI className='h-6 w-6' />,
  'Next.js': <NextJS className='h-6 w-6 text-black dark:text-white' />,
  Tailwind: <Tailwind className='h-6 w-6' />,
  Jira: <Jira className='h-6 w-6' />,
  Confluence: <Confluence className='h-6 w-6' />,
  PostgreSQL: <PostgreSQL className='h-6 w-6' />,
  TypeScript: <TypeScript className='h-6 w-6' />,
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Ticet EDU Design System',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/landscape.jpg',
  },
  {
    id: 2,
    title: 'Ticet EDU Website',
    category: 'Web Development',
    tools: ['Next.js', 'TypeScript', 'Material UI', 'Tailwind'],
    image: '/assets/images/projects/portrait.jpg',
  },
  {
    id: 3,
    title: 'Product Roadmap',
    category: 'Product Management',
    tools: ['Figma'],
    image: '/assets/images/projects/landscape.jpg',
  },
  {
    id: 4,
    title: 'Mobile App UI',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/portrait.jpg',
  },
  {
    id: 5,
    title: 'Dashboard Build',
    category: 'Web Development',
    tools: ['Next.js', 'Material UI'],
    image: '/assets/images/projects/portrait.jpg',
  },
  {
    id: 6,
    title: 'User Research Plan',
    category: 'Product Management',
    tools: ['Jira', 'Confluence'],
    image: '/assets/images/projects/landscape.jpg',
  },
];

const filterMap: Record<
  string,
  'UI/UX Design' | 'Web Development' | 'Product Management'
> = {
  'UI/UX': 'UI/UX Design',
  'Web Dev': 'Web Development',
  'Product Mgmt': 'Product Management',
};

const PortfolioGrid = ({ activeFilter }: { activeFilter: string }) => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timeout = setTimeout(() => {
      setVisibleProjects(
        activeFilter === 'All'
          ? projects
          : projects.filter(p => p.category === filterMap[activeFilter])
      );
      setAnimate(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [activeFilter]);

  return (
    <Box
      className={`columns-1 gap-6 transition-all duration-300 sm:columns-2 ${
        animate ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
      }`}
    >
      {visibleProjects.map(project => (
        <CustomCard
          key={project.id}
          className='group surface mb-6 break-inside-avoid rounded-md shadow-sm transition-shadow hover:shadow-md'
        >
          <CardActionArea
            className='h-full'
            onClick={() => {
              // handle navigation or action here
              // e.g router.push(`/projects/${project.id}`)
            }}
          >
            <div className='flex max-h-72 w-full overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className='h-full w-full rounded-t-md object-cover transition-all duration-500 group-hover:scale-115'
              />
            </div>

            <div className='flex flex-col items-center p-6'>
              <Typography
                variant='h6'
                className='text-center text-lg font-normal'
              >
                {project.title}
              </Typography>

              <Typography variant='body2' className='text-center text-gray-500'>
                {project.category}
              </Typography>

              <div className='mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2'>
                {project.tools.map(tool => (
                  <div
                    key={tool}
                    className='flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300'
                  >
                    {toolIcons[tool]}
                  </div>
                ))}
              </div>
            </div>
          </CardActionArea>
        </CustomCard>
      ))}
    </Box>
  );
};

export default PortfolioGrid;
