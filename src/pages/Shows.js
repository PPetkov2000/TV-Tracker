import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Show from "../components/Show";
import { rootUrl } from "../utils/rootUrl";
import { showsLimit } from "../utils/itemsLimit";
import Paginate from "../components/Paginate";

const Shows = () => {
  const params = useParams();
  const { loading, data: shows, error } = useFetch(`${rootUrl}/shows`);
  const page = Number(params.pageNumber) || 1;
  const pages = shows && Math.ceil(shows.length / showsLimit);
  const name = params.name;
  const { data: searchedShows } = useFetch(`${rootUrl}/search/shows?q=${name}`);

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
            {!name &&
              shows
                .slice(showsLimit * (page - 1), showsLimit * page)
                .map((show) => <Show key={show.id} show={show} />)}
            {name &&
              searchedShows
                .map((x) => x.show)
                .map((show) => <Show key={show.id} show={show} />)}
          </div>
        )}
        {!name && <Paginate page={page} pages={pages} />}
      </div>
    </section>
  );
};

export default Shows;
