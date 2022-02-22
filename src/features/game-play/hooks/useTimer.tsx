import { useEffect, useState } from 'react'

type useTimer = {
  timeLeft: number
  isTimerExpired: boolean
}

const useTimer = (
  timer: number,
  onExpiration: () => void,
  interval = 1000
): useTimer => {
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

  return {
    timeLeft,
    isTimerExpired,
  }
}

export { useTimer }
