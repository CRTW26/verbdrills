import { render } from '@testing-library/react'
import Input from './Input'

describe('<Input />', () => {
  test('should render', () => {
    const { asFragment } = render(<Input onChange={jest.fn()} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
