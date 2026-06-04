import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './navbar.jsx'
import Proyectos from './Proyectos.jsx'
import AcercaDeMi from './AcercaDeMi.jsx'
import Contactame from './Contactame.jsx'
import heroImg from './recursos/codificacion.png'
import { translations } from './translations'
import './App.css'

function Hero({ lang }) {
  const t = translations[lang].hero;
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          {t.title} <br />
          <span>{t.subtitle}</span>
        </h1>
        <p className="hero-description">
          {t.description}
        </p>
        <div className="hero-actions">
          <Link to="/proyectos" className="btn-primary">{t.projectsBtn}</Link>
          <Link to="/acerca" className="btn-secondary">{t.moreBtn}</Link>
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

  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'es';
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

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const tFooter = translations[language].footer;

  return (
    <Router>
      <div className="app-container">
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          language={language} 
          toggleLanguage={toggleLanguage} 
        />
        <div className="separador"></div>

        <main id="body">
          <Routes>
            <Route path="/" element={<Hero lang={language} />} />
            <Route path="/proyectos" element={<Proyectos lang={language} />} />
            <Route path="/acerca" element={<AcercaDeMi lang={language} />} />
            <Route path="/contacto" element={<Contactame lang={language} />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-info">
              <h3>BrianE Dev</h3>
              <p>© {new_string_date} BrianE Dev. {tFooter.rights}</p>
            </div>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/brian-pineda-martinez-dev/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/Bri-idk?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=briane.pinedamartinez@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

const new_string_date = new Date().getFullYear();

export default App
