import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { translations } from './translations'
import './App.css'

function Contactame({ lang }) {
  const form = useRef();
  const [status, setStatus] = useState('');
  const t = translations[lang].contact;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Service ID, Template ID y Public Key de EmailJS.
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
    <div className="page-content contact-container">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">{t.name}</label>
          <input type="text" id="user_name" name="user_name" placeholder={t.name} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="user_email">{t.email}</label>
          <input type="email" id="user_email" name="user_email" placeholder={t.email} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">{t.message}</label>
          <textarea id="message" name="message" placeholder={t.message} required></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? t.sending : t.send}
          </button>
        </div>

        {status === 'success' && <p className="status-msg success">{t.success}</p>}
        {status === 'error' && <p className="status-msg error">{t.error}</p>}
      </form>

      <section className="direct-contact">
        <h2>{t.direct}</h2>
        <p>Email: <a href="mailto:briane.pinedamartineza@gmail.com" className="social-link">briane.pinedamartineza@gmail.com</a></p>
        <p>{t.interest} <a href="https://cuyox3.com" target="_blank" rel="noopener noreferrer" className="social-link">CuyoX3</a></p>
      </section>
    </div>
  )
}

export default Contactame