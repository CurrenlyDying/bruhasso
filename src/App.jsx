import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Actualites from './pages/Actualites'
import NousDecouvrir from './pages/NousDecouvrir'
import DevenirPartenaire from './pages/DevenirPartenaire'
import NosPartenaires from './pages/NosPartenaires'
import FaireUnDon from './pages/FaireUnDon'
import FAQ from './pages/FAQ'
import NousContacter from './pages/NousContacter'

function App() {
  // Add loading state for page transitions
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simulate initial page load
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/actualites" element={<Actualites />} />
              <Route path="/nous-decouvrir" element={<NousDecouvrir />} />
              <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
              <Route path="/nos-partenaires" element={<NosPartenaires />} />
              <Route path="/faire-un-don" element={<FaireUnDon />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/nous-contacter" element={<NousContacter />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
