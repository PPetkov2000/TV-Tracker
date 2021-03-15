import React from "react";
import { Link } from "react-router-dom";

const Show = ({ show }) => {
  return (
    <div className="show">
      <Link to={`/shows/${show.id}`}>
        <img src={show.image.medium} alt={show.name} className="show__image" />
      </Link>
      <h4 className="show__title">{show.name}</h4>
      <p className="show__genres">{show.genres.join(", ")}</p>
    </div>
  );
};

export default Show;
