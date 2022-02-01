import React from 'react'

interface Props {
  timeRemaining: number
  isTimerExpired: boolean
}

const Timer: React.FC<Props> = ({ timeRemaining, isTimerExpired }) => {
  return (
    <div>
      <h3>{isTimerExpired ? "Time's up!" : timeRemaining}</h3>
    </div>
  )
}

export default Timer
