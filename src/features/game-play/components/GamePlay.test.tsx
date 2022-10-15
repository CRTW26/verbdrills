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

    const score = {
      total: 12,
      correct: 4,
      incorrect: 8,
    }

    const { baseElement } = render(
      <GamePlay
        verb={verb}
        score={score}
        duration={1}
        validateInput={jest.fn()}
        onExpiration={jest.fn()}
      />
    )

    expect(baseElement).toMatchSnapshot()
  })

  test('should set guess', () => {})

  test('should validate guess', () => {})
})
