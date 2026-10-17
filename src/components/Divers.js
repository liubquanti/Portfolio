import React, { useState } from 'react';
import './Divers.css';
import { Container, Heading, Section, BottomSheet } from './UI';
import Banner from './UI/Banner';
import { TbMoodSmile, TbStar } from 'react-icons/tb';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const hobbies = [
  {
    id: 1,
    image: 'assets/images/hobby/gr.png',
    title: 'Graphisme informatique',
    summary: 'Création de visuels et de vidéos pour le plaisir.',
    description:
      'J\'aime beaucoup le design graphique et le montage vidéo. J\'utilise principalement les logiciels Adobe Photoshop, Adobe Illustrator et Adobe Premiere Pro pour créer des visuels et des vidéos de qualité.',
  },
  {
    id: 2,
    image: 'assets/images/hobby/os.png',
    title: 'Recherche sur les systèmes d\'exploitation',
    summary: 'Étudier les OS, leur architecture et leur interface.',
    description:
      'J\'aime étudier les systèmes d\'exploitation, l\'architecture des logiciels développés pour eux, la conception et la philosophie de leur interface, ainsi que le fonctionnement du système d\'exploitation sur différents matériels.',
  },
  {
    id: 3,
    image: 'assets/images/hobby/hw.png',
    title: 'Recherche sur le matériel informatique',
    summary: 'Étudier le matériel informatique et ses propriétés.',
    description:
      'J\'aime étudier le matériel informatique et ses propriétés, ainsi que son fonctionnement dans différentes conditions.',
  },
];

const interests = [
  {
    category: 'Anime',
    items: [
      {
        id: 1,
        title: 'Initial D',
        cover: 'assets/images/divers/anime/initiald.png',
        gif: 'assets/images/divers/anime/initiald.gif',
        description:
          'J\'apprécie particulièrement Initial D pour sa représentation réaliste du sport automobile et son approche détaillée de la conduite. L\'œuvre met en avant la maîtrise technique, l\'amélioration continue et la capacité à prendre des décisions rapides dans des situations complexes, des valeurs qui résonnent fortement avec mon intérêt pour les domaines techniques.',
      },
      {
        id: 2,
        title: 'MF Ghost',
        cover: 'assets/images/divers/anime/mf-ghost.png',
        gif: 'assets/images/divers/anime/mf-ghost.gif',
        description:
          'MF Ghost m\'intéresse par sa combinaison entre technologies automobiles modernes et compétition de haut niveau. L\'anime explore l\'évolution de l\'ingénierie automobile tout en conservant l\'esprit stratégique des courses, ce qui en fait une œuvre particulièrement stimulante pour les passionnés d\'innovation et de performance.',
      },
      {
        id: 3,
        title: 'Demon Slayer',
        cover: 'assets/images/divers/anime/demon-slayer.png',
        gif: 'assets/images/divers/anime/demon-slayer.gif',
        description:
          'J\'apprécie Demon Slayer pour la qualité exceptionnelle de sa direction artistique et de son animation. Au-delà de son esthétique remarquable, l\'œuvre met en avant la persévérance, le sens des responsabilités et le dépassement de soi face à l\'adversité.',
      },
    ],
  },
  {
    category: 'Manga',
    items: [
      {
        id: 1,
        title: 'Spy x Family',
        cover: 'assets/images/divers/manga/spy-x-family.png',
        gif: 'assets/images/divers/manga/spy-x-family.gif',
        description:
          'Spy × Family se distingue par son équilibre entre humour, action et développement des personnages. J\'apprécie particulièrement la manière dont l\'œuvre explore la confiance, la coopération et l\'adaptation à travers des situations originales et créatives.',
      },
      {
        id: 2,
        title: 'Oshi No Ko',
        cover: 'assets/images/divers/manga/oshi-no-ko.png',
        gif: 'assets/images/divers/manga/oshi-no-ko.gif',
        description:
          'Oshi no Ko m\'intéresse pour son regard approfondi sur l\'industrie du divertissement et les mécanismes qui la façonnent. Le manga aborde des thématiques complexes avec nuance, tout en proposant une narration riche et une analyse pertinente des relations humaines.',
      },
      {
        id: 3,
        title: 'Subaru et Subaru',
        cover: 'assets/images/divers/manga/subaru-et-subaru.png',
        gif: 'assets/images/divers/manga/subaru-et-subaru.jpeg',
        description:
          'J\'apprécie Subaru et Subaru pour son approche centrée sur les interactions humaines et le développement personnel des personnages. L\'œuvre met en valeur l\'empathie, la compréhension mutuelle et l\'importance de la communication dans la construction des relations.',
      },
    ],
  },
  {
    category: 'Jeux vidéo',
    items: [
      {
        id: 1,
        title: 'Forza Motorsport',
        cover: 'assets/images/divers/games/forza-motorsport.png',
        gif: 'assets/images/divers/games/forza-motorsport.gif',
        description:
          'Forza Motorsport est l\'une de mes références en matière de simulation automobile. J\'apprécie son niveau de réalisme, son attention portée aux détails techniques et l\'importance accordée à la précision, à l\'analyse et à l\'amélioration continue des performances.',
      },
      {
        id: 2,
        title: 'Forza Horizon 5',
        cover: 'assets/images/divers/games/forza-horizon.png',
        gif: 'assets/images/divers/games/forza-horizon.gif',
        description:
          'Forza Horizon 5 me plaît pour son environnement ouvert richement conçu et sa capacité à combiner exploration, créativité et compétition. Le jeu offre une expérience dynamique qui valorise autant la découverte que la maîtrise de la conduite.',
      },
      {
        id: 3,
        title: 'World of Warships',
        cover: 'assets/images/divers/games/world-of-warships.png',
        gif: 'assets/images/divers/games/world-of-warships.gif',
        description:
          'J\'apprécie World of Warships pour sa dimension stratégique et tactique. Le jeu exige une bonne anticipation, une gestion efficace des ressources et une compréhension approfondie des mécaniques de jeu, ce qui en fait une expérience particulièrement engageante et enrichissante.',
      },
    ],
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const HobbyCard = ({ hobby, onClick }) => (
  <button className="hobby-card" onClick={() => onClick(hobby)}>
    <div className="hobby-card-image">
      <img src={hobby.image} alt={hobby.title} />
    </div>
    <div className="hobby-card-content">
      <h3 className="hobby-card-title">{hobby.title}</h3>
      <p className="hobby-card-summary">{hobby.summary}</p>
    </div>
  </button>
);

const InterestCarousel = ({ category, items, onItemClick }) => (
  <div className="interest-carousel">
    <div className="interest-carousel-header">
      <h3 className="interest-carousel-title">{category}</h3>
    </div>
    <div className="interest-scroll">
      {items.map((item, index) => (
        <button
          key={item.id}
          className={`interest-card ${index === 0 ? 'interest-card--featured' : 'interest-card--vertical'}`}
          onClick={() => onItemClick(item, category)}
        >
          <div className="interest-card-image">
            <img src={item.cover} alt={item.title} />
          </div>
            <div className="interest-card-info">
              <span className="interest-card-name">{item.title}</span>
            </div>
        </button>
      ))}
    </div>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Divers = () => {
  const [sheetOpen, setSheetOpen] = useState(null); // 'passtemps' | 'interets'
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [interestCategory, setInterestCategory] = useState('');

  const handleInterestClick = (item, category) => {
    setSelectedInterest(item);
    setInterestCategory(category);
  };

  return (
    <Section padding="lg" id="divers">
      <Container size="lg">
        <div className="divers-wrapper">
          <div className="divers-image">
            <div className="divers-image-wrapper">
              <img
                src="assets/images/cars.png"
                alt="Divers"
                className="divers-img"
              />
            </div>
            <div className="divers-grid-pattern"></div>
          </div>

          <div className="divers-content">
            <Heading level={2} color="primary">
              Divers
            </Heading>

            <div className="divers-banners">
              <Banner
                logo={<TbMoodSmile />}
                title="Passe-temps"
                subtitle="Sujets d'étude et passions"
                onClick={() => setSheetOpen('passtemps')}
              />
              <Banner
                logo={<TbStar />}
                title="Intérêts"
                subtitle="Loisirs et divertissements"
                onClick={() => setSheetOpen('interets')}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* ── Passe-temps Bottom Sheet ── */}
      <BottomSheet
        isOpen={sheetOpen === 'passtemps'}
        onClose={() => setSheetOpen(null)}
        title="Passe-temps"
      >
        <div className="passtemps-sheet">
          <div className="hobbies-grid">
            {hobbies.map((hobby) => (
              <HobbyCard key={hobby.id} hobby={hobby} onClick={setSelectedHobby} />
            ))}
          </div>
        </div>
      </BottomSheet>

      {/* ── Hobby detail Bottom Sheet (nested) ── */}
      {selectedHobby && (
        <BottomSheet
          isOpen={!!selectedHobby}
          onClose={() => setSelectedHobby(null)}
          title={selectedHobby.title}
        >
          <div className="hobby-sheet">
            <div className="hobby-sheet-image-wrapper">
              <img
                src={selectedHobby.image}
                alt={selectedHobby.title}
                className="hobby-sheet-image"
              />
              <div className="hobby-sheet-grid-pattern"></div>
            </div>
            <div className="hobby-sheet-content">
              <h3 className="hobby-sheet-heading">Pourquoi j'aime</h3>
              <p className="hobby-sheet-description">{selectedHobby.description}</p>
            </div>
          </div>
        </BottomSheet>
      )}

      {/* ── Intérêts Bottom Sheet ── */}
      <BottomSheet
        isOpen={sheetOpen === 'interets'}
        onClose={() => setSheetOpen(null)}
        title="Intérêts"
      >
        <div className="interets-sheet">
          {interests.map((cat) => (
            <InterestCarousel
              key={cat.category}
              {...cat}
              onItemClick={handleInterestClick}
            />
          ))}
        </div>
      </BottomSheet>

      {/* ── Interest detail Bottom Sheet (nested) ── */}
      {selectedInterest && (
        <BottomSheet
          isOpen={!!selectedInterest}
          onClose={() => setSelectedInterest(null)}
          title={selectedInterest.title}
        >
          <div className="interest-sheet">
            <div className="interest-sheet-media">
              <div className="interest-sheet-gif-wrapper">
                <img
                  src={selectedInterest.gif}
                  alt={selectedInterest.title}
                  className="interest-sheet-gif"
                />
                <div className="interest-sheet-grid-pattern"></div>
              </div>
            </div>
            <div className="interest-sheet-content">
              <h3 className="interest-sheet-heading">Pourquoi j'aime</h3>
              <p className="interest-sheet-description">{selectedInterest.description}</p>
            </div>
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default Divers;