import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Episodes from '../components/Episodes'
import Cast from '../components/Cast'
import { defaultImage } from '../utils/defaultImage'
import { episodesLimit, castLimit } from '../utils/itemsLimit'
import useAsync from '../hooks/useAsync'
import TVMazeApi from '../services/api/TVMazeApi'

const ShowInfo = () => {
  const params = useParams()
  const { loading, error, data: show } = useAsync(() => TVMazeApi.getShowDetails(params.id), [params.id])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
  ) : !show ? (
    <Message variant="info">There is no such show</Message>
  ) : (
    <>
      <section className="show-info">
        <div className="content-wrapper">
          <div>
            <img src={show.image ? show.image.medium : defaultImage} alt={show.name} className="show-info__image" loading="lazy" />
            <h3 className="show-info__name">{show.name}</h3>
          </div>
          <article className="show-info__about">
            <h2 className="show-info__about-title">Show Info</h2>
            <p className="show-info__about-text">
              <strong>Schedule:</strong> {show.schedule.days[0]} at {show.schedule.time} ({show.runtime} min)
            </p>
            <p className="show-info__about-text">
              <strong>Status:</strong> {show.status}
            </p>
            <p className="show-info__about-text">
              <strong>Show Type:</strong> {show.type}
            </p>
            <p className="show-info__about-text">
              <strong>Genres:</strong> {show.genres.join(' | ')}
            </p>
            <p className="show-info__about-text">
              <strong>Language:</strong> {show.language}
            </p>
            <p className="show-info__about-text">
              <strong>Episodes:</strong> {show._embedded.episodes.length}
            </p>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} className="show-info__about-summary"></div>
          </article>
        </div>
      </section>
      <Episodes episodes={[...show._embedded.episodes.slice(show._embedded.episodes.length - episodesLimit).reverse()]} />
      <Cast cast={show._embedded.cast.slice(0, castLimit)} />
    </>
  )
}

export default ShowInfo
