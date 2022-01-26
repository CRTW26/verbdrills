import React from 'react'
import Input from 'shared/components/Input'

const GamePlay: React.FC = () => {
  const handleChange = (): void => {
    console.log('changed')
  }

  return (
    <>
      <h1>Countdown will go here </h1>

      <div className="card">
        <div className="card__verb-display">
          <h2 className="infinitive">VERB</h2>
          <h2 className="conjugation">CONJUGATION</h2>
          <h3 className="translation">translation</h3>
        </div>

        <div className="card__input">
          <Input onChange={handleChange} />
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
      `}</style>
    </>
  )
}

export default GamePlay
