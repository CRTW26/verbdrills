import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './useForm'

describe('useForm', () => {
  test('should initialise with correct values', () => {
    const initialValues = {
      test: 'testing',
    }

    const { result } = renderHook(() => useForm(initialValues))

    expect(result.current.formValues.test).toBeTruthy()
  })

  test('should update values', () => {
    const initialValues = {
      test: 'testing',
    }

    const event = {
      currentTarget: {
        name: 'test',
        value: 'updated',
      },
    }

    const { result } = renderHook(() => useForm(initialValues))

    act(() => {
      result.current.onChange(event)
    })

    expect(result.current.formValues.test).toEqual('updated')
  })
})
