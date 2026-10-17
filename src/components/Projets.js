import React, { useState } from 'react';
import './Projets.css';
import { Container, Heading, Section } from './UI';
import Banner from './UI/Banner';
import {
  TbCode,
  TbAffiliate,
  TbUxCircle,
  TbBolt,
  TbShieldCheck,
  TbPalette,
  TbLayout,
  TbBrandFlutter,
  TbBrandAndroid,
  TbBrandWindows,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbLetterC,
  TbDeviceGamepad2,
  TbScript,
  TbDeviceMobile,
  TbDeviceDesktop,
  TbBrandPhp,
} from 'react-icons/tb';
import BottomSheet from './UI/BottomSheet';

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    {
      id: 'uiux',
      title: 'UI/UX',
      subtitle: 'Designs d\'interface construits',
      icon: <TbUxCircle />,
      projects: [
        {
          id: 'uiux-1',
          title: 'White Design',
          summary: 'Un système de design monochrome propriétaire, conçu pour mes projets.',
          image: 'assets/images/projects/whitedesign.png',
          tags: [
            { id: 'ui', label: 'UI', icon: <TbPalette /> },
            { id: 'ux', label: 'UX', icon: <TbLayout /> },
            { id: 'mobile', label: 'Mobile', icon: <TbDeviceMobile /> },
          ],
          context: 'Lors du développement de l\'application mobile White Cobalt, j\'ai souhaité créer un système de conception propriétaire qui puisse se démarquer tout en s\'adaptant à la philosophie des systèmes d\'exploitation sur lesquels l\'application serait utilisée.',
          objective: 'Il faut concevoir l\'interface graphique d\'une application destinée à fonctionner sous le système d\'exploitation Android.',
          work: 'J\'ai créé un système de conception qui a été utilisé dans l\'application mobile White Cobalt et qui est devenu le système de conception principal pour mes projets mobiles.',
          result: 'J\'ai perfectionné mes compétences en matière de conception de systèmes de design propriétaires et d\'utilisation du logiciel Figma.',
        },
        {
          id: 'uiux-2',
          title: 'Redessin de MyUCA',
          summary: 'Amélioration de l\'interface de l\'application mobile MyUCA destinée aux étudiants.',
          image: 'assets/images/projects/myuca.png',
          tags: [
            { id: 'ui', label: 'UI', icon: <TbPalette /> },
            { id: 'ux', label: 'UX', icon: <TbLayout /> },
            { id: 'mobile', label: 'Mobile', icon: <TbDeviceMobile /> },
          ],
          context: 'L\'application mobile MyUCA permet aux étudiants d\'accéder à des informations sur leur vie étudiante, telles que les horaires de cours, les adresses des bibliothèques, des restaurants universitaires et bien plus encore, mais son design est obsolète, ce qui rend son utilisation peu pratique.',
          objective: 'Il est nécessaire d\'améliorer la conception de l\'application MyUCA afin qu\'elle réponde aux normes actuelles en matière de design et offre une interface conviviale à l\'utilisateur.',
          work: 'J\'ai mis en œuvre une nouvelle conception de l\'interface de l\'application MyUCA ; cette nouvelle conception a amélioré la convivialité de l\'application, a permis de disposer les nouvelles fonctionnalités dans un ordre logique et a conservé le style de l\'infrastructure numérique de l\'UCA.',
          result: 'J\'ai perfectionné mes compétences en matière de conception de systèmes de design propriétaires et d\'utilisation du logiciel Figma.',
        },
      ],
    },
    {
      id: 'reseaux',
      title: 'Réseaux',
      subtitle: 'Systèmes de communication réalisés',
      icon: <TbAffiliate />,
      projects: [
        {
          id: 'net-1',
          title: 'Projet Intégratif',
          summary: 'Projet technique visant à valider les compétences acquises au cours de la première année de formation BUT Réseaux et Télécommunications.',
          image: 'assets/images/projects/integratif.jpg',
          tags: [
            { id: 'sec', label: 'Sécurité', icon: <TbShieldCheck /> },
            { id: 'perf', label: 'Perf', icon: <TbBolt /> },
          ],
          context: 'Le projet de fin d\'études de la première année du cursus « Réseaux et Télécommunications » à la BUT consiste en un projet intégratif dont l\'objectif est de mettre en place un réseau informatique pour une entreprise fictive, en mettant en pratique toutes les compétences acquises au cours de la formation.',
          objective: 'Il est nécessaire de mettre en place un réseau informatique doté d\'équipements informatiques configurés conformément aux normes d\'efficacité et de sécurité des entreprises modernes, en utilisant diverses technologies logicielles et matérielles.',
          work: '(Le projet n\'a pas encore été mis en œuvre) Il s\'agit d\'un projet en équipe et mon rôle consiste avant tout à configurer les équipements réseau, tels que le commutateur et le routeur. Ma tâche secondaire consiste à vérifier la configuration et la stabilité des systèmes informatiques.',
          result: 'Mon travail dans le cadre de ce projet doit me permettre de consolider toutes les compétences acquises au cours de ma première année à la faculté.',
        },
      ],
    },
    {
      id: 'code',
      title: 'Code',
      subtitle: 'Logiciels développés',
      icon: <TbCode />,
      projects: [
        {
          id: 'code-1',
          title: 'White Cobalt',
          summary: 'Client Android natif permettant de télécharger des fichiers multimédias depuis Internet à l\'aide des API du serveur Cobalt.',
          image: 'assets/images/projects/whitecobalt.jpg',
          tags: [
            { id: 'dart', label: 'Dart', icon: <TbBrandFlutter /> },
            { id: 'flutter', label: 'Flutter', icon: <TbBrandFlutter /> },
            { id: 'android', label: 'Android', icon: <TbBrandAndroid /> },
          ],
          context: 'Le marché des applications mobiles permettant de télécharger du contenu depuis Internet regorge d\'applications de mauvaise qualité. Elles sont toutes truffées de publicités qui s\'affichent à chaque action que vous effectuez, ou bien exigent un abonnement pour débloquer toutes leurs fonctionnalités. De plus, elles ne proposent généralement le téléchargement qu\'à partir d\'un ou deux services. Il est très difficile de trouver une application qui allie une expérience utilisateur pratique et une polyvalence vis-à-vis des services Internet.',
          objective: 'Il faut créer une application mobile pour Android capable de télécharger des fichiers multimédias à partir d\'un large éventail de réseaux sociaux, qui soit entièrement gratuite et libre d\'utilisation, et qui offre diverses intégrations avec l\'appareil mobile.',
          work: 'J\'ai développé une application Android White Cobalt à l\'aide du framework Flutter et du langage de programmation Dart. Elle permet de télécharger des fichiers multimédias à partir d\'une large liste de réseaux sociaux et s\'intègre à la mémoire de l\'appareil, ce qui facilite la libération d\'espace en cas de manque de mémoire. Il est également possible d\'envoyer des liens vers ces fichiers multimédias via le menu de partage du système, et bien plus encore.',
          result: 'J\'ai amélioré mes compétences en développement d\'applications Android, ainsi que celles relatives au framework Flutter et au langage de programmation Dart.',
        },
        {
          id: 'code-2',
          title: 'LibreLinkUpTray',
          summary: 'Application native Windows permettant de consulter l\'historique et les valeurs actuelles de glycémie grâce à l\'API LibreLinkUp.',
          image: 'assets/images/projects/librelinkuptray.jpg',
          tags: [
            { id: 'dart', label: 'Dart', icon: <TbBrandFlutter /> },
            { id: 'flutter', label: 'Flutter', icon: <TbBrandFlutter /> },
            { id: 'windows', label: 'Windows', icon: <TbBrandWindows /> },
          ],
          context: 'Le système de capteurs FreeStyle, développé par la société chimico-pharmaceutique américaine Abbott, permet de surveiller en temps réel le taux de glucose dans le sang, ce qui aide les personnes atteintes de diabète à contrôler leur glycémie et à réagir rapidement en cas de dépassement des limites normales. Le suivi s\'effectue à l\'aide d\'une application mobile pour Android et iOS, ce qui implique de consulter constamment son téléphone. Mais lorsque vous travaillez sur un ordinateur, il serait bien plus simple d\'avoir ces informations constamment sous les yeux, par exemple dans la barre d\'état système.',
          objective: 'Il est nécessaire de développer une application de bureau pour Windows capable de reproduire les fonctionnalités de l\'application mobile officielle et d\'améliorer la convivialité en tirant parti de l\'interface du système d\'exploitation.',
          work: 'J\'ai développé l\'application Windows LibreLinkUpTray à l\'aide du framework Flutter et du langage de programmation Dart. Elle reproduit intégralement les fonctionnalités de l\'application d\'origine en matière de suivi de la glycémie, tout en offrant la possibilité de consulter ces données dans le menu de la barre d\'état système. Des notifications à l\'écran ont également été mises en place pour signaler les écarts de glycémie par rapport à la normale, ainsi que des informations sur la durée de vie du capteur.',
          result: 'J\'ai amélioré mes compétences en développement d\'applications Windows, ainsi que celles relatives au framework Flutter et au langage de programmation Dart.',
        },
        {
          id: 'code-3',
          title: 'Geometry Flip',
          summary: 'Un clône simple du jeu Geometry Dash pour Flipper Zero.',
          image: 'assets/images/projects/geometryflip.jpg',
          tags: [
            { id: 'c', label: 'C', icon: <TbLetterC /> },
            { id: 'flipper', label: 'Flipper', icon: <TbDeviceGamepad2 /> },
            { id: 'html', label: 'HTML', icon: <TbBrandHtml5 /> },
            { id: 'css', label: 'CSS', icon: <TbBrandCss3 /> },
            { id: 'js', label: 'JS', icon: <TbBrandJavascript /> },
          ],
          context: 'Geometry Dash est l\'un de mes jeux préférés ; son gameplay est assez simple : il faut faire sauter un cube par-dessus des obstacles. Flipper Zero est un appareil destiné aux passionnés d\'informatique, sur lequel plusieurs versions de jeux vidéo simples ont déjà été développées.',
          objective: 'Créer un jeu qui reproduise le gameplay de Geometry Dash pour Flipper Zero, en tenant compte des capacités de cet appareil.',
          work: 'J\'ai créé un jeu pour Flipper Zero intitulé Geometry Flip, qui reproduit le gameplay de Geometry Dash à l\'aide du langage de programmation C. Il permet de modifier l\'apparence du personnage, propose plusieurs niveaux et offre la possibilité de créer ses propres niveaux dans un éditeur en ligne.',
          result: 'J\'ai acquis des compétences en développement de mini-programmes pour Flipper Zero et en langage de programmation C. J\'ai également perfectionné mes compétences en HTML, CSS et JS, que j\'ai utilisées pour créer un éditeur de niveaux.',
        },
        {
          id: 'code-4',
          title: 'ODIN – Moyennes',
          summary: 'Script pour Tampermonkey capable de calculer la note moyenne pour l\'UE et le semestre directement dans le navigateur.',
          image: 'assets/images/projects/odin-moyennes.jpg',
          tags: [
            { id: 'scripts', label: 'Scripts', icon: <TbScript /> },
            { id: 'js', label: 'JS', icon: <TbBrandJavascript /> },
          ],
          context: 'La plateforme ODIN est utilisée à l\'IUT Clermont Auvergne pour communiquer aux étudiants les notes qu\'ils obtiennent tout au long de leur cursus. La validation de l\'année d\'études s\'effectue en calculant la moyenne des notes obtenues dans les différentes compétences, qui doit être égale ou supérieure au seuil de réussite. Malheureusement, la plateforme n\'affiche pas la moyenne par compétence sur la base des moyennes par matière, et comme les matières ont des coefficients différents, le calcul manuel de sa moyenne est une tâche assez complexe.',
          objective: 'Il faut créer un script pour Tampermonkey, une extension qui permet d\'exécuter des scripts personnalisés directement dans le navigateur, capable de calculer automatiquement les notes moyennes de compétences à partir des notes obtenues et de les afficher directement dans le navigateur.',
          work: 'J\'ai créé un script qui calcule automatiquement les notes moyennes pour chaque compétence à partir des notes obtenues dans les matières et de leurs coefficients, ce qui permet aux étudiants de toujours savoir quelle note ils ont pour chaque compétence.',
          result: 'J\'ai acquis des compétences en matière de création de scripts personnalisés pour les navigateurs et j\'ai perfectionné mes compétences en JavaScript.',
        },
        {
          id: 'code-5',
          title: 'Plateforme d\'évaluation des compétences',
          summary: 'Application web permettant de publier des programmes d\'études et de valider les compétences des étudiants à l\'aide de tests.',
          image: 'assets/images/projects/php-sae.png',
          tags: [
            { id: 'web', label: 'Web', icon: <TbDeviceDesktop/>},
            { id: 'php', label: 'PHP', icon: <TbBrandPhp /> },
          ],
          context: 'Dans le cadre du programme de formation en développement web de la faculté BUT Réseaux et Télécommunications, il est nécessaire de réaliser un projet consistant à créer une plateforme web pédagogique.',
          objective: 'Il est nécessaire de créer une plateforme web pédagogique qui utilise la technologie des sites dynamiques et communique avec une base de données. Il est nécessaire de mettre en place plusieurs rôles de compte, un système d\'authentification et un système de sessions.',
          work: 'J\'ai développé un site web dynamique en PHP qui communique avec une base de données SQL, intègre différents rôles, un système de sessions et des fonctionnalités pédagogiques, telles que la passation de tests par les étudiants, la publication de supports pédagogiques par les enseignants, etc.',
          result: 'J\'ai perfectionné mes compétences en matière de développement de sites web dynamiques avec PHP et de gestion de bases de données SQL.',
        },
        {
          id: 'code-6',
          title: 'Plateforme de rapports de test',
          summary: 'Application web permettant de créer des rapports de test pour les systèmes informatiques.',
          image: 'assets/images/projects/php-tp.png',
          tags: [
            { id: 'web', label: 'Web', icon: <TbDeviceDesktop/>},
            { id: 'php', label: 'PHP', icon: <TbBrandPhp /> },
          ],
          context: 'Le programme de formation en développement web de la faculté BUT Réseaux et Télécommunications comprend un stage dont l\'objectif est de créer une plateforme web permettant de générer et de stocker des rapports de test de systèmes informatiques.',
          objective: 'Il est nécessaire de développer une plateforme web permettant de saisir des informations sur le système testé, ses caractéristiques et les résultats des tests ; il est également nécessaire de mettre en place un système d\'authentification et de gestion des sessions.',
          work: 'J\'ai développé un site web dynamique en PHP qui communique avec une base de données SQL et dispose d\'un système de sécurité comprenant une authentification et des sessions, ce qui permet de créer et de stocker en toute sécurité des rapports de test de systèmes informatiques.',
          result: 'J\'ai perfectionné mes compétences en matière de développement de sites web dynamiques avec PHP et de gestion de bases de données SQL.',
        },
      ],
    },
  ];

  const handleOpenCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleCloseCategory = () => {
    setActiveCategory(null);
  };

  const handleOpenProject = (categoryId, project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const activeCategoryData = projectCategories.find((cat) => cat.id === activeCategory);

  return (
    <Section padding="lg" id="projets">
      <Container size="lg">
        <div className="projets-wrapper">
          <div className="projets-content">
            <Heading level={2} color="primary">
              Mes Projets
            </Heading>

            <div className="projets-banners">
              <Banner
                logo={<TbUxCircle />}
                title="UI/UX"
                subtitle="Designs d'interface construits"
                onClick={() => handleOpenCategory('uiux')}
              />

              <Banner
                logo={<TbAffiliate />}
                title="Réseaux"
                subtitle="Systèmes de communication réalisés"
                onClick={() => handleOpenCategory('reseaux')}
              />

              <Banner
                logo={<TbCode />}
                title="Code"
                subtitle="Logiciels développés"
                onClick={() => handleOpenCategory('code')}
              />
            </div>
          </div>

          <div className="projets-image">
            <div className="projets-image-wrapper">
              <img
                src="assets/images/phone.png"
                alt="Mes Projets"
                className="projets-img"
              />
            </div>
            <div className="projets-grid-pattern"></div>
          </div>
        </div>
      </Container>

      {activeCategoryData && (
        <BottomSheet
          isOpen={!!activeCategoryData}
          onClose={handleCloseCategory}
          title={`Projets ${activeCategoryData.title}`}
        >
          <div className="projects-sheet">
            <div className="projects-list">
              {activeCategoryData.projects.map((project) => (
                <button
                  key={project.id}
                  className="project-card"
                  type="button"
                  onClick={() => handleOpenProject(activeCategoryData.id, project)}
                >
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-card-content">
                    <div className="project-card-title">{project.title}</div>
                    <p className="project-card-summary">{project.summary}</p>
                    <div className="project-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag.id} className="project-tag">
                          {tag.icon}
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </BottomSheet>
      )}

      {selectedProject && (
        <BottomSheet
          isOpen={!!selectedProject}
          onClose={handleCloseProject}
          title={selectedProject.title}
        >
          <div className="project-detail">
            <div className="project-detail-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="project-detail-content">
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Contexte</h3>
                <p>{selectedProject.context}</p>
              </div>
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Objectif</h3>
                <p>{selectedProject.objective}</p>
              </div>
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Travail réalisé</h3>
                <p>{selectedProject.work}</p>
              </div>
              <div className="project-detail-section">
                <h3 className="project-detail-heading">Résultat</h3>
                <p>{selectedProject.result}</p>
              </div>
            </div>
          </div>
        </BottomSheet>
      )}
    </Section>
  );
};

export default Projets;
