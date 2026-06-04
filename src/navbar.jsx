import "./navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from './recursos/codificacion.png'

function Navbar({ isDarkMode, toggleDarkMode }){
    const [isOpen, setIsOpen] = useState(false);

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
              <Link to="/contacto" className="button_nav" onClick={() => setIsOpen(false)}>Contactame</Link>
              <Link to="/proyectos" className="button_nav" onClick={() => setIsOpen(false)}>Ver proyectos</Link>
              <Link to="/acerca" className="button_nav" onClick={() => setIsOpen(false)}>Acerca de mi</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar