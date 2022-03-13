import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  test('should render primary button', () => {
    const { baseElement } = render(
      <Button text="Practice" className="btn--primary" />
    )

    expect(baseElement).toMatchSnapshot()
  })

  test('should render secondary button', () => {
    const { baseElement } = render(
      <Button text="Practice" className="btn--secondary" />
    )

    expect(baseElement).toMatchSnapshot()
  })

  test('should render link button', () => {
    const { baseElement } = render(
      <Button text="Practice" className="btn--link" />
    )

    expect(baseElement).toMatchSnapshot()
  })
})
