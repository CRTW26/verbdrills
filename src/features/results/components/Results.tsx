import React from 'react'
import Button from 'shared/components/Button'
import { IncorrectAnswer, Score } from 'shared/types'

interface Props {
  score: Score
  incorrectAnswers: IncorrectAnswer[]
  onClick: () => void
}

const Results: React.FC<Props> = ({ score, onClick }) => {
  const { total, correct, incorrect } = score

  return (
    <>
      <h1>You scored:</h1>
      <h2>{correct}</h2>
      <Button className="btn btn--primary" text="Train" onClick={onClick} />

      <div className="stats">
        <h3>Stats</h3>
        <h4>{`Total: ${total}`}</h4>
        <h4>{`Correct: ${correct}`}</h4>
        <h4>{`Incorrect: ${incorrect}`}</h4>
        <h4>{`Percentage: ${Math.round((correct / total) * 100)}%`}</h4>
      </div>

      <style jsx>{`
        .stats {
          width: 100%;
          text-align: left;
        }
      `}</style>
    </>
  )
}

export default Results
