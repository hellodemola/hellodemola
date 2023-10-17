import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('link', {
      name: /Find in-depth information about Next.js features and API./i,
    })

    expect(heading).toBeInTheDocument()
  })
})
