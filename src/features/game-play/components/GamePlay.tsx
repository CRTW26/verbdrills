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
  validateInput: (guess: string, answer: string) => void
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setGuess(e.target.value)
  }

  const submitGuess = () => {
    validateInput(guess, answer)
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitGuess()
    }
  }

  useEffect(() => {
    setGuess('')
  }, [score])

  // TODO: look into useEffect taking snapshot of state. This uses initial state
  // useEffect(() => {
  //   window.addEventListener('keypress', handleEnterPress)

  //   return () => {
  //     window.removeEventListener('keypress', handleEnterPress)
  //   }
  // }, [])

  return (
    <div className="game-play">
      <Timer onExpiration={onExpiration} />

      <div>
        <h2>{score}</h2>
      </div>

      <div className="card__child card__verb-display">
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
      `}</style>
    </div>
  )
}

export default GamePlay
