import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Index from 'pages/index'
import verbs from '../../public/verbs/spanish.json'

it('renders', () => {
  const { baseElement } = render(<Index verbs={verbs} />)

  expect(baseElement).toMatchSnapshot()
})

it('should contain text "verbdrills"', () => {
  const { getByTestId } = render(<Index verbs={verbs} />)

  expect(getByTestId('title-bar')).toHaveTextContent('verbdrills')
})
