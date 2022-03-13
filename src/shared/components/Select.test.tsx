import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Select from './Select'

describe('<Select />', () => {
  test('should render', () => {
    const options = [{ value: 'yes' }, { value: 'no' }]
    const { baseElement } = render(<Select options={options} />)

    expect(baseElement).toMatchSnapshot()
  })
})
