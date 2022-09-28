import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (!keyword) return
    navigate(`/search/shows/${keyword}`)
    setKeyword('')
  }

  return (
    <form className="search-form" onSubmit={submitHandler}>
      <input type="text" className="search-form__input" placeholder="Search movies..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="submit" className="search-form__button button-primary">
        Search
      </button>
    </form>
  )
}

export default SearchForm
