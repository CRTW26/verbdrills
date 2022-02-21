import React, { useState } from 'react'
import { GameConfigurationForm } from 'features/game-configuration'
import Head from 'next/head'
import { TitleBar } from 'features/home'
import { AppState } from 'shared/types'
import Button from 'shared/components/Button'
import GamePlay from 'features/game-play/components/GamePlay'

export const Game: React.FC = () => {
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
        <div className="content">
          <GamePlay
            infinitive="hablar"
            conjugation="yo"
            translation="to speak"
            onClick={() => setAppState(AppState.GAME_RESULT)}
          />
        </div>
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

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(params)

  return { props: { post } }
}

export default Game
