import { useEffect, useState } from 'react'

type UseTimer = {
  timeLeft: number
  isTimerExpired: boolean
  makeTimeString: (timeRemaining: number) => string
}

const useTimer = (
  timer: number,
  onExpiration: () => void,
  interval = 1000
): UseTimer => {
  const [timeLeft, setTimeLeft] = useState(timer)

  const isTimerExpired = timeLeft === 0

  useEffect(() => {
    if (isTimerExpired) {
      onExpiration()

      return
    }

    const countdown = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, interval)

    return () => clearInterval(countdown)
  }, [timeLeft, isTimerExpired])

  const makeTimeString = (timeRemaining) => {
    const minutes = Math.floor(timeRemaining / 60)

    const seconds = timeRemaining - minutes * 60

    return `${minutes}:${seconds === 0 ? '00' : seconds}`
  }

  return {
    timeLeft,
    makeTimeString,
    isTimerExpired,
  }
}

export { useTimer }
