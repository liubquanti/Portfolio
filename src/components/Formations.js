import React, { useState } from 'react';
import './Formations.css';
import { Container, Heading, Section, BottomSheet, Button } from './UI';
import Banner from './UI/Banner';
import { TbDownload } from 'react-icons/tb';

const Formations = () => {
  const [selectedFormation, setSelectedFormation] = useState(null);

  const formations = [
    {
      id: 1,
      logo: 'assets/images/facility/iut.png',
      cover: 'assets/images/facility/iut-bat.jpg',
      title: 'L\'Institut Universitaire de Technologie Clermont Auvergne',
      subtitle: 'BUT Réseaux et Télécommunications',
      year: '2025 - Présent',
      diplomaStatus: 'En cours',
      formation: 'BUT Réseaux et Télécommunications',
      studentStatus: '1ère année',
      officialUrl: 'https://iut.uca.fr/',
      detailUrl: 'https://iut.uca.fr/formations/but-reseaux-et-telecommunications',
      objectif:
        'Le BUT Réseaux et Télécommunications est une formation en 3 ans, accessible après le baccalauréat. Cette formation vise à former des techniciens supérieurs compétents dans les domaines des réseaux informatiques, des télécommunications et de la cybersécurité.',
      pourquoi:
        'J\'ai décidé de suivre cette formation à l\'Institut Universitaire de Technologie d\'Aubière afin de bénéficier d\'un enseignement de qualité, fondé sur un programme pédagogique riche, complet et régulièrement mis à jour, en adéquation avec les exigences du marché du travail. Elle permet d\'acquérir aussi bien des compétences techniques que des compétences transversales essentielles, telles que la gestion de projet ou la communication.\n\nPar ailleurs, la formation intègre des périodes de stage, de l\'alternance ainsi que des projets tutorés, offrant aux étudiants l\'opportunité de mettre en pratique leurs connaissances et de renforcer leur autonomie.',
      diplomas: [],
    },
    {
      id: 2,
      logo: 'assets/images/facility/pppc.png',
      cover: 'assets/images/facility/pppc-bat.jpg',
      title: 'Collège professionnel polytechnique de Poltava',
      subtitle: 'BTS Développement de logiciels',
      year: '2021 - 2025',
      diplomaStatus: 'Obtenu',
      formation: 'BTS Développement de logiciels',
      studentStatus: 'Diplômé',
      officialUrl: 'https://sites.google.com/polytechnic.co.cc/main',
      detailUrl: 'https://sites.google.com/polytechnic.co.cc/main/%D0%B0%D0%B1%D1%96%D1%82%D1%83%D1%80%D1%96%D1%94%D0%BD%D1%82%D0%B0%D0%BC/%D0%BE%D0%B3%D0%BB%D1%8F%D0%B4-%D1%81%D0%BF%D0%B5%D1%86%D1%96%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9#h.ho48gail8chq',
      objectif:
        'La formation en Développement de Logiciels au sein du CPP est un cursus d\'études supérieures qui prépare les étudiants à devenir des techniciens compétents dans le domaine du logiciel. Accessible après le baccalauréat, cette formation couvre les fondamentaux de la programmation, de la conception, du développement et de la maintenance de logiciels.',
      pourquoi:
        'J\'ai choisi cette formation en Développement de logiciels au sein du CPP afin d\'acquérir des compétences solides en programmation et en génie logiciel, basées sur un programme pédagogique adapté aux tendances actuelles de l\'industrie informatique.\n\nCette spécialisation couvre les principes fondamentaux de la création de logiciels et permet aux étudiants de travailler sur des projets concrets, comme des applications, des jeux vidéo ou des outils interactifs développés dans le cadre des cours et des pratiques.\n\nDe plus, la formation donne l\'opportunité de participer à des projets pratiques où les étudiants mettent en œuvre leurs connaissances et renforcent leur autonomie professionnelle, tout en développant des logiciels qui peuvent être présentés dans des concours ou des manifestations scientifiques.',
      diplomas: [
        {
          id: 1,
          image: 'assets/images/education/pre.png',
          description: 'Diplôme de baccalauréat professionnel en développement de logiciels.',
          downloadUrl: 'assets/docs/Diploma_of_Professional_Junior_Bachelor_X25053863_14_01_2026,_074959.pdf',
          downloadName: 'Diploma_of_Professional_Junior_Bachelor_X25053863_14_01_2026_074959.pdf',
        },
        {
          id: 2,
          image: 'assets/images/education/spec.png',
          description: 'Diplôme professionnel d\'opérateur en saisie informatique.',
          downloadUrl: 'assets/docs/Certificate_of_awarding_improving_of_trade_qualification_P23021438.pdf',
          downloadName: 'Certificate_of_awarding_improving_of_trade_qualification_P23021438.pdf',
        },
        {
          id: 3,
          image: 'assets/images/education/full.png',
          description: 'Diplôme d\'études secondaires générales complètes.',
          downloadUrl: 'assets/docs/Certificate_of_Complete_General_Secondary_Education_TA54278917_14.pdf',
          downloadName: 'Certificate_of_Complete_General_Secondary_Education_TA54278917_14.pdf',
        },
      ],
    },
  ];

  const handleFormationClick = (formation) => {
    setSelectedFormation(formation);
  };

  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section padding="lg" id="formations">
      <Container size="lg">
        <div className="formations-wrapper">
          <div className="formations-content">
            <Heading level={2} color="primary">
              Mes Formations
            </Heading>

            <div className="formations-buttons">
              {formations.map((formation) => (
                <Banner
                  key={formation.id}
                  logo={formation.logo}
                  title={formation.title}
                  subtitle={formation.subtitle}
                  onClick={() => handleFormationClick(formation)}
                />
              ))}
            </div>
          </div>

          <div className="formations-image">
            <div className="formations-image-wrapper">
              <img
                src="assets/images/hat.png"
                alt="Mes Formations"
                className="formations-img"
              />
            </div>
            <div className="formations-grid-pattern"></div>
          </div>
        </div>
      </Container>

      {selectedFormation && (
        <BottomSheet
          isOpen={!!selectedFormation}
          onClose={() => setSelectedFormation(null)}
          title={selectedFormation.title}
        >
          <div className="formation-modal-wrapper">
            <div className="formation-modal-media-wrapper">
              <div className="formation-info-grid">
              <div className="formation-info-item">
                <span className="formation-info-label">Année</span>
                <span className="formation-info-value">
                  {selectedFormation.year}
                </span>
              </div>
              <div className="formation-info-item">
                <span className="formation-info-label">Obtention du diplôme</span>
                <span className="formation-info-value">
                  {selectedFormation.diplomaStatus}
                </span>
              </div>
              <div className="formation-info-item">
                <span className="formation-info-label">Formation</span>
                <span className="formation-info-value">
                  {selectedFormation.formation}
                </span>
              </div>
              <div className="formation-info-item">
                <span className="formation-info-label">Statut de l'étudiant</span>
                <span className="formation-info-value">
                  {selectedFormation.studentStatus}
                </span>
              </div>
              </div>

              <div className="formation-modal-media">
                <div className="formation-modal-image">
                  <div className="formation-modal-image-wrapper">
                    <img
                      src={selectedFormation.cover}
                      alt={selectedFormation.title}
                      className="formation-modal-logo"
                    />
                  </div>

                  <div className="formation-modal-grid-pattern"></div>
                </div>
              </div>
            </div>

            <div className="formation-modal-content">
              <div className="formation-links">
                <Button
                  variant="primary"
                  size="md"
                  className="formation-link-button"
                  onClick={() => handleOpenLink(selectedFormation.officialUrl)}
                >
                  Site officiel
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="formation-link-button formation-link-button--secondary"
                  onClick={() => handleOpenLink(selectedFormation.detailUrl)}
                >
                  Formation detaillee
                </Button>
              </div>
              <h3 className="formation-section-heading">Objectif de la Formation</h3>
              <p className="formation-text">{selectedFormation.objectif}</p>

              <h3 className="formation-section-heading">
                Pourquoi {selectedFormation.id === 1 ? 'l\'IUT' : 'le CPP'} ?
              </h3>
              <p className="formation-text">{selectedFormation.pourquoi}</p>
            </div>
          </div>

          {selectedFormation.diplomas && selectedFormation.diplomas.length > 0 && (
            <div className="formation-diplomas-section">
              <h3 className="formation-section-heading formation-section-heading-new-line">Diplômes obtenus</h3>

              <div className="diplomas-scroll">
                {selectedFormation.diplomas.map((diploma) => (
                  <div key={diploma.id} className="diploma-card">
                    <div className="diploma-image">
                      <img
                        src={diploma.image}
                        alt={diploma.description}
                      />
                    </div>
                    <p className="diploma-description">
                      {diploma.description}
                    </p>
                    <a
                      href={diploma.downloadUrl}
                      download={diploma.downloadName}
                      className="diploma-download-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbDownload />
                      Télécharger
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </BottomSheet>
      )}
    </Section>
  );
};

export default Formations;
