import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './navbar.jsx'
import Proyectos from './Proyectos.jsx'
import AcercaDeMi from './AcercaDeMi.jsx'
import Contactame from './Contactame.jsx'
import heroImg from './recursos/codificacion.png'
import './App.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Desarrollador <br />
          <span>Full Stack & UI Designer</span>
        </h1>
        <p className="hero-description">
          Hola, soy Brian. Me especializo en crear experiencias digitales únicas, 
          combinando código limpio con diseños modernos y funcionales.
        </p>
        <div className="hero-actions">
          <Link to="/proyectos" className="btn-primary">Mis Proyectos</Link>
          <Link to="/acerca" className="btn-secondary">Saber más</Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img src={heroImg} alt="Hero representation" />
        </div>
      </div>
    </section>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="separador"></div>

        <main id="body">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/acerca" element={<AcercaDeMi />} />
            <Route path="/contacto" element={<Contactame />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-info">
              <h3>BrianE Dev</h3>
              <p>© {new_string_date} BrianE Dev. Todos los derechos reservados.</p>
            </div>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">X / Twitter</a>
              <a href="mailto:tuemail@ejemplo.com" className="social-link">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

const new_string_date = new Date().getFullYear();

export default App
