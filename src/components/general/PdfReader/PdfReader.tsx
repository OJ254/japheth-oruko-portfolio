import React from 'react';

const PdfReader = () => {
  return (
    <iframe
      src='/documents/japheth-oruko_resume.pdf'
      title='Resume'
      width='100%'
      height='100%'
      style={{ border: 'none' }}
    />
  );
};

export default PdfReader;
