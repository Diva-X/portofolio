import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Colonne 1 */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>John Doe</h5>
            <div>40, rue Laure Diebold<br />69009 Lyon, France</div>
            <div>10 20 30 40 50</div>
            <div>john.doe@gmail.com</div>
            <div className="social-icons mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Accueil</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/contact" className="footer-link">Me contacter</a></li>
              <li><a href="/mentionslegales" className="footer-link">Mentions légales</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-12 col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="footer-link">Fresh Food</a></li>
              <li><a href="/portfolio" className="footer-link">Restaurant Akira</a></li>
              <li><a href="/portfolio" className="footer-link">Espace bien-être</a></li>
              <li><a href="/portfolio" className="footer-link">SEO</a></li>
              <li><a href="/portfolio" className="footer-link">Création d'une API</a></li>
              <li><a href="/portfolio" className="footer-link">Maquette d'un site</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;