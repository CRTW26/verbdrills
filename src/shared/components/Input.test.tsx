import { render } from '@testing-library/react'
import Input from './Input'

describe('<Input />', () => {
  test('should render', () => {
    const { baseElement } = render(<Input onChange={jest.fn()} />)

    expect(baseElement).toMatchSnapshot()
  })
})
