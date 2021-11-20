import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Index from './index'

it('renders', () => {
  const { asFragment } = render(<Index />)

  expect(asFragment()).toMatchSnapshot()
})

it('should contain text "Hello World"', () => {
  const { getByTestId } = render(<Index />)

  expect(getByTestId('title')).toHaveTextContent('Hello World')
})
