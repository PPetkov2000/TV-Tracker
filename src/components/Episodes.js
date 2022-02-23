<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const Episodes = ({ episodes }) => {
  return (
    <section className="episodes">
      <div className="content-wrapper">
        <h2 className="episodes__title">Previous Episodes</h2>
        <table className="episodes__table">
          <thead>
            <tr>
              <th>Episode</th>
              <th>Name</th>
              <th>Airdate</th>
              <th>Airtime</th>
              <th>Runtime</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.id}>
                <td>
                  {episode.season}x
                  {episode.number < 10 ? `0${episode.number}` : episode.number}
                </td>
                <td>
                  <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                </td>
                <td>{episode.airdate}</td>
                <td>{episode.airtime}</td>
                <td>{episode.runtime} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Episodes;
=======
import React from "react";
import { Link } from "react-router-dom";

const Episodes = ({ episodes }) => {
  return (
    <section className="episodes">
      <div className="content-wrapper">
        <h2 className="episodes__title">Previous Episodes</h2>
        <table className="episodes__table">
          <thead>
            <tr>
              <th>Episode</th>
              <th>Name</th>
              <th>Airdate</th>
              <th>Airtime</th>
              <th>Runtime</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.id}>
                <td>
                  {episode.season}x
                  {episode.number < 10 ? `0${episode.number}` : episode.number}
                </td>
                <td>
                  <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                </td>
                <td>{episode.airdate}</td>
                <td>{episode.airtime}</td>
                <td>{episode.runtime} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Episodes;
>>>>>>> 4a678be... initial commit
