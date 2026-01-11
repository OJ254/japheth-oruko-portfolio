'use client';

import { useState, useEffect, JSX, MouseEvent } from 'react';
import Image from 'next/image';
import { IconButton, Typography, Chip } from '@mui/material';
import Link from 'next/link';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Close,
  FullscreenExit,
  Fullscreen,
  ZoomOut,
  ZoomIn,
} from '@mui/icons-material';

type ProjectDetailsProps = {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    tools: string[];
    image: string;
    tags: string[];
    primaryLink: string;
    secondaryLink: string;
  };
  toolIcons: Record<string, JSX.Element>;
  onClose?: () => void;
};

const ProjectDetails = ({
  project,
  toolIcons,
  onClose,
}: ProjectDetailsProps) => {
  const images = [
    `/assets/images/projects/id${project.id}/1.jpg`,
    `/assets/images/projects/id${project.id}/2.jpg`,
    `/assets/images/projects/id${project.id}/3.jpg`,
    `/assets/images/projects/id${project.id}/4.jpg`,
    `/assets/images/projects/id${project.id}/5.jpg`,
    `/assets/images/projects/id${project.id}/6.jpg`,
    `/assets/images/projects/id${project.id}/7.jpg`,
    `/assets/images/projects/id${project.id}/8.jpg`,
    `/assets/images/projects/id${project.id}/9.jpg`,
    `/assets/images/projects/id${project.id}/10.jpg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  // For dragging
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null
  );

  const next = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  const prev = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prev, next]);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragStart) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const onMouseUp = () => setDragStart(null);
  const onMouseLeave = () => setDragStart(null);

  const linkLabels: Record<'Web Development' | 'UI/UX Design', string[]> = {
    'Web Development': ['Project Link', 'GitHub Repo'],
    'UI/UX Design': ['Design Link', 'Prototype Link'],
  };

  // Tell TS that project.category is one of the keys
  const [primaryLabel, secondaryLabel] =
    linkLabels[project.category as 'Web Development' | 'UI/UX Design'];

  return (
    <div
      className={`flex flex-col md:flex-row ${
        fullscreen
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-black'
          : ''
      }`}
    >
      {/* Controls */}
      <div className='absolute top-2 right-2 z-50 m-4 flex gap-4'>
        <IconButton
          onClick={() => setZoom(prev => Math.max(0.5, prev - 0.2))}
          className='surface text-primary-color ring-2 transition-all duration-100 hover:scale-105'
        >
          <ZoomOut />
        </IconButton>

        <IconButton
          onClick={() => setZoom(prev => Math.min(4, prev + 0.2))}
          className='surface text-primary-color ring-2 transition-all duration-100 hover:scale-105'
        >
          <ZoomIn />
        </IconButton>

        <IconButton
          onClick={() => setFullscreen(!fullscreen)}
          className='surface text-primary-color ring-2 transition-all duration-100 hover:scale-105'
        >
          {fullscreen ? <FullscreenExit /> : <Fullscreen />}
        </IconButton>

        <IconButton
          onClick={onClose}
          className='surface text-primary-color ring-2 transition-all duration-100 hover:scale-105'
        >
          <Close />
        </IconButton>
      </div>

      {/* Image */}
      <div
        className={`relative flex w-full items-center justify-center ${
          fullscreen
            ? 'surface h-screen'
            : 'bg-primary-color h-96 overflow-hidden md:h-192'
        } rounded-l-md`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{ cursor: zoom > 1 ? 'grab' : 'default' }}
      >
        <Image
          src={images[currentIndex]}
          alt={project.title}
          fill
          style={{
            transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
          }}
          className='rounded-lg object-contain transition-transform duration-100'
        />

        {/* Navigation */}
        <IconButton
          onClick={prev}
          className='surface text-primary-color absolute top-1/2 left-3 z-50 -translate-y-1/2 ring-2 transition-all duration-100 hover:scale-105'
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          onClick={next}
          className='surface text-primary-color absolute top-1/2 right-3 z-50 -translate-y-1/2 ring-2 transition-all duration-100 hover:scale-105'
        >
          <ArrowForwardIos />
        </IconButton>
      </div>

      {/* Project info only when NOT fullscreen */}
      {!fullscreen && (
        <div className='scrollbar-custom w-full space-y-4 overflow-y-auto p-8 md:h-192 md:p-12 lg:space-y-6 lg:p-16 2xl:space-y-8'>
          <div className='space-y-2 lg:space-y-2.5'>
            <Typography variant='h4' className='font-semibold'>
              {project.title}
            </Typography>

            {/* Category - always fully visible */}
            <Typography
              variant='body2'
              className='min-w-max font-semibold text-gray-600 uppercase dark:text-gray-400'
            >
              {project.category}
            </Typography>

            {/* Link - truncated dynamically */}

            <div className='flex flex-wrap gap-x-6 gap-y-4'>
              {project.tools.map(tool => (
                <div
                  key={tool}
                  className='rounde flex items-center gap-1 space-x-1 text-sm'
                >
                  {toolIcons[tool]}
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex min-w-0 flex-1 flex-col justify-end gap-2'>
            {[
              { label: primaryLabel, url: project.primaryLink },
              { label: secondaryLabel, url: project.secondaryLink },
            ].map(
              (link, idx) =>
                link.url && (
                  <Link
                    key={idx}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Typography
                      variant='body2'
                      className='max-w-max truncate text-right font-semibold'
                    >
                      {link.label}:{' '}
                      <span className='text-primary-color'>{link.url}</span>
                    </Typography>
                  </Link>
                )
            )}
          </div>

          <Typography style={{ whiteSpace: 'pre-line' }} variant='body1'>
            {project.description}
          </Typography>

          <div className='flex flex-wrap gap-2'>
            {project.tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                className='bg-primary-color text-gray-800 dark:text-gray-200'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
