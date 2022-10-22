import React from 'react'
import Button from 'shared/components/Button'
import { IncorrectAnswer, Score } from 'shared/types'
import { useRouter } from 'next/router'

interface Props {
  score: Score
  incorrectAnswers: IncorrectAnswer[]
  onClick: () => void
  onShowIncorrectAnswers: () => void
}

const Results: React.FC<Props> = ({
  score,
  onClick,
  onShowIncorrectAnswers,
}) => {
  const router = useRouter()

  const { total, correct, incorrect } = score

  return (
    <>
      <h1>You scored:</h1>
      <h2>{correct}</h2>
      <Button
        className="btn btn--primary"
        text="Train again"
        onClick={onClick}
      />

      <Button
        className="btn btn--primary"
        text="Go back to start"
        onClick={() => router.push(`/${router.query.language}/configure`)}
      />

      <div className="stats">
        <h3>Stats</h3>
        <h4>{`Total: ${total}`}</h4>
        <h4>{`Correct: ${correct}`}</h4>
        <h4>{`Incorrect: ${incorrect}`}</h4>
        <h4>{`Percentage: ${
          total > 0 ? Math.round((correct / total) * 100) : 0
        }%`}</h4>
        <Button
          className="btn--link"
          onClick={onShowIncorrectAnswers}
          text="Show incorrect answers"
        />
      </div>

      <style jsx>{`
        .stats {
          width: 100%;
          text-align: left;
        }

        h4 {
          margin 0.5rem 0;
        }
      `}</style>
    </>
  )
}

export default Results
