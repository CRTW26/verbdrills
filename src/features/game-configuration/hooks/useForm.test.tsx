import { renderHook } from '@testing-library/react-hooks'
import useForm from './useForm'

describe('useForm', () => {
  test('should initialise with correct values', () => {
    const initialValues = {
      test: 'testing',
    }

    const { result } = renderHook(() => useForm(initialValues))

    expect(result.current.formValues.test).toBeTruthy()
  })
})
