import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import './styles/refinements.css'
import './styles/event-refinements.css'
import './styles/team-refinements.css'
import './styles/scroll-refinements.css'
import './styles/team-page-refinements.css'
import './styles/about-corrections.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
