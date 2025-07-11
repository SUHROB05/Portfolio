import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PortfolioPges from './Pags/PortfoliyoPags/index.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollController from './JS/ScrollController';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollController>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="partfolio" element={<PortfolioPges />}></Route>
        </Routes>
      </ScrollController>
    </Router>
  </StrictMode>,
)
