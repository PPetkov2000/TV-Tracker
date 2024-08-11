import React from 'react'
import { useParams } from 'react-router-dom'
import CastCredits from '../components/CastCredits'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { defaultImage } from '../utils/defaultImage'
import useAsync from '../hooks/useAsync'
import TVMazeApi from '../services/api/TVMazeApi'

const PersonInfo = () => {
  const params = useParams()
  const { loading, error, data: person } = useAsync(() => TVMazeApi.getPersonDetails(params.id), [params.id])
  const { data: castCredits } = useAsync(() => TVMazeApi.getCastCredits(params.id), [params.id])
  const personShows = castCredits?.map((x) => x._embedded.show)

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
  ) : (
    <>
      <section className="person-info">
        <div className="content-wrapper">
          <img src={person.image ? person.image.medium : defaultImage} alt={person.name} className="person-info__image" loading="lazy" />
          <article className="person-info__about">
            <h2 className="person-info__about-title">Person Info</h2>
            <p className="person-info__about-text">
              <strong>Name:</strong> {person.name}
            </p>
            <p className="person-info__about-text">
              <strong>Gender:</strong> {person.gender}
            </p>
            <p className="person-info__about-text">
              <strong>Age:</strong> {new Date(Date.now()).toISOString().split('-')[0] - person.birthday.split('-')[0]}
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
  )
}

export default PersonInfo
