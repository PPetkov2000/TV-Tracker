import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import useFetch from "../hooks/useFetch";
import { rootUrl } from "../utils/rootUrl";
import { defaultImage } from "../utils/defaultImage";

const EpisodeInfo = () => {
  const params = useParams();
  const { loading, data: episode, error } = useFetch(
    `${rootUrl}/episodes/${params.id}?embed=show`
  );

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
  ) : (
    <section className="episode-info">
      <div className="content-wrapper">
        <div>
          <img src={episode.image ? episode.image.medium : defaultImage} alt={episode.name} className="episode-info__image" />
          <h3 className="episode-info__name">{episode.name}</h3>
        </div>
        <article className="episode-info__about">
          <h2 className="episode-info__about-title">Episode Info</h2>
          <p className="episode-info__about-text">
            <strong>Show:</strong>{" "}
            <Link to={`/shows/${episode._embedded.show.id}`} className="episode-info__about-show-link">
              {episode._embedded.show.name}
            </Link>
          </p>
          <p className="episode-info__about-text">
            <strong>Number:</strong> Season {episode.season}, Episode {episode.number}
          </p>
          <p className="episode-info__about-text">
            <strong>Airdate:</strong> {episode.airdate}
          </p>
          <p className="episode-info__about-text">
            <strong>Runtime:</strong> {episode.runtime} min
          </p>
          <div dangerouslySetInnerHTML={{ __html: episode.summary }} className="episode-info__about-summary"></div>
        </article>
      </div>
    </section>
  );
};

export default EpisodeInfo;
