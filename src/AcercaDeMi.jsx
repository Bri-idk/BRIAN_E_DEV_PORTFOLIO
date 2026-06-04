import aboutImg from './recursos/personal.png'
import { translations } from './translations'
import './App.css'

function AcercaDeMi({ lang }) {
  const t = translations[lang].about;
  return (
    <div className="page-content">
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <div className="about-visual">
        <img src={aboutImg} alt="Espacio de trabajo" />
      </div>

      <section>
        <h2>{t.historyTitle}</h2>
        <p>{t.historyText}</p>
      </section>
    </div>
  )
}

export default AcercaDeMi