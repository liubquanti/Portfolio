import React from 'react';
import './Grid.css';

const Grid = ({ 
  children, 
  cols = 2,
  gap = 'md',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`grid grid-cols-${cols} grid-gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
