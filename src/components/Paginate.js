import React from "react";
import { Link } from "react-router-dom";

function Paginate({ page, pages }) {
  const startIndex = page <= 2 ? 0 : page - 3;
  const endIndex = page <= 2 ? 5 : page + 2;

  return (
    <div className="paginate">
      <ul className="paginate__list">
        {[...Array(pages).keys()].slice(startIndex, endIndex).map((x) => (
          <li key={x + 1} className="paginate__list-item">
            <Link
              to={`/shows/page/${x + 1}`}
              className={`paginate__list-link${
                x + 1 === page ? " active" : ""
              }`}
            >
              {x + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paginate;
