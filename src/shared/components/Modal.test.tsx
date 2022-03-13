import { render } from '@testing-library/react'
import Modal from './Modal'

describe('<Modal />', () => {
  test('should render', () => {
    const { baseElement } = render(
      <Modal onClose={jest.fn()}>
        <h1>Test</h1>
      </Modal>
    )

    expect(baseElement).toMatchSnapshot()
  })
})
