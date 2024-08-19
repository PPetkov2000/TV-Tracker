import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Show from '../components/Show'
import Paginate from '../components/Paginate'
import { showsLimit } from '../utils/itemsLimit'
import TVMazeApi from '../services/api/TVMazeApi'

const Shows = () => {
  const { name, pageNumber } = useParams()
  const showsQuery = useQuery({ queryKey: ['shows'], queryFn: TVMazeApi.getShows })
  const searchedShowsQuery = useQuery({ queryKey: ['searchedShows', name], queryFn: () => TVMazeApi.getShowsByName(name), retry: 5, enabled: !!name })
  const shows = showsQuery?.data?.data || []
  const searchedShows = searchedShowsQuery?.data?.data || []
  const page = Number(pageNumber) || 1
  const pages = shows.length > 0 && Math.ceil(shows.length / showsLimit)

  return (
    <section className="shows">
      <div className="content-wrapper">
        <h1 className="shows__title">Shows</h1>
        {showsQuery.isLoading ? (
          <Loader />
        ) : showsQuery.isError ? (
          <Message variant="red">{showsQuery.error.message}</Message>
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
