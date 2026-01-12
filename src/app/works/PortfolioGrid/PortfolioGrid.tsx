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
import ViteJS from '@/components/ui/dataDisplay/icons/logos/ViteJS';
import Redux from '@/components/ui/dataDisplay/icons/logos/Redux';
import GitHub from '@/components/ui/dataDisplay/icons/logos/GitHub';

import ProjectDetails from './ProjectDetails';

type Project = {
  id: number;
  title: string;
  tools: string[];
  image: string;
  description: string;
  primaryLink: string;
  secondaryLink: string;
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
  'Vite.js': <ViteJS className='h-6 w-6' />,
  'Redux Toolkit': <Redux className='h-6 w-6' />,
  GitHub: (
    <GitHub className='h-7 w-7 rounded-full text-black dark:text-white' />
  ),
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    category: 'Web Development',
    tools: [
      'GitHub',
      'Next.js',
      'TypeScript',
      'MaterialUI',
      'Tailwind',
      'HTML',
      'CSS',
    ],
    image: '/assets/images/projects/id1/1.jpg',
    description:
      'Personal portfolio that highlights my expertise across business development, product management, UI/UX design, and frontend engineering. Designed as both a technical and creative hub, it demonstrates my ability to bridge strategy, design, and implementation through clean layouts, responsive components, and thoughtful user experience. The site not only presents my professional journey and key projects but also reflects my branding skills and attention to detail, serving as a comprehensive representation of my work and the value I bring to collaborative, impact‑driven initiatives.',
    primaryLink: 'https://japheth-oruko-portfolio.vercel.app/',
    secondaryLink: 'https://github.com/OJ254/japheth-oruko-portfolio',
    tags: [
      'Portfolio',
      'UI/UX Design',
      'Product Management',
      'Web Development',
      'Work Samples',
    ],
  },

  {
    id: 2,
    title: 'Ticet EDU Design System',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id2/1.jpg',
    description:
      'The Ticet EDU Design Kit is a comprehensive UI/UX toolkit created to support the development of Ticet EDU’s web platform. It includes a fully structured library of reusable components, responsive layouts, typography systems, color palettes, icons, and interactive elements designed for seamless user experiences. The kit emphasizes clarity, accessibility, and consistency, enabling rapid prototyping and ensuring a visually cohesive platform.\n' +
      '\n' +
      'Key highlights include a modular component system for courses, exercises, and community features, interactive states for buttons, forms, and navigation, as well as style guidelines for color, spacing, and typography. The design kit reflects a modern, clean, and engaging aesthetic while prioritizing usability and personalization, supporting Ticet EDU’s mission to provide a flexible and interactive learning environment.\n' +
      '\n' +
      'By using this kit, developers and designers can efficiently build and scale the platform while maintaining brand consistency and a premium user experience across all touchpoints.',
    primaryLink: '',
    secondaryLink: '',
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
    id: 3,
    title: 'Ticet EDU LXP',
    category: 'Web Development',
    tools: [
      'GitHub',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'MaterialUI',
      'Tailwind',
      'HTML',
      'CSS',
    ],
    image: '/assets/images/projects/id3/1.jpg',
    description:
      'The front end of the web application for Ticet EDU Learning Experience Platform (LXP) is built using Next.js and TypeScript, with a strong focus on performance, scalability, and clean, maintainable code. The application integrates securely with backend APIs to fetch and manage dynamic content such as courses, users, and learning resources.\n' +
      '\n' +
      'Redux is used for state management to ensure predictable data flow and a smooth user experience across the platform. The user interface is implemented using Tailwind CSS and Material UI, enabling responsive layouts, consistent styling, and rapid development. Core HTML and CSS best practices are applied to ensure accessibility, semantic structure, and cross-browser compatibility.\n' +
      '\n' +
      'The result is a modern, responsive, and user-focused learning platform that balances strong engineering foundations with polished UI/UX execution.',
    primaryLink: 'https://ticetedu.com/',
    secondaryLink: '',
    tags: [
      'Performance Optimization',
      'Responsive Design',
      'Scalable Architecture',
      'User-Centric Design',
      'Learning Management Experience (LXP)',
      'Performance Optimization',
      'State Management',
    ],
  },

  {
    id: 4,
    title: 'Ticet EDU LXP - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id4/1.jpg',
    description:
      'The Ticet EDU Learning Experience Platform (LXP) is a personalized, interactive web platform designed to enhance collaborative learning. The design focuses on intuitive navigation, engagement, and accessibility, with a consistent visual language built in Figma for rapid prototyping and seamless handoff to developers.\n' +
      '\n' +
      'The interface incorporates responsive layouts, modular components, and interactive states, enabling learners to follow flexible learning paths and access dynamic, AI-driven content. Attention to typography, color, spacing, and motion ensures clarity and usability, while dashboards and analytics provide actionable insights for both learners and educators.\n' +
      '\n' +
      'The result is a modern, engaging, and scalable learning experience that balances aesthetic design with functional usability across devices.',
    primaryLink: '',
    secondaryLink: '',
    tags: [
      'LearningExperienceDesign',
      'UXDesignForEdTech',
      'FigmaDesignSystem',
      'ResponsiveUI',
      'InteractiveLearning',
      'ScalableDesign',
      'UserCentricDesign',
    ],
  },

  {
    id: 5,
    title: 'Ticet EDU Website',
    category: 'Web Development',
    tools: ['GitHub', 'Vite.js', 'JavaScript', 'Tailwind', 'HTML', 'CSS'],
    image: '/assets/images/projects/id5/1.jpg',
    description:
      'Ticet EDU is a collaborative learning platform designed to transform education by merging innovation with community-driven engagement. Built with modern web technologies including GitHub, Vite.js, JavaScript, Tailwind, HTML, and CSS, the project emphasizes speed, scalability, and responsive design. The platform provides an interactive environment where educators, learners, and stakeholders connect seamlessly, making education more accessible and impactful.\n' +
      '\n' +
      'This project also reflects my focus on bridging technical development with user experience. From structuring reusable components to crafting intuitive layouts, Ticet EDU demonstrates my ability to integrate branding, design systems, and frontend engineering into a cohesive product. It stands as both a technical showcase and a mission-driven initiative to empower education through innovation',
    primaryLink: 'https://ticet-edu-website.vercel.app/',
    secondaryLink: 'https://github.com/OJ254/ticet-edu-website',
    tags: ['WebDev', 'ResponsiveDesign', 'LandingPage'],
  },

  {
    id: 6,
    title: 'Ticet EDU Website - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id6/1.jpg',
    description:
      'The design process for Ticet EDU began in Figma, where I created a structured system of wireframes, mockups, and interactive prototypes to guide development. The goal was to balance clarity, accessibility, and modern aesthetics while ensuring the platform could scale across devices. Each screen was carefully mapped to highlight the user journey—from the landing page to deeper content sections—emphasizing intuitive navigation and clean visual hierarchy.\n' +
      '\n' +
      'Using Figma’s component-based workflow, I built reusable UI elements such as buttons, cards, and navigation bars, styled consistently with Tailwind-inspired design tokens. This allowed rapid iteration and ensured design fidelity during handoff to development. Prototypes showcased responsive layouts, animated transitions, and interactive states, giving stakeholders a realistic preview of the final experience before coding began.',
    primaryLink:
      'https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=105-985',
    secondaryLink:
      'https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6210-36526&t=DZedl3Y68or48MTT-1',
    tags: [
      'LearningExperienceDesign',
      'UXDesignForEdTech',
      'FigmaDesignSystem',
      'ResponsiveUI',
      'InteractiveLearning',
      'ScalableDesign',
      'UserCentricDesign',
    ],
  },

  {
    id: 7,
    title: 'Ticet EDU LMS - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id7/1.jpg',
    description:
      'The Ticet EDU LMS project focused on designing a modern, learner-centered interface that balances clarity, accessibility, and engagement. Using Figma, I developed wireframes, high-fidelity mockups, and interactive prototypes to map the full user journey—from onboarding and course browsing to progress tracking and feedback submission.\n' +
      '\n' +
      'The design system emphasized consistency and scalability, with reusable components for navigation, cards, and forms. Typography, iconography, and color palettes were carefully curated to reflect Ticet EDU’s educational mission while maintaining a clean, professional aesthetic. Interactive prototypes showcased responsive layouts and micro-interactions, enabling stakeholders to experience the platform’s flow before development began.\n' +
      '\n' +
      'This work highlights my ability to translate educational goals into intuitive digital experiences, ensuring that both learners and educators can interact with the LMS seamlessly. The Figma prototypes served as a blueprint for development, bridging design vision with technical execution.',
    primaryLink: '',
    secondaryLink: '',
    tags: [
      'DesignSystems',
      'UserExperience',
      'EdTech',
      'DigitalEducation',
      'EducationDesign',
      'TechForLearning',
      'UserCentric',
    ],
  },

  {
    id: 8,
    title: 'Sample Documentation',
    category: 'Product Management',
    tools: ['Jira', 'Confluence'],
    image: '/assets/images/projects/id2/1.jpg',
    description: 'Loreis.\n' + '\n' + 'Loreis.\n' + '\n' + 'Loreis',
    primaryLink: '',
    secondaryLink: '',
    tags: ['Lorem', 'Lorem', 'Lorem'],
  },

  {
    id: 9,
    title: 'LVBICE Website - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id9/1.jpg',
    description:
      'The LVBICE Website design project in Figma focused on creating a modern, responsive interface that reflects the institution’s identity while ensuring accessibility and usability across devices. I began with wireframes to define the site’s structure and user flows, then developed high-fidelity mockups that emphasized clarity, professional branding, and intuitive navigation.\n' +
      '\n' +
      'Using Figma’s component-based system, I built reusable elements such as headers, cards, and form inputs, styled consistently with MaterialUI and Tailwind-inspired tokens. Interactive prototypes showcased responsive layouts, hover states, and micro-interactions, allowing stakeholders to preview the user journey—from landing pages to content sections—before development began.\n' +
      '\n' +
      'The prototypes served as a bridge between design and engineering, ensuring smooth handoff and fidelity in implementation. This project highlights my ability to translate institutional goals into a cohesive digital experience, combining thoughtful UI/UX design with scalable systems that support long-term growth.',
    primaryLink:
      'https://www.figma.com/design/tlz7RVpv2Rr6tGwiupmEHc/LVBIWCE---Website?node-id=5598-7991&t=kesJxF2mY6cn9tez-1',
    secondaryLink: '/',
    tags: ['UIUXDesign', 'ResponsiveDesign', 'LandingPage'],
  },

  {
    id: 10,
    title: 'LVBICE Website',
    category: 'Web Development',
    tools: ['Next.js', 'TypeScript', 'MaterialUI', 'Tailwind', 'HTML', 'CSS'],
    image: '/assets/images/projects/id10/1.jpg',
    description:
      'The LVBICE Website was developed as a modern, responsive platform to showcase institutional identity and streamline communication. Built with Next.js and TypeScript, the site emphasizes performance, scalability, and type safety. The design leverages MaterialUI and Tailwind CSS to deliver a clean, accessible interface that adapts seamlessly across devices.\n' +
      '\n' +
      'From structured layouts to reusable components, the project highlights a balance between technical precision and user-centered design. The site architecture ensures fast rendering, intuitive navigation, and a professional aesthetic aligned with LVBICE’s mission. This project demonstrates my ability to integrate branding, frontend engineering, and UI/UX principles into a cohesive digital experience.',
    primaryLink: 'https://www.lvbice.com/',
    secondaryLink: 'https://github.com/OJ254/lvbice-website',
    tags: ['WebDevelopment', 'ResponsiveDesign', 'LandingPage'],
  },

  {
    id: 11,
    title: 'Hospital Management System - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id11/1.jpg',
    description:
      'This Figma project focused on designing a user-centric Hospital Management System that streamlines clinical workflows and enhances patient care. The interface features a clean, intuitive dashboard tailored for healthcare professionals, with quick access to patient records, medical history, vitals, medication schedules, and SOAP (Subjective, Objective, Assessment, Plan) documentation.\n' +
      '\n' +
      'Created modular components for authentication, role-based access, and responsive layouts to ensure usability across devices. Each screen was optimized for clarity and speed, allowing clinicians to navigate between patient profiles, update treatment plans, and monitor health metrics with minimal friction. The design prioritizes accessibility, data visualization, and workflow efficiency—critical for high-pressure medical environments.\n' +
      '\n' +
      'This project demonstrates my ability to translate complex healthcare requirements into functional, elegant UI systems that support real-time decision-making and improve the user experience for both medical staff and administrators.',
    primaryLink:
      'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=105-985',
    secondaryLink:
      'https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=8179-2388&t=FPCj8UyIeFdOkOJr-1',
    tags: [
      'HospitalManagement',
      'HealthcareTech',
      'DigitalHealth',
      'UserCentricDesign',
    ],
  },

  {
    id: 12,
    title: 'Infobrix Insurance Website - UI/UX',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id12/1.jpg',
    description: 'Loreis',
    primaryLink:
      'https://www.figma.com/design/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23368',
    secondaryLink:
      'https://www.figma.com/proto/zNo81ytxKUm6UQ51fXWe5f/Website---Ticet-EDU?node-id=6386-23582&t=DZedl3Y68or48MTT-1',
    tags: ['Lorem', 'Lorem', 'Lorem'],
  },

  {
    id: 13,
    title: 'Event Listing Page',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id13/2.jpg',
    description:
      'For a UI/UX design assignment completed during a job interview, I designed a reusable Event Card component and a scalable Events Listing Page for an event discovery platform. The project focused on solving key user needs such as quickly scanning event details, identifying featured or registered events, and filtering by type, mode, and pricing. I emphasized clarity, visual hierarchy, and system‑level consistency by creating flexible card states, intuitive search and filter controls, and a highlighted upcoming event section. Delivered in Figma, the work demonstrates my ability to balance usability, structure, and design reasoning within tight timelines while producing components that can scale across multiple contexts.',
    primaryLink:
      'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=4-6598',
    secondaryLink:
      'https://www.figma.com/proto/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=9096-21636&t=FPCj8UyIeFdOkOJr-1',
    tags: [
      'UIUXDesign',
      'ConditionalRendering',
      'ComponentLogic',
      'DynamicUI',
      'UserCentricDesign',
    ],
  },

  {
    id: 14,
    title: 'World Federation for Animals Website',
    category: 'UI/UX Design',
    tools: ['Figma'],
    image: '/assets/images/projects/id14/1.jpg',
    description:
      'The World Federation for Animals Website was designed in Figma to promote global animal welfare through a clean, accessible, and emotionally resonant interface. The homepage features both light and dark themes, showcasing a flexible design system that adapts to user preferences while maintaining visual clarity. The layout guides visitors through key sections—advocacy updates, global impact, and educational resources—using intuitive navigation and a strong visual hierarchy.\n' +
      '\n' +
      'I crafted reusable components and responsive layouts to ensure consistency across devices. The design emphasizes storytelling through imagery, typography, and structured content blocks, reinforcing the federation’s mission to amplify the voice of animals worldwide. Interactive prototypes allowed stakeholders to preview user flows and validate accessibility features before development.',
    primaryLink:
      'https://www.figma.com/design/4Nb2RIzPtQgqZMWKposjwk/Personal-Projects?node-id=6386-23676&t=FPCj8UyIeFdOkOJr-1',
    secondaryLink: '',
    tags: ['DigitalAdvocacy', 'Dark&LightTheme', 'AnimalWelfare'],
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
