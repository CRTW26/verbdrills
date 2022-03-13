import { fireEvent, render } from '@testing-library/react'
import Settings from './Settings'

describe('<Settings />', () => {
  test('should render', () => {
    const { baseElement } = render(
      <Settings defaultTime={1} onSave={jest.fn()} />
    )

    expect(baseElement).toMatchSnapshot()
  })

  test('should increment timer', () => {
    const { getByTestId } = render(
      <Settings defaultTime={1} onSave={jest.fn()} />
    )

    expect(getByTestId('time').textContent).toEqual('1 minute')

    fireEvent.click(getByTestId('button-increment'))

    expect(getByTestId('time').textContent).toEqual('2 minutes')
  })

  test('should decrement timer', () => {
    const { getByTestId } = render(
      <Settings defaultTime={2} onSave={jest.fn()} />
    )

    expect(getByTestId('time').textContent).toEqual('2 minutes')

    fireEvent.click(getByTestId('button-decrement'))

    expect(getByTestId('time').textContent).toEqual('1 minute')
  })
})
