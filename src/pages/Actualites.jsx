import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Actualites.css';

const Actualites = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  // Placeholder news items
  const newsItems = [
    {
      id: 1,
      title: 'Distribution de nourriture au Mali',
      excerpt: 'Notre équipe a récemment organisé une distribution de nourriture pour plus de 500 familles dans la région de Mopti, au Mali, qui fait face à une crise alimentaire sévère depuis plusieurs mois.',
      date: '12 juin 2023',
      location: 'Mopti, Mali',
      category: 'Aide humanitaire',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Inauguration d\'une école au Népal',
      excerpt: 'Grâce à vos dons, nous avons pu construire et équiper une nouvelle école qui accueillera plus de 200 enfants dans la région montagneuse du Népal, durement touchée par les tremblements de terre de 2015.',
      date: '28 mai 2023',
      location: 'Katmandou, Népal',
      category: 'Éducation',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Appel à bénévoles pour notre mission d\'été',
      excerpt: 'Nous recherchons des volontaires motivés pour participer à notre prochaine mission humanitaire au Sénégal, qui se concentrera sur l\'accès à l\'eau potable et l\'amélioration des conditions sanitaires.',
      date: '15 mai 2023',
      location: 'Dakar, Sénégal',
      category: 'Volontariat',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Conférence sur le développement durable',
      excerpt: 'Notre organisation a participé à une conférence internationale sur le développement durable, où nous avons présenté nos projets d\'énergie renouvelable dans les communautés rurales.',
      date: '3 mai 2023',
      location: 'Paris, France',
      category: 'Événement',
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      title: 'Nouveau partenariat avec l\'UNICEF',
      excerpt: 'Nous sommes fiers d\'annoncer notre nouveau partenariat avec l\'UNICEF pour étendre nos programmes de santé maternelle et infantile dans plusieurs pays d\'Afrique de l\'Ouest.',
      date: '20 avril 2023',
      location: 'Genève, Suisse',
      category: 'Partenariat',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      title: 'Lancement d\'un programme de reforestation',
      excerpt: 'En collaboration avec les communautés locales, nous avons lancé un ambitieux programme de reforestation au Brésil, visant à planter plus de 50 000 arbres sur les trois prochaines années.',
      date: '5 avril 2023',
      location: 'Manaus, Brésil',
      category: 'Environnement',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ];

  return (
    <div className={`actualites-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Actualités</h1>
          <p className="page-subtitle">
            Découvrez nos dernières actions et restez informés de nos projets en cours.
          </p>
        </div>

        <div className="categories">
          <button className="category-btn active">Tous</button>
          <button className="category-btn">Aide humanitaire</button>
          <button className="category-btn">Éducation</button>
          <button className="category-btn">Santé</button>
          <button className="category-btn">Environnement</button>
          <button className="category-btn">Événements</button>
        </div>

        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-image-container">
                <img src={item.image} alt={item.title} className="news-image" />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">
                    <FaCalendarAlt /> {item.date}
                  </span>
                  <span className="news-location">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <Link to="#" className="read-more">
                  Lire l'article <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <span className="pagination-dots">...</span>
          <button className="pagination-btn">10</button>
          <button className="pagination-btn pagination-next">
            Suivant <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actualites; 