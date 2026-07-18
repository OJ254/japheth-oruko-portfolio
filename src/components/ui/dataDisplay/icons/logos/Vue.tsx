import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const Vue = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-label='Vue'
      {...props}
    >
      <path d='M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z' fill='#41B883' />
      <path
        d='M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z'
        fill='#35495E'
      />
    </svg>
  );
};

export default Vue;
