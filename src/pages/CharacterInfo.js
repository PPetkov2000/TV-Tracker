import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { defaultImage } from '../utils/defaultImage'
import { useAsync } from '../hooks/useAsync'
import TVMazeApi from '../services/api/TVMazeApi'

const CharacterInfo = () => {
  const params = useParams()
  const { loading, error, data: character } = useAsync(() => TVMazeApi.getCharacterDetails(params.id), [params.id])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="red">{error}</Message>
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
