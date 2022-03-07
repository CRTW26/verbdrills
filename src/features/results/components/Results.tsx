import React from 'react'
import Button from 'shared/components/Button'
import { IncorrectAnswer } from 'shared/types'

interface Props {
  score: number
  incorrectAnswers: IncorrectAnswer[]
  onClick: () => void
}

const Results: React.FC<Props> = ({ score, onClick }) => {
  return (
    <>
      <h1>You scored:</h1>
      <h2>{score}</h2>
      <Button className="btn btn--primary" text="Train" onClick={onClick} />
    </>
  )
}

export default Results
