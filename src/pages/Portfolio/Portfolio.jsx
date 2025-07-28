import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="services-section">
      <div
        className="services-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner.jpg'})` }}
      ></div>

      <div className="services-content">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="divider"></div>

        <div className="services-cards">
          <div className="service-card">
            <img src={process.env.PUBLIC_URL + '/images/fresh-food.jpg'} alt="Fresh Food" />
            <h3>Fresh Food</h3>
            <p>Site de vente de produits frais en ligne</p>
            <button>Voir le site</button>
            <small>Site réalisé avec PHP et MySQL</small>
          </div>

          <div className="service-card">
            <img src={process.env.PUBLIC_URL + '/images/restaurant-akira.jpg'} alt="Restaurant Akira" />
            <h3>Restaurant Akira</h3>
            <p>Site de vente de produits frais en ligne</p>
            <button>Voir le site</button>
            <small>Site réalisé avec WordPress</small>
          </div>

          <div className="service-card">
            <img src={process.env.PUBLIC_URL + '/images/espace-bien-etre.jpg'} alt="Espace bien-être" />
            <h3>Espace bien-être</h3>
            <p>Site de vente de produits frais en ligne</p>
            <button>Voir le site</button>
            <small>Site réalisé avec LARAVEL</small>
          </div>

          <div className="service-card">
            <img src={process.env.PUBLIC_URL + '/images/seo.jpg'} alt="SEO" />
            <h3>SEO</h3>
            <p>Amélioration du référencement d'un site e-commerce</p>
            <button>Voir le site</button>
            <small>Utilisation des outils SEO</small>
          </div>

          <div className="service-card">
            <img src={process.env.PUBLIC_URL + '/images/api.jpg'} alt="Création d'une API" />
            <h3>Création d'une API</h3>
            <p>Création d'une API RESTFULL publique</p>
            <button>Voir le site</button>
            <small>PHP - SYMFONY</small>
          </div>

          <div className="service-card">
            <img src={process.env.PUBLIC_URL + '/images/maquette-site.jpg'} alt="Maquette d'un site web" />
            <h3>Maquette d'un site web</h3>
            <p>Création du prototype d'un site</p>
            <button>Voir le site</button>
            <small>Réalisé avec FIGMA</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;