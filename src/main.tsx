import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore: side-effect import of CSS module
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root') as HTMLElement

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
