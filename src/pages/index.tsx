import React, { useState } from 'react'
import { GameConfigurationForm } from 'features/game-configuration'
import Head from 'next/head'
import { TitleBar } from 'features/home'
import { AppState } from 'shared/types'
import Button from 'shared/components/Button'

export const Index: React.FC = () => {
  const [appState, setAppState] = useState(AppState.GAME_CONFIGURATION)

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

            <GameConfigurationForm onClick={setAppState} />
          </div>
        )}

        {appState === AppState.GAME_PLAY && (
          <div className="content">
            <h1>This is the game play</h1>
            <Button
              className="btn btn--primary"
              text="End game"
              onClick={() => setAppState(AppState.GAME_RESULT)}
            />
          </div>
        )}

        {appState === AppState.GAME_RESULT && (
          <div className="content">
            <h1>This is the result</h1>
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
