import { useState } from 'react'
import projectImg from './recursos/codificacion.png'
import './App.css'

const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "Una plataforma completa con carrito de compras y pagos integrados.",
    images: [projectImg]
  },
  {
    id: 2,
    title: "Portfolio v1",
    description: "Mi primer portfolio interactivo enfocado en animaciones fluidas.",
    images: [projectImg]
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Panel de administración para gestión de datos en tiempo real.",
    images: [projectImg]
  }
];

function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page-content">
      <h1>Mis Proyectos</h1>
      <p>Explora mis trabajos más recientes. Haz clic para ver detalles y carruseles de imágenes.</p>
      
      <div className="grid-placeholder">
        {PROJECTS_DATA.map(project => (
          <div key={project.id} className="project-card">
            <div className="carousel-container">
              <img src={project.images[0]} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button 
                className="btn-details" 
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {selectedProject === project.id ? "Cerrar detalles" : "Ver detalles"}
              </button>
              
              {selectedProject === project.id && (
                <div className="project-details-expanded">
                  <h4>Tecnologías:</h4>
                  <p>React, Node.js, CSS Modules</p>
                  <h4>Enlace:</h4>
                  <a href="#" className="social-link">Visitar Sitio</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyectos