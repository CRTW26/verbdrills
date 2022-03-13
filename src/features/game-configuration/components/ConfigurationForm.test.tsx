import { render } from '@testing-library/react'
import ConfigurationForm from './ConfigurationForm'

describe('<ConfigurationForm />', () => {
  test('should render', () => {
    const { baseElement } = render(
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

    expect(baseElement).toMatchSnapshot()
  })
})
