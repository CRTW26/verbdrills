import { render } from '@testing-library/react'
import Timer from './Timer'

describe('<Timer />', () => {
  test('should render', () => {
    const { asFragment } = render(
      <Timer duration={1} onExpiration={jest.fn()} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
