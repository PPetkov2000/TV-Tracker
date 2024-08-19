import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import CastCredits from '../components/CastCredits'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { defaultImage } from '../utils/defaultImage'
import TVMazeApi from '../services/api/TVMazeApi'

const PersonInfo = () => {
  const params = useParams()
  const personDetailsQuery = useQuery({
    queryKey: ['persons', params.id],
    queryFn: () => TVMazeApi.getPersonDetails(params.id),
    retry: 5,
    enabled: !!params.id,
  })
  const castCreditsQuery = useQuery({
    queryKey: ['persons', params.id],
    queryFn: () => TVMazeApi.getCastCredits(params.id),
    retry: 5,
    enabled: !!params.id,
  })
  const person = personDetailsQuery?.data?.data
  const castCredits = castCreditsQuery?.data?.data
  const personShows = castCredits?.map((x) => x._embedded.show)

  return personDetailsQuery.isLoading ? (
    <Loader />
  ) : personDetailsQuery.isError ? (
    <Message variant="red">{personDetailsQuery.error.message}</Message>
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
