import React from 'react'
import Button from 'shared/components/Button'
import Input from 'shared/components/Input'
import { useTimer } from '../hooks/useTimer'
import Timer from './Timer'

interface Props {
  infinitive: string
  conjugation: string
  translation: string
  onClick: () => void
}

const GamePlay: React.FC<Props> = ({
  infinitive,
  conjugation,
  translation,
  onClick,
}) => {
  const { timeLeft, isTimerExpired } = useTimer(10, onClick)

  const handleChange = (): void => {
    console.log('changed')
  }

  return (
    <>
      <Timer timeRemaining={timeLeft} isTimerExpired={isTimerExpired} />

      <div className="card">
        <div className="card__child card__verb-display">
          <h2 className="infinitive">{infinitive}</h2>
          <h2 className="conjugation">{conjugation}</h2>
          <h3 className="translation">{translation}</h3>
        </div>

        <div className="card__child card__input">
          <Input onChange={handleChange} />

          <Button
            className="btn btn--primary"
            text="End game"
            onClick={onClick}
          />
        </div>
      </div>

      <style jsx>{`
        .card {
          min-height: 350px;
          width: 250px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: #bfd7ea24;
          border-radius: 5px;
        }

        .card__child {
          margin: 1rem 0;
        }

        .card__input {
          padding: 1rem;
        }
      `}</style>
    </>
  )
}

export default GamePlay
