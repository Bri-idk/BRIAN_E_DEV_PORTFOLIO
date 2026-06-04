import "./navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from './recursos/codificacion.png'
import { translations } from './translations'

function Navbar({ isDarkMode, toggleDarkMode, language, toggleLanguage }){
    const [isOpen, setIsOpen] = useState(false);
    const t = translations[language].nav;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav id="navbar">
        <div className="contenedor">
          <Link to="/" className="brand" onClick={() => setIsOpen(false)}>
            <img className="icono" src={logoImg} width={45} height={45} alt="" />
            <h2 className="logo-text">BrianE Dev</h2>
          </Link>

          <div className="nav-right">
            <button className="lang-toggle" onClick={toggleLanguage} title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}>
              {language === 'es' ? 'ES' : 'EN'}
            </button>

            <button className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? "🌙" : "☀️"}
            </button>

            {/* Botón Hamburguesa para Mobile */}
            <button className="menu-toggle" onClick={toggleMenu}>
              <span className={isOpen ? "bar open" : "bar"}></span>
              <span className={isOpen ? "bar open" : "bar"}></span>
              <span className={isOpen ? "bar open" : "bar"}></span>
            </button>

            <div className={isOpen ? "nav-buttons open" : "nav-buttons"}>
              <Link to="/contacto" className="button_nav" onClick={() => setIsOpen(false)}>{t.contact}</Link>
              <Link to="/proyectos" className="button_nav" onClick={() => setIsOpen(false)}>{t.projects}</Link>
              <Link to="/acerca" className="button_nav" onClick={() => setIsOpen(false)}>{t.about}</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar