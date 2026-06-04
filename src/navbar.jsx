import "./navbar.css"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <nav id="navbar">
        <div className="contenedor">
          <Link to="/" className="brand" onClick={() => setIsOpen(false)}>
            <img className="icono" src={"./recursos/codificacion.png"} width={45} height={45} alt="" />
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