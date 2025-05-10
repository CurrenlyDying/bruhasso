import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheck } from 'react-icons/fa';
import '../styles/NousContacter.css';

const NousContacter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: 'email',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    
    if (formData.contactPreference === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis pour ce mode de contact';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            contactPreference: 'email',
          });
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className={`contact-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Nous contacter</h1>
          <p className="page-subtitle">
            Vous avez une question, une suggestion ou souhaitez nous rejoindre ? N'hésitez pas à nous contacter.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info-section">
            <div className="contact-method">
              <div className="icon-container">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Adresse</h3>
                <p>123 Rue de la Solidarité<br />75001 Paris, France</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p><a href="mailto:contact@associapute.org">contact@associapute.org</a></p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Téléphone</h3>
                <p><a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
              </div>
            </div>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033236!2d2.3354330153239447!3d48.87456397928982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sRue%20de%20la%20Paix%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1623323998087!5m2!1sfr!2sfr" 
                allowFullScreen="" 
                loading="lazy"
                title="Carte"
                className="google-map"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-section">
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <FaCheck />
                </div>
                <h3>Message envoyé !</h3>
                <p>
                  Merci de nous avoir contactés. Notre équipe vous répondra dans 
                  les plus brefs délais, généralement sous 24-48 heures ouvrables.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Nom *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <div className="error-message">{errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>

                <div className="form-group">
                  <label>Mode de contact préféré</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleChange}
                      />
                      <span>Email</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleChange}
                      />
                      <span>Téléphone</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                <p className="form-note">
                  * Champs obligatoires
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NousContacter; 