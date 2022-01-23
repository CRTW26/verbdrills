import { render } from '@testing-library/react'
import ConfigurationForm from './ConfigurationForm'

describe('<ConfigurationForm />', () => {
  test('should render', () => {
    const { asFragment } = render(<ConfigurationForm />)

    expect(asFragment).toMatchSnapshot()
  })
})
