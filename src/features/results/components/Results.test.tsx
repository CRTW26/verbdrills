import { render } from '@testing-library/react'
import Results from './Results'

describe('<Results />', () => {
  test('should render', () => {
    const { baseElement } = render(
      <Results
        score={{ total: 10, correct: 5, incorrect: 5 }}
        onClick={jest.fn()}
        incorrectAnswers={[
          {
            infinitive: 'hablar',
            person: 'yo',
            answer: 'hablo',
            input: 'hable',
          },
        ]}
      />
    )

    expect(baseElement).toMatchSnapshot()
  })
})
