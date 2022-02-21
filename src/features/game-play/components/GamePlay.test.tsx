import { render } from '@testing-library/react'
import GamePlay from './GamePlay'

describe('<GamePlay />', () => {
  test('should render', () => {
    const verb = {
      infinitive: 'hablar',
      person: 'yo',
      translation: 'to speak',
      answer: 'acepto',
    }

    const { asFragment } = render(
      <GamePlay
        verb={verb}
        score={0}
        validateInput={jest.fn()}
        onExpiration={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
