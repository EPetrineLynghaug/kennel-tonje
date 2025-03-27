




import React from 'react';

const ResponsiveImage = ({ src, alt }) => {
  return (
    <div className="max-w-[500px] mx-auto">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto"
      />
    </div>
  );
};

export default ResponsiveImage;