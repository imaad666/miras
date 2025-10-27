import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ArtisanStory from './pages/ArtisanStory'
import ReturnsPage from './pages/ReturnsPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ShippingDelivery from './pages/ShippingDelivery'
import TermsConditions from './pages/TermsConditions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/home.css'
import './styles/catalog.css'
import './styles/returns.css'
import './styles/privacy.css'
import './styles/shipping.css'
import './styles/terms.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/our-story" element={<ArtisanStory />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
