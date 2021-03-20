import React from "react";
import useFetch from "../hooks/useFetch";
import { rootUrl } from "../utils/rootUrl";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Show from "../components/Show";
import { showsLimit } from "../utils/itemsLimit";
import Paginate from "../components/Paginate";

const Shows = ({ match }) => {
  const { loading, data: shows, error } = useFetch(`${rootUrl}/shows`);
  const page = Number(match.params.pageNumber) || 1;
  const pages = shows && Math.ceil(shows.length / showsLimit);

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
            {shows
              .slice(showsLimit * (page - 1), showsLimit * page)
              .map((show) => (
                <Show key={show.id} show={show} />
              ))}
          </div>
        )}
        <Paginate page={page} pages={pages} />
      </div>
    </section>
  );
};

export default Shows;
