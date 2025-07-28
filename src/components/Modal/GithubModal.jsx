import React, { useEffect, useState } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import './GithubModal.scss';

function GithubModal({ show, handleClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (show) {
      fetch('https://api.github.com/users/diva-X')
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error('Erreur GitHub:', error));
    }
  }, [show]);

  return (
    <BootstrapModal show={show} onHide={handleClose} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Profil GitHub</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {profile ? (
          <div>
            <img src={profile.avatar_url} alt="Avatar" width={80} />
            <h5>{profile.name}</h5>
            <p>{profile.bio}</p>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              Voir le profil complet
            </a>
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