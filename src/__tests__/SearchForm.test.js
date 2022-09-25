import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

describe('Search Form', () => {
  test('Search Form Input is in the document', () => {
    render(
      <Router>
        <SearchForm />
      </Router>
    )
    const searchFormInput = screen.getByRole('textbox')
    expect(searchFormInput).toBeInTheDocument()
  })

  test('Search Form Button is in the document', () => {
    render(
      <Router>
        <SearchForm />
      </Router>
    )
    const searchFormButton = screen.getByRole('button', { name: /search/i })
    expect(searchFormButton).toBeInTheDocument()
  })
})
