import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import Header from './components/Header.tsx'
import Summary from './components/Summary.tsx'
import Project from './components/Project.tsx'
import Contact from './components/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Summary />
    <Project />
    <Contact />
  </StrictMode>,
)
