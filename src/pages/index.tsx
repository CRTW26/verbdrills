import React, { useEffect, useState } from 'react'
import { GameConfigurationForm } from 'features/game-configuration'
import Head from 'next/head'
import { TitleBar } from 'features/home'
import { AppState } from 'shared/types'
import Button from 'shared/components/Button'
import GamePlay from 'features/game-play/components/GamePlay'
import verbs from 'verbs/spanish.json'
import { useGame } from 'features/game-play/hooks/useGame'

export const Index: React.FC = () => {
  const [appState, setAppState] = useState(AppState.GAME_CONFIGURATION)

  const { getVerb, validateInput, resetGame, score } = useGame({
    verbs: verbs.regular,
  })

  const [currentVerb, setCurrentVerb] = useState({
    infinitive: '',
    person: '',
    translation: '',
    answer: '',
  })

  const initiateGamePlay = (formValues) => {
    resetGame()

    setAppState(AppState.GAME_PLAY)

    setCurrentVerb(getVerb())
  }

  useEffect(() => {
    setCurrentVerb(getVerb())
  }, [score])

  return (
    <div className="container">
      <Head>
        <title>verbdills</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {appState === AppState.GAME_CONFIGURATION && (
          <div className="content">
            <TitleBar text="verbdrills" />

            <GameConfigurationForm onSubmit={initiateGamePlay} />
          </div>
        )}

        {appState === AppState.GAME_PLAY && (
          <div className="content">
            <GamePlay
              verb={currentVerb}
              score={score}
              validateInput={validateInput}
              onExpiration={() => setAppState(AppState.GAME_RESULT)}
            />
          </div>
        )}

        {appState === AppState.GAME_RESULT && (
          <div className="content">
            <h1>You scored:</h1>
            <h2>{score}</h2>
            <Button
              className="btn btn--primary"
              text="Train"
              onClick={() => setAppState(AppState.GAME_CONFIGURATION)}
            />
          </div>
        )}
      </main>

      <style jsx>{`
        main {
          margin: 2rem;
        }

        .content {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
        }
      `}</style>
    </div>
  )
}

export default Index
