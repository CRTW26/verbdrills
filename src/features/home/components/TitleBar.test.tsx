import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TitleBar } from 'features/home'

describe('<TitleBar>', () => {
  test('should render', () => {
    const { baseElement } = render(<TitleBar text="verbdrills" />)

    expect(baseElement).toMatchSnapshot()
  })

  test('should have correct heading', () => {
    const { getByTestId } = render(<TitleBar text="verbdrills" />)

    expect(getByTestId('title-bar')).toHaveTextContent('verbdrills')
  })
})
