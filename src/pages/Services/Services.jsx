import React from 'react';
import Card from '../../components/Card/Card';
import './Services.scss';

function Services() {
  return (
    <section className="services-section">
      <div
        className="services-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner.jpg'})` }}
      ></div>

      <div className="services-content">
        <h2>Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="divider"></div>

        <div className="services-cards">
          <Card
            iconClass="bi bi-brush"
            title="UX Design"
            description="Conception centrée utilisateur de sites, applis, objets connectés pour une expérience fluide et agréable."
          />
          <Card
            iconClass="bi bi-code-slash"
            title="Développement web"
            description="Création de sites web responsives avec HTML, CSS, JavaScript, PHP et frameworks modernes."
          />
          <Card
            iconClass="bi bi-search"
            title="Référencement"
            description="Optimisation SEO pour améliorer la visibilité et attirer plus de visiteurs qualifiés."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;