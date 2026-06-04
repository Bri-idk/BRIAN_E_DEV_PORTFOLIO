import { useState } from 'react'
import './App.css'

const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "Una plataforma completa con carrito de compras y pagos integrados.",
    images: ["./recursos/codificacion.png"]
  },
  {
    id: 2,
    title: "Portfolio v1",
    description: "Mi primer portfolio interactivo enfocado en animaciones fluidas.",
    images: ["./recursos/codificacion.png"]
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Panel de administración para gestión de datos en tiempo real.",
    images: ["./recursos/codificacion.png"]
  }
];

function Proyectos() {
  return (
    <div className="page-content">
      <h1>Mis Proyectos</h1>
      <p>Explora mis trabajos más recientes. Haz clic para ver detalles y carruseles de imágenes.</p>
      
      <div className="grid-placeholder">
        {PROJECTS_DATA.map(project => (
          <div key={project.id} className="project-card">
            <div className="carousel-container">
              <img src={project.images[0]} alt={project.title} />
              {/* Aquí iría la lógica del carrusel con flechas en el futuro */}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="btn-details">Ver más detalles</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyectos