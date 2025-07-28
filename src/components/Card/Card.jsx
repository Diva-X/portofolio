import React from 'react';
import './Card.scss';

function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonOnClick,
  footerText,
  showButton = false,
  showFooter = false,
}) {
  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={imageAlt} className="card-image" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {showButton && (
        <button className="card-button" onClick={buttonOnClick}>
          {buttonText}
        </button>
      )}
      {showFooter && <div className="card-footer">{footerText}</div>}
    </div>
  );
}

export default Card;