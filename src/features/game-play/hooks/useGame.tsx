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

// type GameConfiguration = {
//   language: string
//   verbSet: string
//   tense: string
// }

type UseGame = {
  getVerb: (tense) => GameVerb
  validateInput: (input: string, answer: string) => void
  resetGame: () => void
  score: number
}

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const useGame = ({ verbs }: { verbs: Array<Verb> }): UseGame => {
  const [score, setScore] = useState(0)

  const TOTAL_VERBS = verbs.length

  const getVerb = (tense) => {
    const personOptions = Object.keys(PERSON)
    const personIndex = getRandomNumber(Object.keys(PERSON).length)
    const person = personOptions[personIndex]
    const verbIndex = getRandomNumber(TOTAL_VERBS - 1)
    const verb = verbs[verbIndex]

    const infinitive = verb.infinitive
    const translation = verb.translation
    const answer =
      verbs[verbIndex]?.[tense]?.[VerbPersonIndexes[PERSON[person]]]

    return {
      infinitive,
      person,
      translation,
      answer,
    }
  }

  const validateInput = (input: string, answer: string) => {
    if (input.toLowerCase() === answer) {
      setScore(score + 1)
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
  }
}

export { useGame }
