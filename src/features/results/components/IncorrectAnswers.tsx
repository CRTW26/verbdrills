import React from 'react'
import { IncorrectAnswer } from 'shared/types'

interface Props {
  incorrectAnswers: IncorrectAnswer[]
}

const IncorrectAnswers: React.FC<Props> = ({ incorrectAnswers }) => {
  return (
    <>
      <h3>Incorrect answers</h3>
      <div className="row">
        <p>Infinitive</p>
        <p>Person</p>
        <p>Your answer</p>
        <p>Correct answers</p>
      </div>

      <>
        {Array.isArray(incorrectAnswers) &&
          incorrectAnswers.map((answer, index) => (
            <div key={index} className="row">
              <p>{answer.infinitive}</p>
              <p>{answer.person}</p>
              <p>{answer.input}</p>
              <p>{answer.answer}</p>
            </div>
          ))}
      </>

      <style jsx>{`
        .row {
          display: flex;
        }

        .row > p {
          flex: 0 1 25%;
          padding: 0.5rem 1rem 0.5rem 0;
        }
      `}</style>
    </>
  )
}

export default IncorrectAnswers
