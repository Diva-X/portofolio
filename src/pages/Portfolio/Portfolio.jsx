import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="portfolio-section">
      {/* Image bleue en fond */}
      <div
        className="portfolio-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner.jpg'})` }}
      ></div>

      {/* Zone blanche contenant titre, sous-titre, barre et cartes */}
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="divider"></div>

        <div className="portfolio-cards">
          <div className="portfolio-card">
            <img src="/images/portfolio/fresh-food.jpg" alt="Fresh Food" />
            <h3>Fresh Food</h3>
            <p>Site de vente de produits frais en ligne</p>
            <button>Voir le site</button>
            <div className="portfolio-footer">Site réalisé avec PHP et MySQL</div>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/restaurant-japonais.jpg" alt="Restaurant Akira" />
            <h3>Restaurant Akira</h3>
            <p>Site de vente de produits frais en ligne</p>
            <button>Voir le site</button>
            <div className="portfolio-footer">Site réalisé avec WordPress</div>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/espace-bien-etre.jpg" alt="Espace bien-être" />
            <h3>Espace bien-être</h3>
            <p>Site de vente de produits frais en ligne</p>
            <button>Voir le site</button>
            <div className="portfolio-footer">Site réalisé avec LARAVEL</div>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/seo.jpg" alt="SEO" />
            <h3>SEO</h3>
            <p>Amélioration du référencement d'un site e-commerce</p>
            <button>Voir le site</button>
            <div className="portfolio-footer">Utilisation des outils SEO</div>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/coder.jpg" alt="Création d'une API" />
            <h3>Création d'une API</h3>
            <p>Création d'une API RESTFULL publique</p>
            <button>Voir le site</button>
            <div className="portfolio-footer">PHP - SYMFONY</div>
          </div>

          <div className="portfolio-card">
            <img src="/images/portfolio/screens.jpg" alt="Maquette d'un site web" />
            <h3>Maquette d'un site web</h3>
            <p>Création du prototype d'un site</p>
            <button>Voir le site</button>
            <div className="portfolio-footer">Réalisé avec FIGMA</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;