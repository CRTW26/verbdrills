import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Description from './Description'

describe('<Description />', () => {
  const text =
    'Nail verb conjugation to help you on your journey to being a language master'

  test('should render', () => {
    const { baseElement } = render(<Description text={text} />)

    expect(baseElement).toMatchSnapshot()
  })

  test('should have correct heading', () => {
    const { getByTestId } = render(<Description text={text} />)

    expect(getByTestId('description')).toHaveTextContent(`${text}`)
  })
})
