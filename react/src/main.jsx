import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Removed default Vite CSS to use project styles
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
