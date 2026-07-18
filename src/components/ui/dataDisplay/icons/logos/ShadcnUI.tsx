import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const ShadcnUI = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-label='shadcn/ui'
      {...props}
    >
      <path
        d='M81.25 50 50 81.25'
        stroke='currentColor'
        strokeWidth='6.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M75 15.625 15.625 75'
        stroke='currentColor'
        strokeWidth='6.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ShadcnUI;
