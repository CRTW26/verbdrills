import { act, renderHook } from '@testing-library/react-hooks'
import { useTimer } from './useTimer'

describe('useTimer', () => {
  test('should initialise with correct time', () => {
    const { result } = renderHook(() => useTimer(10))

    expect(result.current.timeLeft).toEqual(10)
  })

  test('should set isTimerExpired to be true once time has elapsed', () => {
    jest.useFakeTimers()

    const onExpiration = jest.fn()

    const { result } = renderHook(() => useTimer(1, onExpiration))

    expect(result.current.isTimerExpired).toBeFalsy()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.isTimerExpired).toBeTruthy()
  })

  test('should call onExpiration when time has elapsed', () => {
    jest.useFakeTimers()

    const onExpiration = jest.fn()

    const { result } = renderHook(() => useTimer(1, onExpiration))

    expect(result.current.isTimerExpired).toBeFalsy()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(onExpiration).toHaveBeenCalled()
  })
})
