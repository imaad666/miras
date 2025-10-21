import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/home.css'
import './styles/catalog.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
