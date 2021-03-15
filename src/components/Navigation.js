import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__brand-logo">
          TV Tracker
        </Link>
      </div>
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link to="/" className="navbar__list-link">
            Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
