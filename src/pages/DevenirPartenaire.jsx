import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaBuilding, FaUsers, FaChartLine, FaGlobe, FaArrowRight } from 'react-icons/fa';
import '../styles/DevenirPartenaire.css';

const DevenirPartenaire = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  // Partner benefits data
  const partnerBenefits = [
    {
      id: 1,
      icon: <FaHandshake />,
      title: 'Impact social',
      description: 'Contribuez à des projets à fort impact et participez concrètement à l\'amélioration des conditions de vie des populations vulnérables.'
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: 'Image de marque',
      description: 'Renforcez votre image de marque en vous associant à une cause noble et en démontrant votre engagement sociétal.'
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Engagement des collaborateurs',
      description: 'Fédérez vos équipes autour d\'un projet commun et mobilisant, renforçant ainsi la cohésion et la motivation interne.'
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Visibilité',
      description: 'Bénéficiez d\'une visibilité auprès de notre communauté et lors de nos événements, avec une mention sur nos supports de communication.'
    },
    {
      id: 5,
      icon: <FaGlobe />,
      title: 'Expertise terrain',
      description: 'Accédez à notre expertise et notre connaissance approfondie des enjeux humanitaires et des territoires où nous intervenons.'
    }
  ];

  // Partnership types
  const partnershipTypes = [
    {
      id: 1,
      title: 'Mécénat financier',
      description: 'Soutenez nos actions par des dons ponctuels ou réguliers, déductibles fiscalement à hauteur de 60% de votre impôt sur les sociétés.',
      image: 'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Mécénat de compétences',
      description: 'Mettez à disposition les compétences de vos collaborateurs pour nous appuyer dans nos projets ou notre fonctionnement.',
      image: 'https://images.unsplash.com/photo-1574351406668-89365ee52abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Produit-partage',
      description: 'Proposez un produit ou service dont une partie des bénéfices sera reversée à notre association pour financer nos projets.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Partenariat opérationnel',
      description: 'Collaborez avec nous sur le terrain pour mettre en œuvre des projets communs, en apportant vos ressources et votre expertise.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  // Partner testimonials
  const testimonials = [
    {
      id: 1,
      quote: 'Notre partenariat avec AssociaPute a été transformateur, tant pour les communautés que nous avons pu aider ensemble que pour notre propre entreprise. La transparence et le professionnalisme de l\'équipe ont fait de cette collaboration un véritable succès.',
      name: 'Marie Dupont',
      role: 'Directrice RSE, Entreprise ABC',
      logo: 'https://via.placeholder.com/150x80'
    },
    {
      id: 2,
      quote: 'Depuis 3 ans, nous soutenons les projets d\'accès à l\'eau potable menés par AssociaPute. Au-delà de l\'impact concret sur le terrain, ce partenariat a fédéré nos équipes et renforcé notre culture d\'entreprise autour de valeurs fortes.',
      name: 'Thomas Martin',
      role: 'PDG, Entreprise XYZ',
      logo: 'https://via.placeholder.com/150x80'
    }
  ];

  return (
    <div className={`devenir-partenaire-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="page-title">Devenir notre partenaire</h1>
            <p className="hero-text">
              Rejoignez-nous dans notre mission d'aide aux plus vulnérables. 
              Ensemble, nous pouvons avoir un impact significatif et durable sur 
              les communautés que nous soutenons à travers le monde.
            </p>
            <Link to="/nous-contacter" className="btn btn-primary">
              Discuter d'un partenariat
            </Link>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Partenariat" 
              className="hero-image"
            />
          </div>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">Pourquoi devenir partenaire ?</h2>
          <div className="benefits-grid">
            {partnerBenefits.map((benefit) => (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="types-section">
          <h2 className="section-title">Nos types de partenariats</h2>
          <div className="partnership-types">
            {partnershipTypes.map((type) => (
              <div key={type.id} className="partnership-card">
                <div className="partnership-image-container">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="partnership-image"
                  />
                </div>
                <div className="partnership-content">
                  <h3 className="partnership-title">{type.title}</h3>
                  <p className="partnership-description">{type.description}</p>
                  <Link to="/nous-contacter" className="partnership-link">
                    En savoir plus <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <h2 className="section-title">Ils nous font confiance</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-container">
                  <p className="quote">"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-logo">
                    <img src={testimonial.logo} alt="Logo partenaire" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à nous rejoindre ?</h2>
            <p className="cta-text">
              Prenons rendez-vous pour discuter de votre projet et voir comment 
              nous pouvons construire ensemble un partenariat qui répond à vos 
              objectifs et aux besoins des communautés que nous soutenons.
            </p>
            <div className="cta-buttons">
              <Link to="/nous-contacter" className="btn btn-primary">
                Contactez-nous
              </Link>
              <a href="tel:+33123456789" className="btn btn-outline">
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Quel est le montant minimal pour un partenariat ?</h3>
              <p className="faq-answer">
                Il n'y a pas de montant minimal fixe. Nous construisons des partenariats sur mesure 
                en fonction de vos capacités et de vos objectifs. Contactez-nous pour discuter de vos 
                possibilités.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Quels avantages fiscaux pour mon entreprise ?</h3>
              <p className="faq-answer">
                En France, les dons effectués dans le cadre d'un mécénat d'entreprise sont déductibles 
                à hauteur de 60% de l'impôt sur les sociétés, dans la limite de 0,5% du chiffre d'affaires HT.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Comment puis-je impliquer mes collaborateurs ?</h3>
              <p className="faq-answer">
                Nous proposons plusieurs formats d'engagement : journées solidaires sur le terrain, 
                collectes internes, défis sportifs solidaires, mécénat de compétences... Nous adaptons 
                les modalités à votre structure et à vos objectifs.
              </p>
            </div>
          </div>
          <div className="faq-more">
            <Link to="/faq" className="faq-link">
              Voir toutes les questions <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevenirPartenaire; 