import { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import '../styles/FAQ.css';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  // Sample FAQ data
  const faqData = {
    general: [
      {
        id: 'g1',
        question: 'Qu\'est-ce que AssociaPute ?',
        answer: 'AssociaPute est une association humanitaire à but non lucratif qui œuvre depuis 2010 pour venir en aide aux personnes vulnérables à travers le monde. Nous intervenons dans les domaines de l\'aide humanitaire, du développement communautaire et de la protection de l\'environnement.'
      },
      {
        id: 'g2',
        question: 'Comment puis-je soutenir votre association ?',
        answer: 'Vous pouvez nous soutenir de plusieurs façons : en faisant un don ponctuel ou régulier, en devenant bénévole, en participant à nos événements ou en relayant nos actions sur les réseaux sociaux. Chaque contribution, quelle que soit sa forme, nous aide à accomplir notre mission.'
      },
      {
        id: 'g3',
        question: 'Où intervenez-vous ?',
        answer: 'Nous intervenons principalement en Afrique, en Asie et en Amérique du Sud. Nos projets sont actuellement actifs dans 18 pays, où nous travaillons en étroite collaboration avec les communautés locales et les autorités.'
      }
    ],
    donation: [
      {
        id: 'd1',
        question: 'Comment puis-je faire un don ?',
        answer: 'Vous pouvez faire un don directement sur notre site web via notre page "Faire un don", par virement bancaire, par chèque, ou par prélèvement automatique si vous souhaitez nous soutenir régulièrement. Tous les détails sont disponibles sur notre page de dons.'
      },
      {
        id: 'd2',
        question: 'Mes dons sont-ils déductibles des impôts ?',
        answer: 'Oui, en France, vos dons à notre association sont déductibles à hauteur de 66% de votre impôt sur le revenu, dans la limite de 20% de votre revenu imposable. Un reçu fiscal vous est automatiquement envoyé pour tout don effectué.'
      },
      {
        id: 'd3',
        question: 'Puis-je cibler mon don vers un projet spécifique ?',
        answer: 'Oui, lors de votre don, vous avez la possibilité de choisir le projet ou le domaine d\'action que vous souhaitez soutenir. Vous pouvez également opter pour un don non affecté, qui nous permet de l\'utiliser là où les besoins sont les plus urgents.'
      },
      {
        id: 'd4',
        question: 'Comment est utilisé mon don ?',
        answer: 'Sur chaque euro que vous donnez, en moyenne 85 centimes sont directement affectés à nos projets sur le terrain. Les 15 centimes restants sont utilisés pour financer nos frais de fonctionnement, indispensables à la bonne exécution de nos missions. Nous veillons à une gestion rigoureuse et transparente de nos ressources.'
      }
    ],
    volunteer: [
      {
        id: 'v1',
        question: 'Comment devenir bénévole ?',
        answer: 'Pour devenir bénévole, vous pouvez nous contacter via notre formulaire en ligne ou nous envoyer un email à benevoles@associapute.org. Nous organisons régulièrement des sessions d\'information pour présenter nos missions et les différentes façons de s\'impliquer.'
      },
      {
        id: 'v2',
        question: 'Faut-il avoir des compétences particulières pour être bénévole ?',
        answer: 'Non, nous accueillons des bénévoles de tous horizons et compétences. Selon votre profil et vos souhaits, nous vous proposerons des missions adaptées. Que ce soit pour des tâches administratives, des événements de collecte, ou des missions sur le terrain, chacun peut trouver sa place.'
      },
      {
        id: 'v3',
        question: 'Puis-je participer à des missions sur le terrain ?',
        answer: 'Oui, nous organisons régulièrement des missions sur le terrain pour les bénévoles. Ces missions sont généralement d\'une durée de 2 semaines à 3 mois et nécessitent une préparation et une formation que nous dispensons. Les frais de mission sont partiellement pris en charge par l\'association.'
      }
    ],
    partnership: [
      {
        id: 'p1',
        question: 'Comment devenir partenaire de l\'association ?',
        answer: 'Pour devenir partenaire, contactez-nous à partenariats@associapute.org. Nous étudierons ensemble les possibilités de collaboration, qu\'il s\'agisse de mécénat, de partenariat opérationnel, ou de projets co-construits.'
      },
      {
        id: 'p2',
        question: 'Quels types de partenariats proposez-vous aux entreprises ?',
        answer: 'Nous proposons plusieurs types de partenariats aux entreprises : mécénat financier, mécénat de compétences, événements de collecte avec les collaborateurs, arrondi sur salaire, ou encore produits-partage. Chaque partenariat est construit sur mesure pour répondre aux objectifs de l\'entreprise tout en soutenant notre mission.'
      }
    ],
    projects: [
      {
        id: 'pr1',
        question: 'Comment sont choisis vos projets ?',
        answer: 'Nos projets sont sélectionnés selon plusieurs critères : les besoins identifiés sur le terrain, notre capacité d\'action, la pérennité potentielle du projet, et la participation des communautés locales. Nous réalisons systématiquement des études préalables pour garantir l\'impact et la pertinence de nos interventions.'
      },
      {
        id: 'pr2',
        question: 'Comment évaluez-vous l\'impact de vos projets ?',
        answer: 'Nous avons mis en place un système rigoureux de suivi et d\'évaluation de tous nos projets. Des indicateurs précis sont définis dès la conception du projet, et des évaluations sont réalisées régulièrement, incluant des enquêtes auprès des bénéficiaires. Ces évaluations nous permettent d\'améliorer constamment nos interventions.'
      },
      {
        id: 'pr3',
        question: 'Travaillez-vous avec des partenaires locaux ?',
        answer: 'Oui, la collaboration avec des partenaires locaux est au cœur de notre approche. Nous travaillons avec des ONG locales, des associations communautaires, des institutions publiques et des entreprises locales. Cette collaboration garantit la pertinence de nos actions et favorise leur durabilité.'
      }
    ]
  };

  // Categories for navigation
  const categories = [
    { id: 'general', label: 'Général' },
    { id: 'donation', label: 'Dons' },
    { id: 'volunteer', label: 'Bénévolat' },
    { id: 'partnership', label: 'Partenariats' },
    { id: 'projects', label: 'Projets' }
  ];

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  const toggleItem = (id) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Filter FAQs based on search term
  const getFilteredFaqs = () => {
    if (!searchTerm) {
      return faqData[activeCategory];
    }

    const searchTermLower = searchTerm.toLowerCase();
    let results = [];

    // Search in all categories
    Object.values(faqData).forEach(categoryFaqs => {
      const filteredCategoryFaqs = categoryFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTermLower) || 
        faq.answer.toLowerCase().includes(searchTermLower)
      );
      results = [...results, ...filteredCategoryFaqs];
    });

    return results;
  };

  const filteredFaqs = getFilteredFaqs();

  return (
    <div className={`faq-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Questions fréquentes</h1>
          <p className="page-subtitle">
            Retrouvez ci-dessous les réponses aux questions les plus fréquemment posées.
            Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="search-section">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {!searchTerm && (
          <div className="faq-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedItems[faq.id] ? 'expanded' : ''}`}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleItem(faq.id)}
                >
                  <h3>{faq.question}</h3>
                  <button className="toggle-btn">
                    {expandedItems[faq.id] ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>Aucun résultat ne correspond à votre recherche. Veuillez essayer avec d'autres termes ou nous contacter directement.</p>
            </div>
          )}
        </div>

        <div className="contact-section">
          <h2>Vous n'avez pas trouvé la réponse à votre question ?</h2>
          <p>
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
            N'hésitez pas à nous contacter par email ou par téléphone.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email : </strong>
              <a href="mailto:contact@associapute.org">contact@associapute.org</a>
            </div>
            <div className="contact-item">
              <strong>Téléphone : </strong>
              <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 