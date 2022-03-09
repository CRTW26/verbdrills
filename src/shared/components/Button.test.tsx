import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  test('should render primary button', () => {
    const { asFragment } = render(
      <Button text="Practice" className="btn--primary" />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render secondary button', () => {
    const { asFragment } = render(
      <Button text="Practice" className="btn--secondary" />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render link button', () => {
    const { asFragment } = render(
      <Button text="Practice" className="btn--link" />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
