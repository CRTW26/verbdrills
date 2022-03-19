import React, { useEffect, useState } from 'react'
import Button from 'shared/components/Button'
import Input from 'shared/components/Input'
import { Score } from 'shared/types'
import Timer from './Timer'

interface Verb {
  infinitive: string
  person: string
  translation: string
  answer: string
}

interface Props {
  verb: Verb
  score: Score
  duration: number
  validateInput: (
    guess: string,
    answer: string,
    infinitive: string,
    person: string
  ) => void
  onExpiration: () => void
}

const GamePlay: React.FC<Props> = ({
  verb,
  score,
  duration,
  validateInput,
  onExpiration,
}) => {
  const [guess, setGuess] = useState('')

  const { infinitive, person, translation, answer } = verb

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setGuess(e.target.value)
  }

  const submitGuess = () => {
    validateInput(guess, answer, infinitive, person)
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitGuess()
    }
  }

  useEffect(() => {
    setGuess('')
  }, [score.correct, score.incorrect])

  // TODO: look into useEffect taking snapshot of state. This uses initial state
  // useEffect(() => {
  //   window.addEventListener('keypress', handleEnterPress)

  //   return () => {
  //     window.removeEventListener('keypress', handleEnterPress)
  //   }
  // }, [])

  return (
    <div className="game-play">
      <Timer onExpiration={onExpiration} duration={duration} />

      <div>
        <h2>{score.correct}</h2>
      </div>

      <div className="verb">
        <h2 className="infinitive">{infinitive}</h2>
        <h2 className="person">{person}</h2>
        <h3 className="translation">{translation}</h3>
      </div>

      <div className="card__child card__input">
        <Input
          value={guess}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
        />

        <Button
          className="btn btn--primary"
          text="Guess"
          onClick={submitGuess}
        />
      </div>

      <style jsx>{`
        .game-play {
          width: 100%;
          text-align: center;
        }

        .verb {
          margin: 1rem 0 2rem;
        }
      `}</style>
    </div>
  )
}

export default GamePlay
