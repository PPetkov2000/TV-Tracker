import React from "react";
import { Link } from "react-router-dom";
import { defaultImage } from "../utils/defaultImage";

const Cast = ({ cast }) => {
  return (
    <section className="cast">
      <div className="content-wrapper">
        <h2 className="cast__title">Cast</h2>
        <ul className="cast__list">
          {cast.map(({ character, person }) => (
            <li key={person.id} className="cast__list-item">
              <img
                src={character.image ? character.image.medium : defaultImage}
                alt={character.name}
                className="cast__list-item-image"
              />
              <div>
                <Link to={`/people/${person.id}`}>
                  <h3 className="cast__list-item-title">{person.name}</h3>
                </Link>
                <p className="cast__list-item-text">
                  as{" "}
                  <Link to={`/characters/${character.id}`}>
                    {character.name}{" "}
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cast;
