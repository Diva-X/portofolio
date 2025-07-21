import React from "react";
import { NavLink } from "react-router-dom";
// import './Navbar.scss';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">John Doe</NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">ACCUEIL</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentionslegales" className="nav-link">MENTIONS LÉGALES</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;