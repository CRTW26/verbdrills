import { useState } from 'react'
import { IncorrectAnswer, Score } from 'shared/types'

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
  tense: string
}

type UseGame = {
  getVerb: () => GameVerb
  validateInput: (input: string, answer: string, infinitive, person) => void
  resetGame: () => void
  score: Score
  incorrectAnswers: IncorrectAnswer[]
}

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const useGame = ({
  verbs,
  tenses,
}: {
  verbs: Array<Verb>
  tenses: Array<string>
}): UseGame => {
  const [score, setScore] = useState({
    total: 0,
    correct: 0,
    incorrect: 0,
  })
  const [incorrectAnswers, setIncorrectAnswers] = useState([])

  const getTense = () => tenses[getRandomNumber(tenses.length - 1)]

  const getVerb = () => {
    const personOptions = Object.keys(PERSON)
    const personIndex = getRandomNumber(Object.keys(PERSON).length)
    const person = personOptions[personIndex]
    const verbIndex = getRandomNumber(verbs?.length - 1)
    const verb = verbs[verbIndex]
    const tense = getTense()
    const infinitive = verb?.infinitive
    const translation = verb?.translation
    const answer =
      verbs[verbIndex]?.[tense]?.[VerbPersonIndexes[PERSON[person]]]

    return {
      infinitive,
      person,
      translation,
      answer,
      tense,
    }
  }

  const validateInput = (
    input: string,
    answer: string,
    infinitive: string,
    person: string
  ) => {
    if (input.toLowerCase() === answer) {
      setScore({
        ...score,
        correct: score.correct + 1,
        total: score.total + 1,
      })
    } else {
      setScore({
        ...score,
        incorrect: score.incorrect + 1,
        total: score.total + 1,
      })
      setIncorrectAnswers([
        ...incorrectAnswers,
        { infinitive, person, input, answer },
      ])
    }
  }

  const resetGame = () => {
    setScore({
      total: 0,
      correct: 0,
      incorrect: 0,
    })
  }

  return {
    getVerb,
    validateInput,
    resetGame,
    score,
    incorrectAnswers,
  }
}

export { useGame }
