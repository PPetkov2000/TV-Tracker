import React from "react";
import useFetch from "../hooks/useFetch";
import { rootUrl } from "../utils/rootUrl";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Show from "../components/Show";
import { showsLimit } from "../utils/itemsLimit";

const Shows = () => {
  const { loading, data: shows, error } = useFetch(`${rootUrl}/shows`);

  return (
    <section className="shows">
      <div className="content-wrapper">
        <h1 className="shows__title">Shows</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="red">{error}</Message>
        ) : (
          <div className="shows__list">
            {shows.slice(0, showsLimit).map((show) => (
              <Show key={show.id} show={show} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shows;
