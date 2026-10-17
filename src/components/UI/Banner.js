import React from 'react';
import './Banner.css';

const Banner = ({ logo, title, subtitle, onClick }) => {
  const isIcon = typeof logo === 'object' && logo.$$typeof;

  return (
    <button type="button" className="banner" onClick={onClick}>
      <div className="banner-logo">
        {isIcon ? (
          <span className="banner-icon">{logo}</span>
        ) : (
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="banner-image"
          />
        )}
      </div>
      <span className="banner-copy">
        <span className="banner-title">{title}</span>
        <span className="banner-subtitle">{subtitle}</span>
      </span>
    </button>
  );
};

export default Banner;
