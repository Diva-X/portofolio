// Import des hooks React
// src/components/Modal/GithubModal.jsx
import React, { useEffect, useState } from 'react';

// Import des composants Bootstrap
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

// Import des styles SCSS spécifiques à cette modale
import './GithubModal.scss';

// Composant de modale pour afficher les informations GitHub
function GithubModal({ show, handleClose }) {
  // État local pour stocker les données du profil GitHub
  const [profile, setProfile] = useState(null);

  // Appel API déclenché à chaque ouverture de la modale
  useEffect(() => {
    if (show) {
      // Remplacer 'diva-X' par un autre nom de profil si besoin
      fetch('https://api.github.com/users/diva-X')
      fetch('https://api.github.com/users/Diva-X')
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error('Erreur GitHub:', error));
    }
  }, [show]); // L'effet se déclenche uniquement quand "show" change

  return (
    // Utilisation de la modale Bootstrap avec classe personnalisée
    <BootstrapModal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="github-modal-dialog" // Classe personnalisée pour style SCSS
    >
    <BootstrapModal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="github-modal-dialog"
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Profil GitHub</BootstrapModal.Title>
      </BootstrapModal.Header>


      <BootstrapModal.Body>
        {/* Si les données sont chargées, on affiche le profil */}
        {profile ? (
          <div className="github-modal-content">
            {/* Colonne gauche : avatar */}
            <img src={profile.avatar_url} alt="Avatar" className="avatar" />

            {/* Colonne droite : informations détaillées */}
            <div className="github-details">
              <h5>
                <a href={profile.html_url} target="_blank" rel="noreferrer">
                  {profile.name || profile.login}
                </a>
              </h5>
              <p>
                <i className="bi bi-geo-alt"></i>
                {profile.location || 'Localisation inconnue'}
              </p>
              <p>{profile.bio || 'Aucune bio disponible'}</p>
              <p>
                <i className="bi bi-box"></i>
                {profile.public_repos} repositories publics
              </p>
              <p>
                <i className="bi bi-people"></i>
                {profile.followers} followers
              </p>
              <p>
                <i className="bi bi-person-plus"></i>
                {profile.following} suivis
              </p>
            </div>
          <div className="github-modal-content">
            <img src={profile.avatar_url} alt="Avatar" className="avatar" />
            <div className="github-details">
              <h5>
                <a href={profile.html_url} target="_blank" rel="noreferrer">
                  {profile.name || profile.login}
                </a>
              </h5>
              <p>
                <i className="bi bi-geo-alt"></i>
                {profile.location || 'Localisation inconnue'}
              </p>
              <p>{profile.bio || 'Aucune bio disponible'}</p>
              <p>
                <i className="bi bi-box"></i>
                {profile.public_repos} repositories publics
              </p>
              <p>
                <i className="bi bi-people"></i>
                {profile.followers} followers
              </p>
              <p>
                <i className="bi bi-person-plus"></i>
                {profile.following} suivis
              </p>
            </div>
          </div>
        ) : (
          // Message affiché pendant le chargement
          <p>Chargement...</p>
        )}
      </BootstrapModal.Body>


      <BootstrapModal.Footer>
        {/* Bouton de fermeture positionné en bas à droite */}
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default GithubModal;