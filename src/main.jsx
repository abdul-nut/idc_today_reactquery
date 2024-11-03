import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TanstackProvider } from './context/Tanstack.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TanstackProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TanstackProvider>
  </StrictMode>,
)
