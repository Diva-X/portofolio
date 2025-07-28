import React from 'react';
import Card from '../../components/Card/Card';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div
        className="portfolio-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner.jpg'})` }}
      ></div>

      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="divider"></div>

        <div className="portfolio-cards">
          <Card
            imageSrc="/images/portfolio/fresh-food.jpg"
            title="Fresh Food"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            footer="Site réalisé avec PHP et MySQL"
          />
          <Card
            imageSrc="/images/portfolio/restaurant-japonais.jpg"
            title="Restaurant Akira"
            description="Restaurant japonais à Paris"
            buttonText="Voir le site"
            footer="Site réalisé avec WordPress"
          />
          <Card
            imageSrc="/images/portfolio/espace-bien-etre.jpg"
            title="Espace bien-être"
            description="Site dédié au bien-être et aux soins"
            buttonText="Voir le site"
            footer="Site réalisé avec LARAVEL"
          />
          <Card
            imageSrc="/images/portfolio/seo.jpg"
            title="SEO"
            description="Amélioration du référencement d'un site e-commerce"
            buttonText="Voir le site"
            footer="Utilisation des outils SEO"
          />
          <Card
            imageSrc="/images/portfolio/coder.jpg"
            title="Création d'une API"
            description="Création d'une API RESTFULL publique"
            buttonText="Voir le site"
            footer="PHP - SYMFONY"
          />
          <Card
            imageSrc="/images/portfolio/screens.jpg"
            title="Maquette d'un site web"
            description="Création du prototype d'un site"
            buttonText="Voir le site"
            footer="Réalisé avec FIGMA"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;