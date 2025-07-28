import React, { useEffect, useState } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import './GithubModal.scss';

// Modale GitHub affichant les données publiques d’un utilisateur via l’API GitHub
function GithubModal({ show, handleClose }) {
  const [profile, setProfile] = useState(null);

  // Chargement des données du profil à l'ouverture de la modale
  useEffect(() => {
    if (show) {
      fetch('https://api.github.com/users/diva-X')
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error('Erreur GitHub:', error));
    }
  }, [show]);

  return (
    <BootstrapModal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="github-modal-dialog" // Style personnalisé pour override Bootstrap
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Profil GitHub</BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body>
        {profile ? (
          <div className="github-modal-content">
            {/* Avatar utilisateur (colonne gauche) */}
            <img src={profile.avatar_url} alt="Avatar" className="avatar" />

            {/* Détails utilisateur (colonne droite) */}
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
          <p>Chargement...</p>
        )}
      </BootstrapModal.Body>

      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default GithubModal;