import React, { useState } from 'react'

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

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
}

const useGame = ({ verbs }) => {
  const [score, setScore] = useState(0)

  const TOTAL_VERBS = verbs.length

  const getVerb = () => {
    const personOptions = Object.keys(PERSON)
    const personIndex = getRandomNumber(Object.keys(PERSON).length)
    const person = personOptions[personIndex]
    const verbIndex = getRandomNumber(TOTAL_VERBS - 1)
    const verb = verbs[verbIndex]

    const infinitive = verb.infinitive
    const translation = verb.translation
    const answer = verbs[verbIndex].present[VerbPersonIndexes[PERSON[person]]]

    return {
      infinitive,
      person,
      translation,
      answer,
    }
  }

  const validateInput = (input, answer) => {
    if (input.toLowerCase() === answer) {
      setScore(score + 1)
    }
  }

  const resetGame = () => {
    setScore(0)
  }

  return {
    getVerb,
    validateInput,
    resetGame,
    score,
  }
}

export { useGame }
