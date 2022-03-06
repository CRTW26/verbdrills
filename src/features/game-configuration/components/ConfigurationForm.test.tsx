import { render } from '@testing-library/react'
import ConfigurationForm from './ConfigurationForm'

describe('<ConfigurationForm />', () => {
  test('should render', () => {
    const { asFragment } = render(
      <ConfigurationForm
        formValues={{
          language: 'Spanish',
          verbset: 'regular',
          tense: 'present',
        }}
        isValid
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(asFragment).toMatchSnapshot()
  })
})
