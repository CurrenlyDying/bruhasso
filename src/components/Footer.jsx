import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLeaf } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-column footer-about">
            <div className="footer-logo">
              <FaLeaf className="footer-logo-icon" />
              <span className="footer-logo-text">AssociaPute</span>
            </div>
            <p className="footer-description">
              Association dédiée à l'aide aux personnes dans le besoin et au développement de projets solidaires partout dans le monde.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div className="footer-column footer-links">
            <h3 className="footer-title">Liens utiles</h3>
            <ul className="footer-menu">
              <li><Link to="/actualites">Actualités</Link></li>
              <li><Link to="/nous-decouvrir">Nous découvrir</Link></li>
              <li><Link to="/devenir-partenaire">Devenir partenaire</Link></li>
              <li><Link to="/nos-partenaires">Nos partenaires</Link></li>
              <li><Link to="/faire-un-don">Faire un don</Link></li>
            </ul>
          </div>
          
          <div className="footer-column footer-contact">
            <h3 className="footer-title">Contact</h3>
            <ul className="contact-info">
              <li>123 Rue de la Solidarité</li>
              <li>75001 Paris, France</li>
              <li>Email: contact@associapute.org</li>
              <li>Téléphone: +33 1 23 45 67 89</li>
            </ul>
          </div>
          
          <div className="footer-column footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p>Inscrivez-vous pour recevoir nos dernières actualités</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                required 
              />
              <button type="submit" className="btn-secondary">S'inscrire</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} AssociaPute. Tous droits réservés.
          </div>
          <div className="footer-bottom-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 