'use client';

import { useEffect, useState, JSX } from 'react';
import { Typography, Box, CardActionArea, Modal } from '@mui/material';
import CustomCard from '@/components/general/cards/CustomCard';
import Image from 'next/image';

import MaterialUI from '@/components/ui/dataDisplay/icons/logos/MaterialUI';
import Figma from '@/components/ui/dataDisplay/icons/logos/Figma';
import Tailwind from '@/components/ui/dataDisplay/icons/logos/Tailwind';
import NextJS from '@/components/ui/dataDisplay/icons/logos/NextJS';
import Confluence from '@/components/ui/dataDisplay/icons/logos/Confluence';
import Jira from '@/components/ui/dataDisplay/icons/logos/Jira';
import PostgreSQL from '@/components/ui/dataDisplay/icons/logos/PostgreSQL';
import TypeScript from '@/components/ui/dataDisplay/icons/logos/Typescript';
import ReactIcon from '@/components/ui/dataDisplay/icons/logos/React';
import Javascript from '@/components/ui/dataDisplay/icons/logos/JavaScript';
import Html from '@/components/ui/dataDisplay/icons/logos/Html';
import Css from '@/components/ui/dataDisplay/icons/logos/Css';
import VueJS from '@/components/ui/dataDisplay/icons/logos/VueJS';

import ProjectDetails from './ProjectDetails';

type Project = {
  id: number;
  title: string;
  tools: string[];
  image: string;
  description: string;
  link: string;
  prototype: string;
  tags: string[];
  category: 'UI/UX Design' | 'Web Development' | 'Product Management';
};

const toolIcons: Record<string, JSX.Element> = {
  Figma: <Figma className='h-6 w-6' />,
  MaterialUI: <MaterialUI className='h-6 w-6' />,
  'Next.js': <NextJS className='h-6 w-6 text-black dark:text-white' />,
  Tailwind: <Tailwind className='h-6 w-6' />,
  Jira: <Jira className='h-6 w-6' />,
  Confluence: <Confluence className='h-6 w-6' />,
  PostgreSQL: <PostgreSQL className='h-6 w-6' />,
  TypeScript: <TypeScript className='h-6 w-6' />,
  'React.js': <ReactIcon className='h-6 w-6' />,
  JavaScript: <Javascript className='h-6 w-6' />,
  HTML: <Html className='h-6 w-6' />,
  CSS: <Css className='h-6 w-6' />,
  'Vue.js': <VueJS className='h-6 w-6' />,
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Ticet EDU Design System',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id1/1.jpg',
    description:
      'The Ticet EDU Design Kit is a comprehensive UI/UX toolkit created to support the development of Ticet EDU’s web platform. It includes a fully structured library of reusable components, responsive layouts, typography systems, color palettes, icons, and interactive elements designed for seamless user experiences. The kit emphasizes clarity, accessibility, and consistency, enabling rapid prototyping and ensuring a visually cohesive platform.\n\n' +
      'Key highlights include a modular component system for courses, exercises, and community features, interactive states for buttons, forms, and navigation, as well as style guidelines for color, spacing, and typography. The design kit reflects a modern, clean, and engaging aesthetic while prioritizing usability and personalization, supporting Ticet EDU’s mission to provide a flexible and interactive learning environment.\n\n' +
      'By using this kit, developers and designers can efficiently build and scale the platform while maintaining brand consistency and a premium user experience across all touchpoints.',
    link: '',
    prototype: '',
    tags: [
      'TicetEDUDesignKit',
      'UIUXForEduTech',
      'DesignSystems',
      'ScalableUIUX',
      'LMS',
      'LXP',
      'UserCentricDesign',
    ],
  },

  {
    id: 2,
    title: 'Ticet EDU LXP - App',
    category: 'Web Development',
    tools: ['React.js', 'JavaScript', 'Tailwind', 'HTML', 'CSS'],
    image: '/assets/images/projects/id1/1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 3,
    title: 'Personal Portfolio',
    category: 'Web Development',
    tools: ['Next.js', 'TypeScript', 'MaterialUI', 'Tailwind', 'HTML', 'CSS'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 4,
    title: 'Tccet EDU LXP - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 5,
    title: 'Ticet EDU LMS - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 6,
    title: 'Ticet EDU Website',
    category: 'Web Development',
    tools: ['Vue.js', 'JavaScript', 'Tailwind', 'HTML', 'CSS'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 7,
    title: 'Ticet EDU Website - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 8,
    title: 'Sample Product Documentation',
    category: 'Product Management',
    tools: ['Jira', 'Confluence'],
    image: '/assets/images/projects/id2/1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 9,
    title: 'LVBICE Website - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 10,
    title: 'LVBICE Website',
    category: 'Web Development',
    tools: ['Next.js', 'TypeScript', 'MaterialUI', 'Tailwind', 'HTML', 'CSS'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 11,
    title: 'Hospital Management System - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
  },

  {
    id: 12,
    title: 'Linda Insurance Website - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque eum illo in magni nemo nobis nulla quas quibusdam soluta. Cumque dolorem doloribus excepturi iusto, natus non perferendis perspiciatis totam.',
    link: 'https://about.ticetedu.com/',
    prototype: 'https://ticetedu.com/',
    tags: ['#', '#', '#'],
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
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              setSelectedProject(project);
              setOpen(true);
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

            <div className='flex flex-col items-center p-4'>
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

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className='flex items-center justify-center'
      >
        <Box className='surface scrollbar-custom mx-4 max-h-192 w-full max-w-7xl overflow-y-auto rounded-md outline-none'>
          {selectedProject && (
            <ProjectDetails
              project={{
                ...selectedProject,
                tools: selectedProject.tools,
              }}
              toolIcons={toolIcons}
              onClose={() => setOpen(false)}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PortfolioGrid;
