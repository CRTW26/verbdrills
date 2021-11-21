import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Index from './index'

it('renders', () => {
  const { asFragment } = render(<Index />)

  expect(asFragment()).toMatchSnapshot()
})

it('should contain text "verbdrills"', () => {
  const { getByTestId } = render(<Index />)

  expect(getByTestId('title-bar')).toHaveTextContent('verbdrills')
})
