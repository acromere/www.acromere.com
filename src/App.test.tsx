import {cleanup, render, screen} from '@testing-library/react'
import {App} from './App'

test('renders application', () => {
	// given
	cleanup()

	// when
	render(<App/>)

	// then
  const now = new Date()
  const copyright = screen.getByText(/©/i)
  expect(copyright).toBeInTheDocument()
  expect(copyright).toHaveTextContent('© Acromere ' + now.getFullYear())

	const catchphrase = screen.getByText(/Unique/i)
	expect(catchphrase).toBeInTheDocument()
	expect(catchphrase).toHaveTextContent('Unique products for unique work')
})

