import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaGlobeAfrica, FaHandHoldingHeart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import '../styles/NousDecouvrir.css';

const NousDecouvrir = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sophie Martin',
      role: 'Présidente',
      bio: 'Passionnée par l\'aide humanitaire depuis plus de 15 ans, Sophie a travaillé dans de nombreux pays avant de fonder notre association.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      role: 'Directeur des opérations',
      bio: 'Expert en logistique humanitaire, Thomas coordonne nos actions sur le terrain et assure l\'efficacité de nos interventions.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Amina Camara',
      role: 'Responsable des projets',
      bio: 'Spécialiste du développement durable, Amina conçoit et supervise nos projets pour garantir leur impact positif à long terme.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Jean Leroy',
      role: 'Responsable financier',
      bio: 'Avec son expertise en gestion financière des ONG, Jean assure la transparence et l\'optimisation de nos ressources.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Timeline events
  const timelineEvents = [
    {
      year: '2010',
      title: 'Création de l\'association',
      description: 'Fondation de l\'association par un groupe de bénévoles passionnés.'
    },
    {
      year: '2012',
      title: 'Premier projet international',
      description: 'Lancement de notre premier projet d\'accès à l\'eau potable au Mali.'
    },
    {
      year: '2015',
      title: 'Expansion de nos activités',
      description: 'Ouverture de bureaux dans trois nouveaux pays et diversification de nos domaines d\'action.'
    },
    {
      year: '2018',
      title: 'Reconnaissance internationale',
      description: 'Attribution du prix international de l\'innovation sociale pour notre programme d\'éducation.'
    },
    {
      year: '2021',
      title: 'Renforcement de notre impact',
      description: 'Développement de nouveaux partenariats stratégiques et augmentation significative du nombre de bénéficiaires.'
    }
  ];

  return (
    <div className={`nous-decouvrir-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="page-title">Notre mission</h1>
            <p className="hero-text">
              Depuis 2010, nous œuvrons avec détermination pour apporter de l'aide 
              aux communautés vulnérables à travers le monde. Notre mission est de 
              créer un impact durable et positif en travaillant main dans la main 
              avec les populations locales.
            </p>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Équipe sur le terrain" 
              className="hero-image"
            />
          </div>
        </section>

        <section className="about-tabs">
          <div className="tabs-navigation">
            <button 
              className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Notre mission
            </button>
            <button 
              className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Nos valeurs
            </button>
            <button 
              className={`tab-btn ${activeTab === 'approach' ? 'active' : ''}`}
              onClick={() => setActiveTab('approach')}
            >
              Notre approche
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'mission' && (
              <div className="mission-content">
                <div className="mission-areas">
                  <div className="mission-area">
                    <FaHandHoldingHeart className="mission-icon" />
                    <h3>Aide humanitaire</h3>
                    <p>
                      Nous intervenons rapidement pour apporter une aide d'urgence aux populations
                      touchées par des catastrophes naturelles, des conflits ou des crises humanitaires.
                    </p>
                  </div>
                  <div className="mission-area">
                    <FaUsers className="mission-icon" />
                    <h3>Développement communautaire</h3>
                    <p>
                      Nous mettons en œuvre des projets de développement durable avec les communautés locales
                      dans les domaines de l'éducation, la santé, l'accès à l'eau et l'agriculture.
                    </p>
                  </div>
                  <div className="mission-area">
                    <FaGlobeAfrica className="mission-icon" />
                    <h3>Protection de l'environnement</h3>
                    <p>
                      Nous travaillons à la préservation des écosystèmes et encourageons des pratiques
                      respectueuses de l'environnement au sein des communautés.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="values-content">
                <ul className="values-list">
                  <li>
                    <FaCheckCircle className="value-icon" />
                    <div>
                      <h3>Solidarité</h3>
                      <p>
                        Nous croyons en la puissance de la solidarité pour unir les peuples et surmonter ensemble les défis.
                      </p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="value-icon" />
                    <div>
                      <h3>Respect</h3>
                      <p>
                        Nous respectons la dignité, la culture et les aspirations des communautés avec lesquelles nous travaillons.
                      </p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="value-icon" />
                    <div>
                      <h3>Transparence</h3>
                      <p>
                        Nous nous engageons à être totalement transparents dans notre gestion et nos actions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="value-icon" />
                    <div>
                      <h3>Innovation</h3>
                      <p>
                        Nous encourageons l'innovation et la créativité pour trouver des solutions durables aux défis complexes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="value-icon" />
                    <div>
                      <h3>Engagement</h3>
                      <p>
                        Nous sommes déterminés à mener nos actions avec professionnalisme et un engagement sans faille.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="approach-content">
                <p className="approach-intro">
                  Notre approche est centrée sur les communautés et vise à renforcer leur autonomie.
                  Nous travaillons avec une méthodologie en 5 étapes :
                </p>
                <div className="approach-steps">
                  <div className="approach-step">
                    <div className="step-number">1</div>
                    <h3>Écouter</h3>
                    <p>
                      Nous commençons par écouter les besoins réels des communautés et comprendre leur contexte spécifique.
                    </p>
                  </div>
                  <div className="approach-step">
                    <div className="step-number">2</div>
                    <h3>Collaborer</h3>
                    <p>
                      Nous concevons les projets en collaboration avec les acteurs locaux pour garantir leur pertinence.
                    </p>
                  </div>
                  <div className="approach-step">
                    <div className="step-number">3</div>
                    <h3>Agir</h3>
                    <p>
                      Nous mettons en œuvre les projets avec rigueur et flexibilité, en impliquant activement les communautés.
                    </p>
                  </div>
                  <div className="approach-step">
                    <div className="step-number">4</div>
                    <h3>Évaluer</h3>
                    <p>
                      Nous évaluons constamment l'impact de nos actions pour les améliorer et les adapter.
                    </p>
                  </div>
                  <div className="approach-step">
                    <div className="step-number">5</div>
                    <h3>Pérenniser</h3>
                    <p>
                      Nous travaillons à rendre nos projets autonomes et durables sur le long terme.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="timeline-section">
          <h2 className="section-title">Notre histoire</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Notre équipe</h2>
          <p className="team-intro">
            Notre équipe est composée de professionnels passionnés et dévoués, 
            qui mettent leur expertise au service de notre mission.
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-image"
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="join-section">
          <div className="join-content">
            <h2 className="join-title">Rejoignez-nous</h2>
            <p className="join-text">
              Vous souhaitez faire partie de l'aventure ? Découvrez comment vous impliquer
              dans nos actions et contribuer à notre mission.
            </p>
            <div className="join-buttons">
              <Link to="/faire-un-don" className="btn btn-donate">
                Faire un don
              </Link>
              <Link to="/nous-contacter" className="btn btn-secondary">
                Devenir bénévole
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NousDecouvrir; 