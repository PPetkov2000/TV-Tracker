import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Show from '../components/Show'
import Paginate from '../components/Paginate'
import { showsLimit } from '../utils/itemsLimit'
import { useAsync } from '../hooks/useAsync'
import TVMazeApi from '../services/api/TVMazeApi'

const Shows = () => {
  const { name, pageNumber } = useParams()
  const { loading, error, data: shows } = useAsync(TVMazeApi.getShows)
  const { data: searchedShows } = useAsync(() => TVMazeApi.getShowsByName(name), [name])
  const page = Number(pageNumber) || 1
  const pages = shows && Math.ceil(shows.length / showsLimit)

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
            {!name && shows?.slice(showsLimit * (page - 1), showsLimit * page).map((show) => <Show key={show.id} show={show} />)}
            {name && searchedShows?.map((x) => x.show).map((show) => <Show key={show.id} show={show} />)}
          </div>
        )}
        {!name && <Paginate page={page} pages={pages} />}
      </div>
    </section>
  )
}

export default Shows
