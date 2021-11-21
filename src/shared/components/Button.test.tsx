import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  test('should render', () => {
    const { asFragment } = render(<Button text="Practice" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
