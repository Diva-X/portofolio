import React from 'react';
import './MentionsLegales.scss';

function MentionsLegales() {
  return (
    <section className="mentions-section">
      <div className="mentions-container">
        <h2>Mentions légales</h2>
        <p>Conformément aux obligations de l’article 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique</p>
        <div className="divider"></div>

        <div className="accordion" id="mentionsAccordion">
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Éditeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#mentionsAccordion">
              <div className="accordion-body">
                <div>
                  <div>
                  <p><strong>John Doe</strong></p>
                  <p><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                  <p><i className="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                  <p><i className="bi bi-phone"></i> 10 20 30 40 50</p>
                  <p><i className="bi bi-envelope"></i> john.doe@gmail.com</p>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#mentionsAccordion">
              <div className="accordion-body">
                <p><strong>Hébergeur :</strong></p>
                <p>alwaysdata</p>
                <p>91, rue du Faubourg Saint-Honoré</p>
                <p>75008 Paris</p>
                <p>
                  <i className="bi bi-globe"></i>{' '}
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Crédits
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#mentionsAccordion">
              <div className="accordion-body">
                Toutes les images libres de droits sont issues des sites :  
                <br /><a href="https://pixabay.com" target="_blank" rel="noreferrer">pixabay.com</a>  
                <br />Icônes issues du site :  
                <br /><a href="https://www.flaticon.com" target="_blank" rel="noreferrer">flaticon.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;