import React from 'react';
import './ContactForm.scss';

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Colonne gauche : formulaire */}
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Courriel</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Votre message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Envoyer</button>
          </form>
        </div>

        {/* Colonne droite : infos de contact + carte */}
        <div className="contact-infos">
          <h2>Mes coordonnées</h2>
          <p><strong>Nom :</strong> John Doe</p>
          <p><strong>Adresse :</strong> 123 rue du Code, 75000 Paris</p>
          <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
          <p><strong>Email :</strong> john.doe@email.com</p>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999268449108!2d2.2922923156737255!3d48.85837397928716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb0c7c001%3A0xbcc78e6a5918f7e!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1614682892383!5m2!1sfr!2sfr"
              width="100%"
              height="250"
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