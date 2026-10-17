import React from 'react';
import './Text.css';

const Text = ({ 
  children, 
  variant = 'body',
  color = 'primary',
  size = 'md',
  className = '',
  as = 'p',
  ...props 
}) => {
  const Component = as;
  
  return (
    <Component 
      className={`text text-${variant} text-${color} text-${size} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
