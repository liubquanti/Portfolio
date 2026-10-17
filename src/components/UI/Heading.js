import React from 'react';
import './Heading.css';

const Heading = ({ 
  level = 1, 
  children, 
  color = 'primary',
  className = '',
  ...props 
}) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag 
      className={`heading heading-h${level} heading-${color} ${className}`}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
