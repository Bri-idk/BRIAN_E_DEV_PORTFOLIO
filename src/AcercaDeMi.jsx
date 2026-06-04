import aboutImg from './recursos/personal.jpg'
import './App.css'

function AcercaDeMi() {
  return (
    <div className="page-content">
      <h1>Acerca de Mí</h1>
      <p>Soy un desarrollador Full Stack especializado en el ecosistema Python, 
        con un enfoque particular en la creación de soluciones escalables,
         robustas y eficientes utilizando Django. 
         Me apasiona estructurar arquitecturas backend sólidas, 
         diseñar bases de datos optimizadas y construir interfaces 
         interactivas que ofrezcan una excelente experiencia de usuario.</p>
      <div className="about-visual">
        <img src={aboutImg} alt="Espacio de trabajo" />
      </div>

      <section>
        <h2>Mi Historia</h2>
        <p>
          Empecé en el mundo del desarrollo web de manera autónoma, 
          motivado por el deseo de construir mis propias herramientas y
           entender el "detrás de escena" del software. Lo que comenzó 
           como un reto personal de lógica se convirtió en mi profesión; 
           hoy en día, esa mentalidad autodidacta me permite adaptarme 
           rápidamente a nuevos entornos técnicos, colaborar de forma 
           efectiva en equipos ágiles y aportar valor real en cada 
           línea de código que escribo.
        </p>
      </section>
    </div>
  )
}

export default AcercaDeMi