import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.scss';

function GithubModal({ show, handleClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (show) {
      fetch('https://api.github.com/users/octocat')
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error('Erreur de chargement GitHub:', error));
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {profile ? (
          <div className="github-profile">
            <img src={profile.avatar_url} alt="Avatar" className="avatar" />
            <h5>{profile.name}</h5>
            <p>{profile.bio}</p>
            <p>
              <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                Voir le profil complet
              </a>
            </p>
          </div>
        ) : (
          <p>Chargement...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GithubModal;