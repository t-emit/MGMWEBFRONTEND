import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. Import the Modal library
import Modal from 'react-modal';

// 2. Tell the library what your app's root element is
Modal.setAppElement('#root');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
