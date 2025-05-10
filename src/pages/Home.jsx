import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandHoldingHeart, FaUsers, FaGlobeAfrica } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">Ensemble, créons un monde meilleur</h1>
          <p className="hero-subtitle">
            Rejoignez notre mission pour apporter de l'aide humanitaire et du soutien aux communautés dans le besoin.
          </p>
          <div className="hero-buttons">
            <Link to="/faire-un-don" className="btn btn-donate">
              Faire un don
            </Link>
            <Link to="/nous-decouvrir" className="btn btn-secondary">
              Découvrir notre mission
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Enfants souriants" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Notre impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="stat-number">12,000+</div>
              <div className="stat-label">Personnes aidées</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">45</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">18</div>
              <div className="stat-label">Pays d'intervention</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">250+</div>
              <div className="stat-label">Bénévoles actifs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Nos domaines d'action</h2>
          <div className="mission-areas">
            <div className="mission-card">
              <FaHandHoldingHeart className="mission-icon" />
              <h3 className="mission-title">Aide humanitaire</h3>
              <p>
                Nous fournissons une aide d'urgence aux populations touchées par des crises humanitaires, des catastrophes naturelles et des conflits.
              </p>
              <Link to="/nous-decouvrir" className="read-more">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
            <div className="mission-card">
              <FaUsers className="mission-icon" />
              <h3 className="mission-title">Développement communautaire</h3>
              <p>
                Nous travaillons en étroite collaboration avec les communautés locales pour créer des solutions durables et renforcer leur résilience.
              </p>
              <Link to="/nous-decouvrir" className="read-more">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
            <div className="mission-card">
              <FaGlobeAfrica className="mission-icon" />
              <h3 className="mission-title">Protection de l'environnement</h3>
              <p>
                Nous mettons en œuvre des initiatives pour protéger l'environnement et promouvoir des pratiques durables dans les communautés.
              </p>
              <Link to="/nous-decouvrir" className="read-more">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Actualités récentes</h2>
            <Link to="/actualites" className="view-all">
              Voir toutes les actualités <FaArrowRight />
            </Link>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Distribution de nourriture" 
                className="news-image"
              />
              <div className="news-content">
                <span className="news-date">12 juin 2023</span>
                <h3 className="news-title">Distribution de nourriture au Mali</h3>
                <p className="news-excerpt">
                  Notre équipe a récemment organisé une distribution de nourriture pour plus de 500 familles dans la région de Mopti.
                </p>
                <Link to="/actualites" className="read-more">
                  Lire l'article <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Construction d'une école" 
                className="news-image"
              />
              <div className="news-content">
                <span className="news-date">28 mai 2023</span>
                <h3 className="news-title">Inauguration d'une école au Népal</h3>
                <p className="news-excerpt">
                  Grâce à vos dons, nous avons pu construire et équiper une nouvelle école qui accueillera plus de 200 enfants.
                </p>
                <Link to="/actualites" className="read-more">
                  Lire l'article <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Volontaires" 
                className="news-image"
              />
              <div className="news-content">
                <span className="news-date">15 mai 2023</span>
                <h3 className="news-title">Appel à bénévoles pour notre mission d'été</h3>
                <p className="news-excerpt">
                  Nous recherchons des volontaires motivés pour participer à notre prochaine mission humanitaire au Sénégal.
                </p>
                <Link to="/actualites" className="read-more">
                  Lire l'article <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Rejoignez notre cause</h2>
            <p className="cta-text">
              Ensemble, nous pouvons faire la différence. Faites un don aujourd'hui ou devenez bénévole pour soutenir nos actions.
            </p>
            <div className="cta-buttons">
              <Link to="/faire-un-don" className="btn btn-donate">
                Faire un don
              </Link>
              <Link to="/nous-contacter" className="btn btn-secondary">
                Devenir bénévole
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 