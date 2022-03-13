import { render } from '@testing-library/react'
import Timer from './Timer'

describe('<Timer />', () => {
  test('should render', () => {
    const { baseElement } = render(
      <Timer duration={1} onExpiration={jest.fn()} />
    )

    expect(baseElement).toMatchSnapshot()
  })
})
