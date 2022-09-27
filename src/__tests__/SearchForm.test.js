import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

describe('Search Form', () => {
  test('Search Form Input should be in the document', () => {
    render(<SearchForm />, { wrapper: Router })
    const searchFormInput = screen.getByRole('textbox')
    expect(searchFormInput).toBeInTheDocument()
  })

  test('Search Form Input value should update on user input', () => {
    render(<SearchForm />, { wrapper: Router })
    const searchFormInput = screen.getByRole('textbox')
    expect(searchFormInput).toHaveValue('')
    userEvent.type(searchFormInput, 'Test')
    expect(searchFormInput).toHaveValue('Test')
    // fireEvent.change(searchFormInput, { target: { value: 'Test' } })
  })

  test('Search Form Button should be in the document', () => {
    render(<SearchForm />, { wrapper: Router })
    const searchFormButton = screen.getByRole('button', { name: /search/i })
    expect(searchFormButton).toBeInTheDocument()
  })
})
