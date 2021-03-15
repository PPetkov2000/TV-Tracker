import React from "react";
import { Link } from "react-router-dom";
import { defaultImage } from "../utils/defaultImage";

const CastCredits = ({ shows }) => {
  return (
    <section className="cast-credits">
      <div className="content-wrapper">
        <h2 className="cast-credits__title">Cast Credits</h2>
        <ul className="cast-credits__list">
          {shows.map((show) => (
            <li key={show.id} className="cast-credits__list-item">
              <img
                src={show.image ? show.image.medium : defaultImage}
                alt={show.name}
                className="cast-credits__list-item-image"
              />
              <p className="cast-credits__list-item-text">
                <Link
                  to={`/shows/${show.id}`}
                  className="cast-credits__list-item-link"
                >
                  {show.name}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CastCredits;
