import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const DaisyUI = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox='0 0 450 450'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-label='daisyUI'
      {...props}
    >
      <path
        opacity='0.72'
        d='M148.4 40.2c10 1.9 20.1 5.6 30.1 11.3 28.7 16.5 64.1 16.5 92.8 0 10-5.8 20.1-9.5 30.1-11.3 5.8 8.4 10.3 18.2 13.3 29.3 8.6 32 33.6 57 65.6 65.6 11.1 3 20.9 7.6 29.3 13.3-1.9 10-5.6 20.1-11.3 30.1-16.5 28.7-16.5 64.1 0 92.8 5.8 10 9.5 20.1 11.3 30.1-8.4 5.8-18.2 10.3-29.3 13.3-32 8.6-57 33.6-65.6 65.6-3 11.1-7.6 20.9-13.3 29.3-10-1.9-20.1-5.6-30.1-11.3-28.7-16.5-64.1-16.5-92.8 0-10 5.8-20.1 9.5-30.1 11.3-5.8-8.4-10.3-18.2-13.3-29.3-8.6-32-33.6-57-65.6-65.6-11.1-3-20.9-7.6-29.3-13.3 1.9-10 5.6-20.1 11.3-30.1 16.5-28.7 16.5-64.1 0-92.8-5.8-10-9.5-20.1-11.3-30.1 8.4-5.8 18.2-10.3 29.3-13.3 32-8.6 57-33.6 65.6-65.6 3-11.1 7.6-20.9 13.3-29.3Z'
        fill='url(#daisy-ui-gradient)'
      />
      <rect
        x='296'
        y='165'
        width='31'
        height='15.5'
        rx='7.75'
        transform='rotate(15 296 165)'
        fill='#FFA17A'
      />
      <rect
        x='124'
        y='173'
        width='31'
        height='15.5'
        rx='7.75'
        transform='rotate(-15 124 173)'
        fill='#FFAB89'
      />
      <rect
        x='313'
        y='253'
        width='31'
        height='15.5'
        rx='7.75'
        transform='rotate(60 313 253)'
        fill='#FFA17A'
      />
      <rect
        x='135'
        y='253'
        width='31'
        height='15.5'
        rx='7.75'
        transform='rotate(60 135 253)'
        fill='#FFAB89'
      />
      <g fill='black'>
        <rect x='118' y='196' width='58.7' height='58.7' rx='29.35' />
        <rect x='274' y='196' width='58.7' height='58.7' rx='29.35' />
      </g>
      <path
        d='M125 233.3c3.2-9.1 11.9-15.7 22.2-15.7 10.2 0 18.9 6.6 22.1 15.7-3.2 9.1-11.9 15.7-22.1 15.7-10.3 0-19-6.6-22.2-15.7Z'
        fill='#784012'
      />
      <path
        d='M282 233.4c3-9.5 11.9-16.3 22.4-16.3 10.2 0 18.9 6.5 22.1 15.6-3 9.5-11.9 16.3-22.4 16.3-10.2 0-18.9-6.5-22.1-15.6Z'
        fill='#784012'
      />
      <circle cx='140.8' cy='211.6' r='11.7' fill='white' />
      <circle cx='162.8' cy='227.6' r='5.9' fill='white' />
      <circle cx='297.3' cy='211.6' r='11.7' fill='white' />
      <circle cx='319.4' cy='227.6' r='5.9' fill='white' />
      <path
        d='M207.9 250.9c4.1 4.6 11.4 7.8 17.6 7.8s13.5-3.2 17.6-7.8'
        stroke='#D05B34'
        strokeWidth='12'
        strokeLinecap='round'
      />
      <defs>
        <radialGradient
          id='daisy-ui-gradient'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(40 40) rotate(45) scale(523)'
        >
          <stop stopColor='#FFE600' />
          <stop offset='1' stopColor='#FFA573' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DaisyUI;
