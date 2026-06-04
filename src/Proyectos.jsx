import { useState } from 'react'
import './App.css'

// Imports de imágenes para CuyoX3
import cuyoCover from './recursos/cuyox3/Cuyox3.jpeg'
import cuyo1 from './recursos/cuyox3/cuyox3_areas.jpeg'
import cuyo2 from './recursos/cuyox3/cuyoX3_services.jpeg'

// Imports de imágenes para MafAuto
import mafCover from './recursos/mafauto/maf_auto.jpeg'
import maf1 from './recursos/mafauto/mafauto_catalogo.jpeg'
import maf2 from './recursos/mafauto/mafauto_login.jpeg'

// Imports de imágenes para Portafolio
import portCover from './recursos/portafolio/portafolio_final.jpeg'
import port1 from './recursos/portafolio/portafolio1.png'
import port2 from './recursos/portafolio/portafolio2.png'

// Imports de imágenes para Totonik
import totoCover from './recursos/totonik/totonik.jpeg'
import toto1 from './recursos/totonik/totonik_2.jpeg'
import toto2 from './recursos/totonik/totonik_3.jpeg'

const PROJECTS_DATA = [
  {
    id: 3,
    title: "Portafolio Personal",
    description: "¡Tú estás aquí! También puedes ver vistazos de otros prototipos de esta misma página.",
    images: [portCover, port1, port2],
    url: "#",
    isCurrent: true
  },
  {
    id: 1,
    title: "CuyoX3",
    description: "Plataforma de servicios integrales con enfoque en gestión de áreas y atención personalizada.",
    images: [cuyoCover, cuyo1, cuyo2],
    url: "https://cuyox3.com"
  },
  {
    id: 2,
    title: "MafAuto",
    description: "Sistema de catálogo y gestión automotriz con portal de clientes y panel administrativo.",
    images: [mafCover, maf1, maf2],
    url: "https://mafautomation.com.mx/"
  },
  {
    id: 4,
    title: "Totonik",
    description: "Solución digital creativa con interfaces modernas y optimización de rendimiento.",
    images: [totoCover, toto1, toto2],
    url: "https://totonik.com"
  }
];

function ImageModal({ src, alt, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={src} alt={alt} className="modal-image" />
      </div>
    </div>
  );
}

function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img, alt) => {
    setModalImg({ src: img, alt: alt });
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <div className="page-content">
      <h1>Mis proyectos y proyectos en los que he trabajado</h1>
      <p>Da un vistazo a mi trabajo y descubre si mi estilo y soluciones encajan con lo que buscas.</p>
      
      <div className="grid-placeholder">
        {PROJECTS_DATA.map(project => (
          <div key={project.id} className="project-card">
            <div className="carousel-container" onClick={() => openModal(project.images[0], project.title)}>
              <img src={project.images[0]} alt={project.title} style={{ cursor: 'zoom-in' }} />
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
                  <h4>Vistazos del proyecto:</h4>
                  <div className="project-screenshots">
                    {project.images.map((img, index) => (
                      <img 
                        key={index} 
                        src={img} 
                        alt={`Captura ${index + 1}`} 
                        className="detail-thumb" 
                        style={{ cursor: 'zoom-in' }}
                        onClick={() => openModal(img, project.title)}
                      />
                    ))}
                  </div>
                  {project.isCurrent ? (
                    <p className="current-hint">Estás navegando en este proyecto actualmente.</p>
                  ) : (
                    <>
                      <h4>Enlace:</h4>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="social-link">Visitar Sitio</a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalImg && (
        <ImageModal 
          src={modalImg.src} 
          alt={modalImg.alt} 
          onClose={closeModal} 
        />
      )}
    </div>
  )
}

export default Proyectos