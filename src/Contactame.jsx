import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function Contactame() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Nota: Reemplaza estos IDs con tus IDs reales de EmailJS si decides configurarlo completamente
    // Service ID, Template ID y Public Key.
    emailjs.sendForm('service_default', 'template_default', form.current, 'TU_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <div className="page-content">
      <h1>Contáctame</h1>
      <p>¿Tienes un proyecto en mente o una vacante? ¡Hablemos!</p>
      
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Nombre</label>
          <input type="text" id="user_name" name="user_name" placeholder="Tu Nombre" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" placeholder="Tu Email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" placeholder="¿En qué puedo ayudarte?" required></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </div>

        {status === 'success' && <p className="status-msg success">¡Mensaje enviado con éxito! Te contactaré pronto.</p>}
        {status === 'error' && <p className="status-msg error">Hubo un error. Por favor, intenta de nuevo o escríbeme directamente.</p>}
      </form>

      <section className="direct-contact">
        <h2>Contacto Directo</h2>
        <p>Email: <a href="mailto:briane.pinedamartineza@gmail.com" className="social-link">briane.pinedamartineza@gmail.com</a></p>
      </section>
    </div>
  )
}

export default Contactame