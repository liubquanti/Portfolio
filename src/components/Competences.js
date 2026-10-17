import React, { useState } from 'react';
import './Competences.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import {
  TbUsers,
  TbCode,
  TbLanguage,
  TbSettingsCog,
  TbStackBackward,
  TbArrowsShuffle,
  TbChecklist,
  TbHourglass,
  TbDeviceDesktop,
  TbShieldCheck,
  TbNetwork,
  TbUxCircle,
  TbAffiliate,
  TbPhone,
  TbAntenna,
  TbBrandFlutter,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandPython,
  TbBrandGit,
  TbTerminal,
  TbBrandWindows,
  TbBrandApple,
  TbBrandDocker,
  TbBrandPowershell,
  TbDeviceDesktopAnalytics,
  TbServer,
  TbWifi,
  TbTopologyStar3,
  TbDeviceTv,
  TbPhoneCall,
  TbPalette,
  TbLetterC,
  TbBrandFigma,
  TbBrandGoogle,
  TbPackage,
  TbBrandDebian,
  TbWaveSine,
  TbPrismLight,
} from 'react-icons/tb';
import BottomSheet from './UI/BottomSheet';
import { TbDownload } from 'react-icons/tb';

const Competences = () => {
  const [openSheet, setOpenSheet] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const languages = [
    { id: 'uk', name: 'Ukrainien', note: 'Langue maternelle', level: 6 },
    { id: 'ru', name: 'Russe', note: 'Deuxième langue', level: 6 },
    { id: 'fr', name: 'Français', note: 'B2 - Intermédiaire supérieur', level: 4 },
    { id: 'en', name: 'Anglais', note: 'B2 - Intermédiaire supérieur', level: 4 },
    { id: 'de', name: 'Allemand', note: 'A1 - Débutant', level: 1 },
  ];

  const humaines = [
    {
      id: 1,
      title: 'Polyvalence',
      description: 'Je m\'efforce d\'être polyvalent afin de mieux comprendre mon domaine.',
      icon: <TbStackBackward />,
    },
    {
      id: 2,
      title: 'Adaptabilité',
      description: 'En m\'organisant, je m\'adapte simplement à différentes conditions.',
      icon: <TbArrowsShuffle />,
    },
    {
      id: 3,
      title: 'Organisation',
      description: 'J\'organise clairement ma vie et je suis toujours là où je dois être.',
      icon: <TbChecklist />,
    },
    {
      id: 4,
      title: 'Patience',
      description: 'Je peaufine mon travail jusqu\'à ce qu\'il réponde aux exigences.',
      icon: <TbHourglass />,
    },
  ];

  const techniques = [
    {
      id: 'uiux',
      title: 'UI/UX',
      description: 'Concevoir des interfaces utilisateur intuitives et esthétiques.',
      icon: <TbUxCircle />,
      obtained: 'Autodidacte, utilisation de ressources en ligne et pratique constante dans le domaine grâce à la réalisation de mes propres projets.',
      skills: ['Design propriétaire', 'Figma', 'Material Design', 'Fluent Design', 'Human Interface'],
    },
    {
      id: 'net',
      title: 'Réseaux',
      description: 'Configurer et analyser des infrastructures réseau.',
      icon: <TbAffiliate />,
      obtained: 'Formation au BUT Réseaux et Télécommunications.',
      skills: ['LAN', 'VLAN', 'DHCP', 'DNS', 'Wireshark', 'Routage', 'VPN', 'Wi-Fi'],
    },
    {
      id: 'dev',
      title: 'Développement',
      description: 'Créer des applications web et mobiles fiables et maintenables.',
      icon: <TbCode />,
      obtained: 'Formation au BTS Développement de logiciels et au BUT Réseaux et Télécommunications, ainsi que la réalisation de projets personnels.',
      skills: ['Dart', 'Flutter', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'Python', 'C', 'Git'],
    },
    {
      id: 'os',
      title: 'Système',
      description: 'Gérer et configurer différents systèmes d\'exploitation.',
      icon: <TbDeviceDesktop />,
      obtained: 'Formation au BUT Réseaux et Télécommunications, et travaux de recherche personnels.',
      skills: ['Windows', 'Linux', 'macOS', 'Bash', 'PowerShell', 'Virtualisation', 'VirtualBox', 'Workstation', 'Docker'],
    },
    {
      id: 'phone',
      title: 'Téléphonie',
      description: 'Comprendre les principes de base de la téléphonie.',
      icon: <TbPhone />,
      obtained: 'Formation au BUT Réseaux et Télécommunications.',
      skills: ['SIP', 'VoIP', 'PBX', 'DECT'],
    },
    {
      id: 'telecom',
      title: 'Télécommunications',
      description: 'Comprendre les principes de base des télécommunications.',
      icon: <TbAntenna />,
      obtained: 'Formation au BUT Réseaux et Télécommunications.',
      skills: ['Signaux', 'Ethernet', 'Fibre optique', 'Radio', 'Télévision'],
    },
  ];

  const skillIcons = {
    'Design propriétaire': <TbPalette />,
    Figma: <TbBrandFigma />,
    'Material Design': <TbBrandGoogle />,
    'Fluent Design': <TbBrandWindows />,
    'Human Interface': <TbBrandApple />,
    LAN: <TbNetwork />,
    VLAN: <TbTopologyStar3 />,
    DHCP: <TbServer />,
    DNS: <TbServer />,
    Wireshark: <TbPackage />,
    Routage: <TbAffiliate />,
    VPN: <TbShieldCheck />,
    'Wi-Fi': <TbWifi />,
    Dart: <TbBrandFlutter />,
    Flutter: <TbBrandFlutter />,
    HTML: <TbBrandHtml5 />,
    CSS: <TbBrandCss3 />,
    JavaScript: <TbBrandJavascript />,
    React: <TbBrandReact />,
    'Node.js': <TbBrandNodejs />,
    PHP: <TbBrandPhp />,
    Python: <TbBrandPython />,
    C: <TbLetterC />,
    Git: <TbBrandGit />,
    Windows: <TbBrandWindows />,
    Linux: <TbBrandDebian />,
    macOS: <TbBrandApple />,
    Bash: <TbTerminal />,
    PowerShell: <TbBrandPowershell />,
    Virtualisation: <TbDeviceDesktopAnalytics />,
    VirtualBox: <TbDeviceDesktop />,
    Workstation: <TbDeviceDesktop />,
    Docker: <TbBrandDocker />,
    SIP: <TbPhoneCall />,
    VoIP: <TbPhoneCall />,
    PBX: <TbPhone />,
    DECT: <TbPhone />,
    Signaux: <TbWaveSine />,
    Ethernet: <TbNetwork />,
    'Fibre optique': <TbPrismLight />,
    Radio: <TbAntenna />,
    Télévision: <TbDeviceTv />,
  };

  const diplomas = [
    {
      id: 1,
      image: 'assets/images/education/dup.png',
      description: 'Diplôme universitaire passerelle B2 en français.',
      downloadUrl: 'assets/docs/DUP_B2.pdf',
      downloadName: 'DUP_B2.pdf',
    },
    {
      id: 2,
      image: 'assets/images/education/eng.png',
      description: 'Certificat de compétence en anglais B2.',
      downloadUrl: 'assets/docs/English_B2.pdf',
      downloadName: 'English_B2.pdf',
    },
  ];

  const openLanguages = () => setOpenSheet('langues');
  const openHumaines = () => setOpenSheet('humaines');
  const openTechniques = () => setOpenSheet('techniques');
  const closeSheet = () => setOpenSheet(null);

  const handleOpenTech = (tech) => {
    setSelectedTech(tech);
  };

  const handleCloseTech = () => setSelectedTech(null);

  return (
    <Section padding="lg" id="competences">
      <Container size="lg">
        <div className="competences-wrapper">
          <div className="competences-image">
            <div className="competences-image-wrapper">
              <img
                src="assets/images/hardware.png"
                alt="Mes Compétences"
                className="competences-img"
              />
            </div>
            <div className="competences-grid-pattern"></div>
          </div>

          <div className="competences-content">
            <Heading level={2} color="primary">
              Mes Compétences
            </Heading>

            <div className="competences-banners">
              <Banner
                logo={<TbSettingsCog />}
                title="Techniques"
                subtitle="Savoir faire"
                onClick={openTechniques}
              />
              <Banner
                logo={<TbLanguage />}
                title="Langues"
                subtitle="Savoir communiquer"
                onClick={openLanguages}
              />
              <Banner
                logo={<TbUsers />}
                title="Humaines"
                subtitle="Savoir être"
                onClick={openHumaines}
              />
            </div>
          </div>
        </div>
      </Container>
      {openSheet === 'langues' && (
        <BottomSheet isOpen={true} onClose={closeSheet} title="Langues">
          <div className="languages-and-diplomas">
            <div className="languages-block">
              <div className="languages-row">
                {languages.map((lang) => (
                  <div key={lang.id} className="language-item">
                    <div className="language-meta">
                      <div className="language-name">{lang.name}</div>
                      <div className="language-note">{lang.note}</div>
                    </div>

                    <div className="language-level">
                      {lang.level === 6 ? (
                        <div className={`level-block level-block--active level-block--full`} />
                      ) : (
                        Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={`level-block ${i < lang.level ? 'level-block--active' : ''}`}
                          />
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="competences-diplomas-section">
              <h3 className="formation-section-heading">Diplômes</h3>
              <div className="diplomas-scroll">
                {diplomas.map((d) => (
                  <div key={d.id} className="diploma-card">
                    <div className="diploma-image">
                      <img src={d.image} alt={d.description} />
                    </div>
                    <p className="diploma-description">{d.description}</p>
                    <a
                      href={d.downloadUrl}
                      download={d.downloadName}
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
          </div>
        </BottomSheet>
      )}
      {openSheet === 'humaines' && (
        <BottomSheet isOpen={true} onClose={closeSheet} title="Compétences Humaines">
          <div className="humaines-block">
            {humaines.map((skill) => (
              <div key={skill.id} className="humaine-item">
                <div className="humaine-icon">{skill.icon}</div>
                <div className="humaine-content">
                  <h3 className="humaine-title">{skill.title}</h3>
                  <p className="humaine-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </BottomSheet>
      )}
      {openSheet === 'techniques' && (
        <BottomSheet isOpen={true} onClose={closeSheet} title="Compétences Techniques">
          <div className="tech-block">
            {techniques.map((tech) => (
              <button
                key={tech.id}
                type="button"
                className="tech-item"
                onClick={() => handleOpenTech(tech)}
              >
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-content">
                  <h3 className="tech-title">{tech.title}</h3>
                  <p className="tech-description">{tech.description}</p>
                </div>
              </button>
            ))}
          </div>
        </BottomSheet>
      )}
      {selectedTech && (
        <BottomSheet isOpen={true} onClose={handleCloseTech} title={selectedTech.title}>
          <div className="tech-detail">
            <div className="tech-detail-left">
              <h3 className="tech-detail-heading">Comment c'est obtenu</h3>
              <p className="tech-detail-text">{selectedTech.obtained}</p>
            </div>
            <div className="tech-detail-right">
              <h3 className="tech-detail-heading">Compétences</h3>
              <ul className="tech-skill-list">
                {selectedTech.skills.map((skill) => (
                  <li key={skill} className="tech-skill-row">
                    <span className="tech-skill-icon">
                      {skillIcons[skill] || <TbCode />}
                    </span>
                    <div className="tech-skill-item">
                      <span className="tech-skill-label">{skill}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default Competences;
