import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: 'Actualités', path: '/actualites' },
    { name: 'Nous découvrir', path: '/nous-decouvrir' },
    { name: 'Devenir notre partenaire', path: '/devenir-partenaire' },
    { name: 'Nos partenaires', path: '/nos-partenaires' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Nous contacter', path: '/nous-contacter' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <FaLeaf className="logo-icon" />
            <span className="logo-text">AssociaPute</span>
          </Link>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="mobile-close" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <FaTimes />
          </button>
          
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/faire-un-don" className="btn btn-donate">
            Faire un don
          </Link>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            <FaBars />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header; 