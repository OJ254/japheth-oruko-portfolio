'use client';

import { useState, JSX, MouseEvent } from 'react';
import Image from 'next/image';
import { IconButton, Typography, Chip } from '@mui/material';
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
    link: string;
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
          className='surface text-primary-color ring-2'
        >
          <ZoomOut />
        </IconButton>

        <IconButton
          onClick={() => setZoom(prev => Math.min(4, prev + 0.2))}
          className='surface text-primary-color ring-2'
        >
          <ZoomIn />
        </IconButton>

        <IconButton
          onClick={() => setFullscreen(!fullscreen)}
          className='surface text-primary-color ring-2'
        >
          {fullscreen ? <FullscreenExit /> : <Fullscreen />}
        </IconButton>

        <IconButton
          onClick={onClose}
          className='surface text-primary-color ring-2'
        >
          <Close />
        </IconButton>
      </div>

      {/* Image */}
      <div
        className={`bg-primary-color relative flex w-full items-center justify-center ${
          fullscreen
            ? 'h-screen'
            : 'h-96 overflow-hidden md:h-[calc(100vh-16rem)]'
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
          className='object-contain transition-transform duration-100'
        />

        {/* Navigation */}
        <IconButton
          onClick={prev}
          className='surface text-primary-color absolute top-1/2 left-3 z-50 -translate-y-1/2 ring-2'
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          onClick={next}
          className='surface text-primary-color absolute top-1/2 right-3 z-50 -translate-y-1/2 ring-2'
        >
          <ArrowForwardIos />
        </IconButton>
      </div>

      {/* Project info only when NOT fullscreen */}
      {!fullscreen && (
        <div className='w-full space-y-4 p-8 md:p-12 lg:space-y-6 lg:p-16 2xl:space-y-8'>
          <div className='space-y-2 lg:space-y-2.5'>
            <Typography variant='h4' className='font-semibold'>
              {project.title}
            </Typography>
            <Typography
              variant='body2'
              className='font-semibold text-gray-600 uppercase dark:text-gray-400'
            >
              {project.category}
            </Typography>
            <div className='flex flex-wrap gap-4'>
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

          <Typography variant='body1'>{project.description}</Typography>

          <div className='flex flex-wrap gap-2'>
            {project.tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                className='bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
