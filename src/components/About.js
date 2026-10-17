import React from 'react';
import './About.css';
import { Container, Heading, Text, Section } from './UI';

const About = () => {
  return (
    <Section padding="lg" id="about">
      <Container size="lg">
        <div className="about-wrapper">
          {/* Left side - Image with grid pattern */}
          <div className="about-image">
            <div className="about-image-wrapper">
              <img
                src="assets/images/heart-construction.png"
                alt="À propos"
                className="about-img"
              />
            </div>
            <div className="about-grid-pattern"></div>
          </div>

          {/* Right side - Content */}
          <div className="about-content">
            <Heading level={2} color="primary">
              À propos de moi
            </Heading>

            <Text variant="body" color="secondary" size="md">
              J’ai 20 ans, je viens de Poltava en Ukraine, et je vis actuellement à Vichy (03200).
            </Text>

            <Text variant="body" color="secondary" size="md">
              Au sein de ma formation, j’étudie l’administration des réseaux et des systèmes informatiques, où j’apprends les bases du fonctionnement des réseaux, de la configuration des équipements et des concepts fondamentaux liés aux télécommunications. Mon parcours ne se limite cependant pas à ce domaine : j’ai également étudié le UI/UX design ainsi que le développement de logiciels, ce qui m’aide à avoir une vision plus large et polyvalente de l’informatique.
            </Text>

            <Text variant="body" color="secondary" size="md">
              Dans le cadre de mes études, je prévois d'effectuer un stage en avril 2027 dans une entreprise spécialisée dans l'administration des réseaux informatiques, ce qui me permettra de mettre en pratique mes compétences.
            </Text>

            <Text variant="body" color="secondary" size="md">
              Mon objectif est de rester polyvalent dans le domaine informatique, afin de pouvoir m’adapter à différents environnements techniques et professionnels.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
