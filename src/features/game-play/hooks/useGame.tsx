import { useState } from 'react'

enum VerbPersonIndexes {
  FIRST_SING = 0,
  SECOND_SING = 1,
  THIRD_SING = 2,
  FIRST_PLUR = 3,
  SECOND_PLUR = 4,
  THIRD_PLUR = 5,
}

const PERSON = {
  Yo: 'FIRST_SING',
  Tú: 'SECOND_SING',
  Él: 'THIRD_SING',
  Ella: 'THIRD_SING',
  Usted: 'THIRD_SING',
  Nosotros: 'FIRST_PLUR',
  Vosotros: 'SECOND_PLUR',
  Ellos: 'THIRD_PLUR',
  Ellas: 'THIRD_PLUR',
  Ustedes: 'THIRD_PLUR',
}

type Verb = {
  infinitive: string
  translation: string
  present: Array<string>
}

type GameVerb = {
  infinitive: string
  translation: string
  person: string
  answer: string
}

type UseGame = {
  getVerb: (tense: string, verbset: string) => GameVerb
  validateInput: (input: string, answer: string, infinitive, person) => void
  resetGame: () => void
  score: number
  incorrectAnswers
}

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const useGame = ({
  verbs,
}: {
  verbs: {
    regular: Array<Verb>
    irregular: Array<Verb>
  }
}): UseGame => {
  const [score, setScore] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState([])

  const getVerb = (tense: string, verbset: string) => {
    const personOptions = Object.keys(PERSON)
    const personIndex = getRandomNumber(Object.keys(PERSON).length)
    const person = personOptions[personIndex]
    const verbIndex = getRandomNumber(verbs[verbset]?.length - 1)
    const verb = verbs[verbset]?.[verbIndex]

    const infinitive = verb?.infinitive
    const translation = verb?.translation
    const answer =
      verbs[verbset]?.[verbIndex]?.[tense]?.[VerbPersonIndexes[PERSON[person]]]

    return {
      infinitive,
      person,
      translation,
      answer,
    }
  }

  const validateInput = (
    input: string,
    answer: string,
    infinitive: string,
    person: string
  ) => {
    if (input.toLowerCase() === answer) {
      setScore(score + 1)
    } else {
      setIncorrectAnswers([
        ...incorrectAnswers,
        { infinitive, person, input, answer },
      ])
    }
  }

  const resetGame = () => {
    setScore(0)
  }

  // console.log(gameConfiguration)
  return {
    getVerb,
    validateInput,
    resetGame,
    score,
    incorrectAnswers,
  }
}

export { useGame }
