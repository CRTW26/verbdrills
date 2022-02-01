import { render } from '@testing-library/react'
import Timer from './Timer'

describe('<Timer />', () => {
  test('should render', () => {
    const { asFragment } = render(
      <Timer timeRemaining={0} isTimerExpired={true} />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
