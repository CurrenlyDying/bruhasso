import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandshake } from 'react-icons/fa';
import '../styles/NosPartenaires.css';

const NosPartenaires = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  // Partners data with categories
  const partners = [
    {
      id: 1,
      name: 'Entreprise ABC',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Leader dans le secteur de la technologie, Entreprise ABC soutient nos projets d\'accès à l\'eau potable depuis 2018.',
      category: 'entreprise',
      website: '#'
    },
    {
      id: 2,
      name: 'Fondation XYZ',
      logo: 'https://via.placeholder.com/200x100',
      description: 'La Fondation XYZ finance nos programmes éducatifs dans plusieurs pays d\'Afrique.',
      category: 'fondation',
      website: '#'
    },
    {
      id: 3,
      name: 'Organisation 123',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Organisation internationale avec laquelle nous collaborons sur le terrain pour des projets de santé maternelle.',
      category: 'ong',
      website: '#'
    },
    {
      id: 4,
      name: 'Groupe DEF',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Le Groupe DEF met à notre disposition ses compétences en ingénierie pour nos projets d\'infrastructures.',
      category: 'entreprise',
      website: '#'
    },
    {
      id: 5,
      name: 'Ministère de la Coopération',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Le Ministère finance certains de nos projets d\'aide d\'urgence dans les zones de conflit.',
      category: 'institution',
      website: '#'
    },
    {
      id: 6,
      name: 'Fondation pour l\'Éducation',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Cette fondation soutient spécifiquement nos programmes de formation professionnelle pour les jeunes.',
      category: 'fondation',
      website: '#'
    },
    {
      id: 7,
      name: 'Association Environnement',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Un partenaire clé pour nos projets de reforestation et de protection de la biodiversité.',
      category: 'ong',
      website: '#'
    },
    {
      id: 8,
      name: 'Entreprise GHI',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Grâce à un programme de produit-partage, cette entreprise contribue au financement de nos actions.',
      category: 'entreprise',
      website: '#'
    }
  ];

  // Filter partners based on category
  const filteredPartners = filter === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === filter);

  return (
    <div className={`nos-partenaires-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Nos partenaires</h1>
          <p className="page-subtitle">
            Découvrez les organisations qui nous soutiennent et contribuent à l'impact 
            de nos actions sur le terrain. Nous sommes fiers de ces collaborations qui 
            nous permettent de mener à bien notre mission.
          </p>
        </div>

        <div className="partners-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous
          </button>
          <button 
            className={`filter-btn ${filter === 'entreprise' ? 'active' : ''}`}
            onClick={() => setFilter('entreprise')}
          >
            Entreprises
          </button>
          <button 
            className={`filter-btn ${filter === 'fondation' ? 'active' : ''}`}
            onClick={() => setFilter('fondation')}
          >
            Fondations
          </button>
          <button 
            className={`filter-btn ${filter === 'ong' ? 'active' : ''}`}
            onClick={() => setFilter('ong')}
          >
            ONG
          </button>
          <button 
            className={`filter-btn ${filter === 'institution' ? 'active' : ''}`}
            onClick={() => setFilter('institution')}
          >
            Institutions
          </button>
        </div>

        <div className="partners-grid">
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <img src={partner.logo} alt={`Logo ${partner.name}`} />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
                <a href={partner.website} className="partner-link" target="_blank" rel="noopener noreferrer">
                  Visiter le site <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <div className="testimonial-quote">
              <p>
                "Nos partenaires sont essentiels à notre action. Grâce à leur soutien, 
                nous avons pu venir en aide à plus de 12 000 personnes au cours de 
                l'année dernière. Ces collaborations nous permettent d'innover et 
                d'amplifier notre impact sur le terrain."
              </p>
              <div className="quote-author">
                <div className="author-image">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Sophie Martin"
                  />
                </div>
                <div className="author-info">
                  <h3>Sophie Martin</h3>
                  <p>Présidente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="become-partner-section">
          <div className="become-partner-content">
            <div className="become-partner-icon">
              <FaHandshake />
            </div>
            <h2>Intéressé par un partenariat ?</h2>
            <p>
              Rejoignez notre réseau de partenaires et contribuez à notre mission 
              d'aide humanitaire. Ensemble, nous pouvons avoir un impact plus fort 
              et plus durable sur les communautés vulnérables.
            </p>
            <Link to="/devenir-partenaire" className="btn btn-primary">
              Devenir partenaire
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NosPartenaires; 