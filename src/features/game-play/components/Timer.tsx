import React from 'react'
import { useTimer } from '../hooks/useTimer'

interface Props {
  timer: number
  onExpiration: () => void
}

const Timer: React.FC<Props> = ({ timer, onExpiration }) => {
  const { timeLeft, isTimerExpired } = useTimer(timer * 60, onExpiration)

  return (
    <div>
      <h3>{isTimerExpired ? "Time's up!" : timeLeft}</h3>
    </div>
  )
}

export default Timer
