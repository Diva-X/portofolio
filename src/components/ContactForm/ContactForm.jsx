import React from 'react';
import './ContactForm.scss';

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contactez-moi</h2>
          <p>Remplissez le formulaire pour me laisser un message.</p>

          <form>
            <div className="form-group">
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Votre message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Coordonnées</h3>
          <p><strong>Nom :</strong> John Doe</p>
          <p><strong>Adresse :</strong> 123 rue de la République, 75001 Paris</p>
          <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
          <p><strong>Email :</strong> john.doe@email.com</p>

          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999399473141!2d2.292292615674329!3d48.85837307928747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7d7a2a7f5%3A0x9b9b9b9b9b9b9b9b!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1620300000000!5m2!1sfr!2sfr"
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