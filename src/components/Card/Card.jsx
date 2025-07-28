import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

function Card({ image, alt, title, description, buttonText, footerText }) {
  return (
    <div className="card-container">
      <img src={image} alt={alt} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonText && <button>{buttonText}</button>}
      {footerText && <div className="card-footer">{footerText}</div>}
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  footerText: PropTypes.string,
};

Card.defaultProps = {
  buttonText: null,
  footerText: null,
};

export default Card;