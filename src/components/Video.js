import React from 'react';
import './Video.css';
import { Section, Container, Heading, Text } from './UI';

function Video() {
  return (
    <Section padding="lg" id="video">
      <Container size="lg">
        <div className="video-wrapper">
          {/* Left side - Content */}
          <div className="video-content">
            <Heading as="h2" level="2" color="primary">
              Capsule vidéo
            </Heading>
            <Text variant="body" color="secondary">
              Ma capsules vidéo porte sur ma première année d'études à la BUT Réseaux et Télécommunications. J'y parle de mes études, des raisons pour lesquelles j'ai choisi cet établissement et de ce qui me plaît ici, des compétences que j'ai acquises et de l'objectif de mon projet professionnel.
            </Text>
          </div>

          {/* Right side - Video Player */}
          <div className="video-player-container">
            <video 
              className="video-player"
              controls
              poster="assets/images/capsule.png"
            >
              <source src="assets/videos/PPP.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo HTML5.
            </video>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Video;
