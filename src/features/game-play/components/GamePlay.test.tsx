import { render } from '@testing-library/react'
import GamePlay from './GamePlay'

describe('<GamePlay />', () => {
  test('should render', () => {
    const { asFragment } = render(
      <GamePlay
        infinitive="hablar"
        conjugation="yo"
        translation="to speak"
        onClick={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
