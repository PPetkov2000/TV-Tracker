import React from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import useFetch from "../hooks/useFetch";
import { rootUrl } from "../utils/rootUrl";
import { defaultImage } from "../utils/defaultImage";

const CharacterInfo = ({ match }) => {
  const { loading, data: character, error } = useFetch(
    `${rootUrl}/characters/${match.params.id}?embed=castcredits`
  );

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
  ) : (
    <section className="character-info">
      <div className="content-wrapper">
        <img
          src={character.image ? character.image.medium : defaultImage}
          alt={character.name}
          className="character-info__image"
        />
        <article className="character-info__about">
          <h2 className="character-info__about-title">Character Info</h2>
          <p className="character-info__about-text">
            <strong>Name:</strong> {character.name}
          </p>
        </article>
      </div>
    </section>
  );
};

export default CharacterInfo;
