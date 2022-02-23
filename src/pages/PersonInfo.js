<<<<<<< HEAD
import React from "react";
import CastCredits from "../components/CastCredits";
import Loader from "../components/Loader";
import Message from "../components/Message";
import useFetch from "../hooks/useFetch";
import { rootUrl } from "../utils/rootUrl";
import { defaultImage } from "../utils/defaultImage";

const PersonInfo = ({ match }) => {
  const { loading, data: person, error } = useFetch(
    `${rootUrl}/people/${match.params.id}`
  );
  const { data: castCredits } = useFetch(
    `${rootUrl}/people/${match.params.id}/castcredits?embed=show`
  );
  const personShows = castCredits?.map((x) => x._embedded.show);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
  ) : (
    <>
      <section className="person-info">
        <div className="content-wrapper">
          <img
            src={person.image ? person.image.medium : defaultImage}
            alt={person.name}
            className="person-info__image"
          />
          <article className="person-info__about">
            <h2 className="person-info__about-title">Person Info</h2>
            <p className="person-info__about-text">
              <strong>Name:</strong> {person.name}
            </p>
            <p className="person-info__about-text">
              <strong>Gender:</strong> {person.gender}
            </p>
            <p className="person-info__about-text">
              <strong>Age:</strong>{" "}
              {new Date(Date.now()).toISOString().split("-")[0] -
                person.birthday.split("-")[0]}
            </p>
            <p className="person-info__about-text">
              <strong>Birthday:</strong> {person.birthday}
            </p>
            <p className="person-info__about-text">
              <strong>Born in:</strong> {person.country.name}
            </p>
          </article>
        </div>
      </section>
      {personShows && <CastCredits shows={personShows} />}
    </>
  );
};

export default PersonInfo;
=======
import React from "react";
import CastCredits from "../components/CastCredits";
import Loader from "../components/Loader";
import Message from "../components/Message";
import useFetch from "../hooks/useFetch";
import { rootUrl } from "../utils/rootUrl";
import { defaultImage } from "../utils/defaultImage";

const PersonInfo = ({ match }) => {
  const { loading, data: person, error } = useFetch(`${rootUrl}/people/${match.params.id}`);
  const { data: castCredits } = useFetch(`${rootUrl}/people/${match.params.id}/castcredits?embed=show`);
  const personShows = castCredits?.map((x) => x._embedded.show);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
  ) : (
    <>
      <section className="person-info">
        <div className="content-wrapper">
          <img src={person.image ? person.image.medium : defaultImage} alt={person.name} className="person-info__image" />
          <article className="person-info__about">
            <h2 className="person-info__about-title">Person Info</h2>
            <p className="person-info__about-text">
              <strong>Name:</strong> {person.name}
            </p>
            <p className="person-info__about-text">
              <strong>Gender:</strong> {person.gender}
            </p>
            <p className="person-info__about-text">
              <strong>Age:</strong> {new Date(Date.now()).toISOString().split("-")[0] - person.birthday.split("-")[0]}
            </p>
            <p className="person-info__about-text">
              <strong>Birthday:</strong> {person.birthday}
            </p>
            <p className="person-info__about-text">
              <strong>Born in:</strong> {person.country.name}
            </p>
          </article>
        </div>
      </section>
      {personShows && <CastCredits shows={personShows} />}
    </>
  );
};

export default PersonInfo;
>>>>>>> 4a678be... initial commit
