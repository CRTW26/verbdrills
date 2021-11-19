import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'
import Index from './index'

afterEach(cleanup)

it('renders', () => {
  const { asFragment } = render(<Index />)

  expect(asFragment()).toMatchSnapshot()
})

it('should contain text "Hello World"', () => {
  const { getByTestId } = render(<Index />)

  expect(getByTestId('title')).toHaveTextContent('Hello World')
})
