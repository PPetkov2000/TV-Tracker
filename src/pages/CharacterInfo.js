import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { defaultImage } from '../utils/defaultImage'
import TVMazeApi from '../services/api/TVMazeApi'

const CharacterInfo = () => {
  const params = useParams()
  const characterDetailsQuery = useQuery({
    queryKey: ['persons', params.id],
    queryFn: () => TVMazeApi.getCharacterDetails(params.id),
    retry: 5,
    enabled: !!params.id,
  })
  const character = characterDetailsQuery?.data?.data

  return characterDetailsQuery.isLoading ? (
    <Loader />
  ) : characterDetailsQuery.isError ? (
    <Message variant="red">{characterDetailsQuery.error.message}</Message>
  ) : (
    <section className="character-info">
      <div className="content-wrapper">
        <img src={character.image ? character.image.medium : defaultImage} alt={character.name} className="character-info__image" loading="lazy" />
        <article className="character-info__about">
          <h2 className="character-info__about-title">Character Info</h2>
          <p className="character-info__about-text">
            <strong>Name:</strong> {character.name}
          </p>
        </article>
      </div>
    </section>
  )
}

export default CharacterInfo
