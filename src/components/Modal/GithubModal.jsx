import React, { useEffect, useState } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import './GithubModal.scss';

function GithubModal({ show, handleClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (show) {
      fetch('https://api.github.com/users/diva-X')
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(error => console.error('Erreur GitHub:', error));
    }
  }, [show]);

  return (
    <BootstrapModal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="github-modal-dialog"
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="github-modal-title">
          Profil GitHub
        </BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body>
        {profile ? (
          <div className="github-modal-content">
            <img
              src={profile.avatar_url}
              alt="Avatar"
              className="avatar"
            />
            <div className="github-details">
              <p>
                <i className="bi bi-person-circle" />
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.login}
                </a>
              </p>
              <p>
                <i className="bi bi-geo-alt" />
                {profile.location || 'Localisation inconnue'}
              </p>
              <p>{profile.bio || 'Aucune bio disponible'}</p>
              <p>
                <i className="bi bi-box" />
                {profile.public_repos} repositories publics
              </p>
              <p>
                <i className="bi bi-people" />
                {profile.followers} followers
              </p>
              <p>
                <i className="bi bi-person-plus" />
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