import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from "./Sun.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <JSX></JSX>
  </StrictMode>,
)