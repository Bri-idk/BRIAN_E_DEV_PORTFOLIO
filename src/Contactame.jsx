import './App.css'

function Contactame() {
  return (
    <div className="page-content">
      <h1>Contáctame</h1>
      <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Tu Nombre" />
        <input type="email" placeholder="Tu Email" />
        <textarea placeholder="Tu Mensaje"></textarea>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Enviar Mensaje</button>
        </div>
      </form>
    </div>
  )
}

export default Contactame