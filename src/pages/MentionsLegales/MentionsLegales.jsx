import React from 'react';
import './MentionsLegales.scss';

function MentionsLegales() {
  return (
    <section className="mentions-section">
      <div className="mentions-container">
        <h2>Mentions légales</h2>
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
                <p><strong>Jane Doe</strong></p>
                <p><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                <p><i className="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                <p><i className="bi bi-phone"></i> 10 20 30 40 50</p>
                <p><i className="bi bi-envelope"></i> jane.doe@gmail.com</p>
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
                <p><strong>alwaysdata</strong></p>
                <p>91, rue du Faubourg Saint-Honoré, 75008 Paris</p>
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
                <p>
                  Ce site a été réalisé par John Doe, étudiant au&nbsp;
                  <a
                    href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gad_campaignid=59552660&gbraid=0AAAAAD-SFixAX2qrBjd2cnuwIheHSbqNF&gclid=Cj0KCQjw4qHEBhCDARIsALYKFNMavLVGbGnCCJ1F51ri2xdvalPwoxVpo3ZPFYUPA9-4wRKVAvUFRFoaAvO0EALw_wcB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de formation
                  </a>.
                </p>
                <p>
                  <em>
                    Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site&nbsp;
                    <a
                      href="https://pixabay.com/fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>.
                  </em>
                </p>
                <p>
                  <em>
                    La favicon de ce site a été fournie par&nbsp;
                    <a
                      href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      John Doe Icons erstellt von Freepik - Flaticon
                    </a>.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;