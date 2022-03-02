import { fireEvent, render } from '@testing-library/react'
import Settings from './Settings'

describe('<Settings />', () => {
  test('should render', () => {
    const { asFragment } = render(<Settings defaultTime={1} />)

    expect(asFragment).toMatchSnapshot()
  })

  test('should increment timer', () => {
    const { getByTestId } = render(<Settings defaultTime={1} />)

    expect(getByTestId('time').textContent).toEqual('1 minute')

    fireEvent.click(getByTestId('button-increment'))

    expect(getByTestId('time').textContent).toEqual('2 minutes')
  })

  test('should decrement timer', () => {
    const { getByTestId } = render(<Settings defaultTime={2} />)

    expect(getByTestId('time').textContent).toEqual('2 minutes')

    fireEvent.click(getByTestId('button-decrement'))

    expect(getByTestId('time').textContent).toEqual('1 minute')
  })
})
