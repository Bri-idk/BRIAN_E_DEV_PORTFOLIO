import aboutImg from './recursos/personal.png'
import cvFile from './recursos/CV_Brian_Pineda_Martinez.pdf'
import { translations } from './translations'
import './App.css'

function AcercaDeMi({ lang }) {
  const t = translations[lang].about;
  return (
    <div className="page-content">
      <h1>{t.title}</h1>
      <p>{t.description}</p>

      <div className="cv-download-container">
        <a href={cvFile} target="_blank" rel="noopener noreferrer" className="btn-primary cv-btn">
          📄 {t.cvLink}
        </a>
      </div>

      <div className="about-visual">
        <img src={aboutImg} alt="Espacio de trabajo" />
      </div>

      <section className="about-section">
        <h2>{t.historyTitle}</h2>
        <p>{t.historyText}</p>
      </section>

      <section className="about-section certs-section">
        <h2>{t.certificationsTitle}</h2>
        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-icon">🎓</div>
            <div className="cert-info">
              <h3>{t.englishCert}</h3>
              <p>{t.englishDesc}</p>
              <a href="https://cert.efset.org/es/AEQNbH" target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                {t.verify} →
              </a>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🐍</div>
            <div className="cert-info">
              <h3>{t.pythonCert}</h3>
              <p>{t.pythonDesc}</p>
              <a href="https://ude.my/UC-25f84ad6-46fd-430c-9266-68382c9b1c43" target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                {t.verify} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcercaDeMi