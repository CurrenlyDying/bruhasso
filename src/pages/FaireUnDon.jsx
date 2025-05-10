import { useState, useEffect } from 'react';
import { FaRegCreditCard, FaRegCheckCircle, FaSpinner } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../styles/FaireUnDon.css';

// Initialize Stripe (replace with a real publishable key in production)
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// The checkout form component
const CheckoutForm = ({ donationAmount, donationType, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal_code: '',
    country: 'FR',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    if (!cardComplete) {
      setError("Veuillez compléter les informations de votre carte bancaire.");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // In a real application, you would create a payment intent on your server
      // Here we're simulating a successful payment

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate a successful payment
      onSuccess({
        name: paymentInfo.name,
        amount: donationAmount,
        type: donationType,
        date: new Date().toLocaleDateString(),
      });
    } catch (err) {
      setError("Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label htmlFor="name">Nom complet</label>
        <input
          id="name"
          type="text"
          name="name"
          value={paymentInfo.name}
          onChange={handleChange}
          placeholder="Prénom Nom"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={paymentInfo.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input
            id="address"
            type="text"
            name="address"
            value={paymentInfo.address}
            onChange={handleChange}
            placeholder="Adresse"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">Ville</label>
          <input
            id="city"
            type="text"
            name="city"
            value={paymentInfo.city}
            onChange={handleChange}
            placeholder="Ville"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postal_code">Code postal</label>
          <input
            id="postal_code"
            type="text"
            name="postal_code"
            value={paymentInfo.postal_code}
            onChange={handleChange}
            placeholder="Code postal"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="country">Pays</label>
        <select
          id="country"
          name="country"
          value={paymentInfo.country}
          onChange={handleChange}
          required
        >
          <option value="FR">France</option>
          <option value="BE">Belgique</option>
          <option value="CH">Suisse</option>
          <option value="CA">Canada</option>
          <option value="Other">Autre</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Informations de carte
          <FaRegCreditCard className="card-icon" />
        </label>
        <div className="card-element-container">
          <CardElement
            onChange={(e) => setCardComplete(e.complete)}
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <button
        type="submit"
        className="btn-donate"
        disabled={!stripe || processing}
      >
        {processing ? (
          <>
            <FaSpinner className="spinner" /> Traitement en cours...
          </>
        ) : (
          `Faire un don de ${donationAmount}€`
        )}
      </button>

      <p className="secure-payment">
        <small>Paiement 100% sécurisé. Vos informations sont protégées.</small>
      </p>
    </form>
  );
};

// Main donation page component
const FaireUnDon = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('ponctuel');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Predefined donation amounts
  const amounts = [20, 50, 100, 200];

  useEffect(() => {
    // Animation effect
    setIsVisible(true);
  }, []);

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(value) && Number(value) > 0) {
      setDonationAmount(Number(value));
    }
  };

  const handleDonationSuccess = (donationInfo) => {
    setDonationSuccess(donationInfo);
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setShowSuccessMessage(false);
    setDonationAmount(50);
    setCustomAmount('');
    setDonationType('ponctuel');
  };

  return (
    <div className="donation-page">
      <div className="container">
        {showSuccessMessage ? (
          <div className="donation-success">
            <FaRegCheckCircle className="success-icon" />
            <h2>Merci pour votre don !</h2>
            <p>
              Votre don de <strong>{donationSuccess.amount}€</strong> a été traité avec succès.
              Un reçu a été envoyé à votre adresse email.
            </p>
            <p>
              Votre générosité nous aide à poursuivre notre mission et à faire une différence 
              dans la vie de nombreuses personnes.
            </p>
            <button onClick={resetForm} className="btn btn-primary">
              Faire un autre don
            </button>
          </div>
        ) : (
          <div className={`donation-content ${isVisible ? 'visible' : ''}`}>
            <div className="donation-header">
              <h1 className="page-title">Faire un don</h1>
              <p className="donation-intro">
                Votre soutien nous permet de continuer nos actions humanitaires 
                et de développement à travers le monde. Chaque don compte, 
                quel que soit son montant.
              </p>
            </div>

            <div className="donation-container">
              <div className="donation-form-container">
                <div className="donation-options">
                  <div className="donation-type">
                    <h3>Type de don</h3>
                    <div className="type-options">
                      <button
                        className={donationType === 'ponctuel' ? 'active' : ''}
                        onClick={() => setDonationType('ponctuel')}
                      >
                        Ponctuel
                      </button>
                      <button
                        className={donationType === 'mensuel' ? 'active' : ''}
                        onClick={() => setDonationType('mensuel')}
                      >
                        Mensuel
                      </button>
                    </div>
                  </div>

                  <div className="donation-amount">
                    <h3>Montant</h3>
                    <div className="amount-options">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          className={donationAmount === amount && !customAmount ? 'active' : ''}
                          onClick={() => handleAmountClick(amount)}
                        >
                          {amount}€
                        </button>
                      ))}
                      <div className="custom-amount">
                        <input
                          type="number"
                          placeholder="Autre montant"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          min="1"
                        />
                        <span className="euro">€</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="checkout-container">
                  <h3>Informations de paiement</h3>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm 
                      donationAmount={donationAmount} 
                      donationType={donationType}
                      onSuccess={handleDonationSuccess}
                    />
                  </Elements>
                </div>
              </div>

              <div className="donation-info">
                <div className="tax-info">
                  <h3>Réduction fiscale</h3>
                  <p>
                    Votre don est déductible à hauteur de 66% de votre impôt sur le revenu, 
                    dans la limite de 20% de votre revenu imposable.
                  </p>
                  <p>
                    Par exemple, un don de <strong>{donationAmount}€</strong> vous coûte réellement{' '}
                    <strong>{Math.round(donationAmount * 0.34)}€</strong> après déduction fiscale.
                  </p>
                </div>

                <div className="impact-info">
                  <h3>Votre impact</h3>
                  <ul>
                    <li>
                      <strong>20€</strong> permettent de fournir de l'eau potable à 5 familles pendant un mois
                    </li>
                    <li>
                      <strong>50€</strong> contribuent à la scolarisation d'un enfant pendant trois mois
                    </li>
                    <li>
                      <strong>100€</strong> permettent de financer un kit médical d'urgence
                    </li>
                    <li>
                      <strong>200€</strong> aident à la construction d'un abri temporaire pour une famille
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaireUnDon; 