import React from 'react';
import './Services.scss';

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="services-divider"></div>

        <div className="services-grid">
          <div className="service-card">
            <i className="bi bi-paint"></i>
            <h3>UX Design</h3>
            <p>
              L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
            </p>
          </div>

          <div className="service-card">
            <i className="bi bi-code-slash"></i>
            <h3>Développement web</h3>
            <p>
              Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
            </p>
          </div>

          <div className="service-card">
            <i className="bi bi-search"></i>
            <h3>Référencement</h3>
            <p>
              Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;