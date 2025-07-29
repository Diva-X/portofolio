import React from 'react';
import './ContactForm.scss';

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
        <p> pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <div className="divider"></div>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <h3>Formulaire de contact</h3>
          <div className="sub-divider"></div>
          <form>
            <input type="text" name="name" placeholder="Votre nom *" required />
            <input type="email" name="email" placeholder="Votre adresse e-mail *" required />
            <input type="tel" name="phone" placeholder="Votre numéro de téléphone *" required />
            <input type="text" name="subject" placeholder="Sujet *" required />
            <textarea name="message" placeholder="Votre message *" required></textarea>
            <button type="submit" className="contact-button">Envoyer</button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Mes coordonnées</h3>
          <div className="sub-divider"></div>
          <div className="contact-info">
            <p>Jane Doe</p>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon</p>
            <p>Tél : 10 20 30 40 50 </p>
            <p>Email : jane.doe@email.com</p>
          </div>
          <div className="map-container">
            <iframe
                title="Carte Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.1922133737084!2d4.796404!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1692038497000!5m2!1sfr!2sfr"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;