import React from 'react';
import './Hero.css';
import { Button, Heading, Text, Section, Container } from './UI';
import { TbCode, TbAffiliate, TbUxCircle } from 'react-icons/tb';

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:oleh.liubchenko@etu.uca.fr';
  };

  const handleCvClick = () => {
    window.open('/assets/docs/Oleh_Liubchenko_CV.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <Section padding="none" className="hero-section">
      <Container size="lg" className="hero-container">
        <div className="hero-content">
          <Text variant="subtitle" color="tertiary" size="md">
            La polyvalence, c'est une attitude
          </Text>
          <Heading level={1} color="primary">
            Oleh Liubchenko
          </Heading>
          <Text variant="body" color="secondary" size="md">
            Étudiant en 1ère année de BUT Réseaux et Télécommunications.
          </Text>
          <div className="hero-buttons">
            <Button variant="primary" size="md" onClick={handleContactClick}>
              Me contacter
            </Button>
            <Button variant="secondary" size="md" onClick={handleCvClick}>
              Voir mon CV
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <img
              src="assets/images/avatar-main.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="geometric-elements">
            <div className="shape shape-1">
                <TbUxCircle size={24} strokeWidth={1} className='shape-icon'/>
                <Text variant="caption" color="tertiary" size="sm" className="shape-label">
                    UI/UX
                </Text>
            </div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3">
                <TbCode size={24} strokeWidth={1} className='shape-icon'/>
                <Text variant="caption" color="tertiary" size="sm" className="shape-label">
                    Code
                </Text>
            </div>
            <div className="shape shape-4">
                <TbAffiliate size={24} strokeWidth={1} className='shape-icon'/>
                <Text variant="caption" color="tertiary" size="sm" className="shape-label">
                    Réseaux
                </Text>
            </div>
            <div className="shape shape-5"></div>
            <div className="grid-pattern"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
