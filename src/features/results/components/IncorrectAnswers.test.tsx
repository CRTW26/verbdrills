import { render } from '@testing-library/react'
import IncorrectAnswers from './IncorrectAnswers'

describe('<IncorrectAnswers />', () => {
  let props

  beforeEach(() => {
    props = {
      incorrectAnswers: [
        {
          infinitive: 'hablar',
          person: 'yo',
          input: 'hable',
          answer: 'hablo',
        },
      ],
    }
  })

  test('should render', () => {
    const { asFragment } = render(<IncorrectAnswers {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
