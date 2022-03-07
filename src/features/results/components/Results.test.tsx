import { render } from '@testing-library/react'
import Results from './Results'

describe('<Results />', () => {
  test('should render', () => {
    const { asFragment } = render(
      <Results
        score={10}
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

    expect(asFragment()).toMatchSnapshot()
  })
})
