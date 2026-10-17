import React, { useState } from 'react';
import './Header.css';
import { Button } from './UI';
import { TbMenu2, TbX } from 'react-icons/tb';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a className="logo" href="#">
          <img src="assets/images/favicon.png" alt="Logo" className="logo-icon" />
          <span className="logo-text">Oleh Liubchenko</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>À propos</a>
          <a href="#formations" className="nav-link" onClick={closeMenu}>Formations</a>
          <a href="#competences" className="nav-link" onClick={closeMenu}>Compétences</a>
          <a href="#projets" className="nav-link" onClick={closeMenu}>Projets</a>
          <a href="#divers" className="nav-link" onClick={closeMenu}>Divers</a>
          <a href="#video" className="nav-link" onClick={closeMenu}>Vidéo</a>
          <a href="#cv" className="nav-link" onClick={closeMenu}>CV</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
