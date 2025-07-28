import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

function Card({ iconClass, imageSrc, title, description, buttonText, footer }) {
  return (
    <div className="card-container">
      {iconClass && (
        <div className="card-icon">
          <i className={iconClass}></i>
        </div>
      )}

      {imageSrc && (
        <div className="card-image">
          <img src={imageSrc} alt={title} />
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      {buttonText && <button className="card-button">{buttonText}</button>}

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  iconClass: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  footer: PropTypes.string,
};

Card.defaultProps = {
  iconClass: null,
  imageSrc: null,
  buttonText: null,
  footer: null,
};

export default Card;