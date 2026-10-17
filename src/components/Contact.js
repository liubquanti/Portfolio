import React from 'react';
import './Contact.css';
import { Container, Heading, Text, Section } from './UI';
import { TbBrandLinkedin, TbBrandGithub, TbBrandFigma } from 'react-icons/tb';

const Contact = () => {
  return (
    <Section padding="lg" id="contact">
      <Container size="lg">
        <div className="contact-wrapper">
          {/* Left side - Content */}
          <div className="contact-content">
            <Heading level={2} color="primary">
              Me contacter
            </Heading>

            <Text variant="body" color="secondary" size="md">
              Je suis toujours disponible et intéressé par de nouvelles opportunités 
              et collaborations. N'hésitez pas à me poser vos questions - je m'efforcerai 
              de vous répondre dans les meilleurs délais. Que ce soit pour discuter d'un 
              projet, d'une offre d'emploi ou simplement pour échanger idées et expériences, 
              je serais ravi de vous écouter.
            </Text>
          </div>

          {/* Right side - Contact info */}
          <div className="contact-info">
            <div className="contact-item">
              <Text variant="subtitle" color="tertiary" size="sm">
                Téléphone
              </Text>
              <a href="tel:+33781199827" className="contact-link">
                +33 7 81 19 98 27
              </a>
            </div>

            <div className="contact-item">
              <Text variant="subtitle" color="tertiary" size="sm">
                Email
              </Text>
              <a href="mailto:oleh.liubchenko@etu.uca.fr" className="contact-link">
                oleh.liubchenko@etu.uca.fr
              </a>
            </div>

            <div className="contact-item">
              <Text variant="subtitle" color="tertiary" size="sm">
                Réseaux sociaux
              </Text>
              <div className="contact-socials">
                <a 
                  href="https://linkedin.com/in/liubquanti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  title="LinkedIn"
                >
                  <TbBrandLinkedin />
                </a>
                <a 
                  href="https://github.com/liubquanti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  title="GitHub"
                >
                  <TbBrandGithub />
                </a>
                <a 
                  href="https://figma.com/@liubquanti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  title="Figma"
                >
                  <TbBrandFigma />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
