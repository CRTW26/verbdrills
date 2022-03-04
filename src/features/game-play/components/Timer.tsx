import React from 'react'
import { useTimer } from '../hooks/useTimer'

interface Props {
  duration: number
  onExpiration: () => void
}

const Timer: React.FC<Props> = ({ duration, onExpiration }) => {
  const { timeLeft, isTimerExpired } = useTimer(duration * 60, onExpiration)

  return (
    <div>
      <h3>{isTimerExpired ? "Time's up!" : timeLeft}</h3>
    </div>
  )
}

export default Timer
