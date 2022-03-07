import React from 'react'
import Button from 'shared/components/Button'

interface Props {
  score: number
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
