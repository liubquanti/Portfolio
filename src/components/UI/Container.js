import React from 'react';
import './Container.css';

const Container = ({ children, size = 'lg', className = '', ...props }) => {
  return (
    <div className={`container container-${size} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
