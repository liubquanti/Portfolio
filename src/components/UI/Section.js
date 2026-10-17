import React from 'react';
import './Section.css';

const Section = ({ 
  children, 
  padding = 'lg',
  backgroundColor,
  className = '',
  id,
  ...props 
}) => {
  const style = backgroundColor ? { backgroundColor } : {};
  
  return (
    <section 
      className={`section section-p-${padding} ${className}`}
      style={style}
      id={id}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
