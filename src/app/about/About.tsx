// src/app/about/About.tsx

import { Divider, Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Schedule, WorkOutline } from '@mui/icons-material';

const About = () => {
  const about = 'About Me';
  const skills = 'Skills';
  const philosophy = 'Design Philosophy';
  const pricing = 'Pricing';

  return (
    <Box className='flex h-full flex-col gap-4'>
      <div className='mb-8'>
        <div className='p-8'>
          <Typography variant='h5' className='font-semibold tracking-wider'>
            <span className='text-primary-color'>{about.charAt(0)}</span>
            {about.slice(1)}
          </Typography>
        </div>
        <Divider className='w-full' />
        <div className='flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          <div className='flex w-full flex-col p-8 pb-0'>
            <Typography variant='h6'>Hello! I’m Japheth Oruko</Typography>
            <Typography variant='body1'>
              An experienced UI/UX Designer, Product Owner, and Frontend
              Developer from Nairobi, Kenya. I have over 8 years of experience
              creating thoughtful digital experiences that balance design and
              functionality. I enjoy working across the product lifecycle, from
              concept and design to implementation, and I’m always happy to
              connect and collaborate.
            </Typography>
          </div>

          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          <div className='flex h-full w-full flex-col justify-between space-y-4 p-8 pb-0'>
            <Typography variant='body1' className='flex justify-between'>
              <span className='bg-primary-color rounded-sm px-2'>Age:</span> 35
              Years
            </Typography>
            <Divider className='w-full' />
            <Typography variant='body1' className='flex justify-between'>
              <span className='bg-primary-color rounded-sm px-2'>Gender:</span>
              Male (He/Him)
            </Typography>
            <Divider className='w-full' />
            <Typography variant='body1' className='flex justify-between'>
              <span className='bg-primary-color rounded-sm px-2'>
                Residence:
              </span>
              Nairobi, Kenya
            </Typography>
            <Divider className='w-full' />
            <Typography variant='body1' className='flex justify-between'>
              <span className='bg-primary-color rounded-sm px-2'>
                Full Time:
              </span>{' '}
              Available
            </Typography>
            <Divider className='w-full' />
            <Typography variant='body1' className='flex justify-between'>
              <span className='bg-primary-color rounded-sm px-2'>
                Freelance:
              </span>{' '}
              Available
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <div className='p-8'>
          <Typography variant='h5' className='font-semibold tracking-wider'>
            <span className='text-primary-color'>{philosophy.charAt(0)}</span>
            {philosophy.slice(1)}
          </Typography>
        </div>
        <Divider className='w-full' />
        <div className='mb-8 w-full p-8 pb-0'>
          <Typography variant='body1'>
            My design philosophy centers on creating digital experiences that
            are both beautiful and functional. I focus on clarity,
            accessibility, and intuitive interactions, ensuring that every
            element serves a purpose and enhances usability. By understanding
            user needs and business goals, I craft interfaces that are visually
            appealing, consistent, and easy to navigate, while maintaining
            flexibility for future growth and innovation. Collaboration,
            iteration, and empathy guide my process, allowing me to deliver
            designs that are engaging, meaningful, and aligned with the overall
            product vision.
          </Typography>
        </div>
      </div>

      <div className='mb-8'>
        <div className='p-8'>
          <Typography variant='h5' className='font-semibold tracking-wider'>
            <span className='text-primary-color'>{skills.charAt(0)}</span>
            {skills.slice(1)}
          </Typography>
        </div>

        <Divider className='w-full' />

        <div className='flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Left Column */}
          <div className='flex w-full flex-col space-y-4 p-8 pb-0'>
            {[
              { name: 'Figma', level: 90 },
              { name: 'Adobe XD', level: 60 },
              { name: 'Sketch', level: 50 },
              { name: 'UX Research', level: 85 },
              { name: 'UI Design', level: 95 },
              { name: 'Design Systems', level: 85 },
              { name: 'Prototyping', level: 90 },
              { name: 'Wireframing', level: 80 },
            ].map(skill => (
              <div key={skill.name} className='space-y-1'>
                <Typography
                  variant='body1'
                  className='flex justify-between font-medium'
                >
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </Typography>
                <div className='h-1 w-full rounded-full bg-white/10'>
                  <div
                    className='bg-primary-color h-1 rounded-full transition-all'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Divider */}
          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Right Column */}
          <div className='flex w-full flex-col space-y-4 p-8 py-4 pb-0 md:py-8 lg:py-4 xl:py-8'>
            {[
              { name: 'React / Next.js', level: 75 },
              { name: 'Material UI', level: 80 },
              { name: 'Tailwind CSS', level: 85 },
              { name: 'Git', level: 75 },
              { name: 'GitHub', level: 70 },
              { name: 'Bitbucket', level: 65 },
              { name: 'Jira', level: 85 },
              { name: 'Confluence', level: 90 },
            ].map(skill => (
              <div key={skill.name} className='space-y-1'>
                <Typography
                  variant='body1'
                  className='flex justify-between font-medium'
                >
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </Typography>
                <div className='h-1 w-full rounded-full bg-white/10'>
                  <div
                    className='bg-primary-color h-1 rounded-full transition-all'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className='p-8'>
          <Typography variant='h5' className='font-semibold tracking-wider'>
            <span className='text-primary-color'>{pricing.charAt(0)}</span>
            {pricing.slice(1)}
          </Typography>
        </div>

        <Divider className='w-full' />

        <div className='mb-8 flex w-full flex-col md:flex-row lg:flex-col xl:flex-row'>
          {/* Freelance Tier */}
          <div className='surface m-8 mb-0 flex flex-1 flex-col items-center gap-4 rounded-md p-8 pb-0 shadow-md'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <Schedule />
            </div>

            <Typography variant='h6' className='text-center font-semibold'>
              Freelance
            </Typography>

            <Divider className='my-2 w-full' />

            <Typography variant='body1' className='text-center text-sm'>
              $20–$60 per hour depending on project complexity. Ideal for
              smaller projects, UI audits, and interactive prototypes.
            </Typography>
          </div>

          {/* Divider */}
          <Divider
            orientation='vertical'
            flexItem
            className='hidden md:block lg:hidden xl:block'
          />

          {/* Full Time Tier */}
          <div className='surface m-8 mb-0 flex flex-1 flex-col items-center gap-4 rounded-md p-8 shadow-md'>
            <div className='bg-primary-color flex h-16 w-16 items-center justify-center rounded-full'>
              <WorkOutline />
            </div>
            <Typography variant='h6' className='text-center font-semibold'>
              Full Time
            </Typography>

            <Divider className='my-2 w-full' />

            <Typography variant='body1' className='text-center text-sm'>
              $2,000–$5,000 per month depending on role and project. Suitable
              for long-term engagement with full design & development support.
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
