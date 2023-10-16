import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Modal from 'react-modal';
import './index.css'
import { UserContextProvider } from './context/UserContext.jsx'

// Define el elemento raíz de la aplicación
const rootElement = document.getElementById('root');

// Configura el elemento raíz de la aplicación para react-modal
Modal.setAppElement(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider >
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)