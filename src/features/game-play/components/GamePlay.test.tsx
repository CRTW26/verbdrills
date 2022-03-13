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

    const { baseElement } = render(
      <GamePlay
        verb={verb}
        score={0}
        duration={1}
        validateInput={jest.fn()}
        onExpiration={jest.fn()}
      />
    )

    expect(baseElement).toMatchSnapshot()
  })
})
