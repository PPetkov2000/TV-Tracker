<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__brand-logo">
          TV Tracker
        </Link>
      </div>
      <SearchForm />
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
=======
import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__brand-logo">TV Tracker</Link>
      </div>
      <SearchForm />
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link to="/" className="navbar__list-link">Shows</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
>>>>>>> 4a678be... initial commit
