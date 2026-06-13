import { useState, useEffect } from 'react'
import { translations } from './translations'
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

// Mapas de imágenes para complementar la data traducida
const PROJECT_IMAGES = {
  3: [portCover, port1, port2],
  1: [cuyoCover, cuyo1, cuyo2],
  2: [mafCover, maf1, maf2],
  4: [totoCover, toto1, toto2]
};

const PROJECT_URLS = {
  3: "#",
  1: "https://cuyox3.com",
  2: "https://mafautomation.com.mx/",
  4: "https://totonik.com"
};

function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={src} alt={alt} className="modal-image" />
      </div>
    </div>
  );
}

function Proyectos({ lang }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const t = translations[lang].projects;

  const openModal = (img, alt) => {
    setModalImg({ src: img, alt: alt });
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <div className="page-content">
      <h1>{t.pageTitle}</h1>
      <p>{t.pageSubtitle}</p>
      
      <div className="grid-placeholder">
        {t.data.map(project => {
          const images = PROJECT_IMAGES[project.id];
          const url = PROJECT_URLS[project.id];
          const isCurrent = project.id === 3;

          return (
            <div key={project.id} className="project-card">
              <div className="carousel-container" onClick={() => openModal(images[0], project.title)}>
                <img src={images[0]} alt={project.title} style={{ cursor: 'zoom-in' }} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button 
                  className="btn-details" 
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  {selectedProject === project.id ? t.closeDetails : t.details}
                </button>
                
                {selectedProject === project.id && (
                  <div className="project-details-expanded">
                    <h4>{t.views}</h4>
                    <div className="project-screenshots">
                      {images.map((img, index) => (
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
                    {isCurrent ? (
                      <p className="current-hint">{t.current}</p>
                    ) : (
                      <>
                        <h4>{t.link}</h4>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">{t.visit}</a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
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