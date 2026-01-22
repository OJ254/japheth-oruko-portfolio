import React from 'react';

const CalendlyLogo: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='cursor-pointer transition-transform duration-300 hover:scale-110'
    {...props}
  >
    <rect width='24' height='24' rx='6' fill='#006BFF' />
    <path
      d='M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.4806 20 14.8626 19.5857 16.0354 18.8675L14.8596 17.0706C14.0166 17.5856 13.0228 17.8824 12 17.8824C8.74517 17.8824 6.11765 15.2548 6.11765 12C6.11765 8.74517 8.74517 6.11765 12 6.11765C15.2548 6.11765 17.8824 8.74517 17.8824 12H12V14.1176H20C20 8.68629 16.4183 4 12 4Z'
      fill='white'
    />
  </svg>
);

export default CalendlyLogo;
