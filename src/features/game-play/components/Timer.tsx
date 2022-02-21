import React from 'react'
import { useTimer } from '../hooks/useTimer'

interface Props {
  onExpiration: () => void
}

const Timer: React.FC<Props> = ({ onExpiration }) => {
  const { timeLeft, isTimerExpired } = useTimer(10, onExpiration)

  return (
    <div>
      <h3>{isTimerExpired ? "Time's up!" : timeLeft}</h3>
    </div>
  )
}

export default Timer
