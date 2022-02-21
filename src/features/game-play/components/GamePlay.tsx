import React, { useEffect, useState } from 'react'
import Button from 'shared/components/Button'
import Input from 'shared/components/Input'
import Timer from './Timer'

interface Verb {
  infinitive: string
  person: string
  translation: string
  answer: string
}

interface Props {
  verb: Verb
  score: number
  validateInput: (guess, answer) => void
  onExpiration: () => void
}

const GamePlay: React.FC<Props> = ({
  verb,
  score,
  validateInput,
  onExpiration,
}) => {
  const [guess, setGuess] = useState('')

  const { infinitive, person, translation, answer } = verb

  const handleChange = (e): void => {
    setGuess(e.target.value)
  }

  useEffect(() => {
    setGuess('')
  }, [score])

  return (
    <>
      <Timer onExpiration={onExpiration} />

      <div>
        <h2>{score}</h2>
      </div>

      <div className="card">
        <div className="card__child card__verb-display">
          <h2 className="infinitive">{infinitive}</h2>
          <h2 className="person">{person}</h2>
          <h3 className="translation">{translation}</h3>
        </div>

        <div className="card__child card__input">
          <Input value={guess} onChange={handleChange} />

          <Button
            className="btn btn--primary"
            text="End game"
            onClick={() => validateInput(guess, answer)}
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
