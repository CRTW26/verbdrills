import React, { useEffect, useState } from 'react'
import fs from 'fs'
import { GameConfigurationForm } from 'features/game-configuration'
import Head from 'next/head'
import { TitleBar } from 'features/home'
import { AppState } from 'shared/types'
import Button from 'shared/components/Button'
import GamePlay from 'features/game-play/components/GamePlay'
import { useGame } from 'features/game-play/hooks/useGame'
import useForm from 'features/game-configuration/hooks/useForm'
import { GetStaticProps } from 'next'
import Modal from 'shared/components/Modal'

interface Props {
  verbs
}

export const Index: React.FC<Props> = ({ verbs }) => {
  const [appState, setAppState] = useState(AppState.GAME_CONFIGURATION)

  const { formValues, isValid, onChange } = useForm({
    language: '',
    verbset: '',
    tense: '',
  })

  const { getVerb, validateInput, resetGame, score } = useGame({
    verbs: verbs,
  })

  const [currentVerb, setCurrentVerb] = useState({
    infinitive: '',
    person: '',
    translation: '',
    answer: '',
  })

  const initiateGamePlay = () => {
    resetGame()

    setAppState(AppState.GAME_PLAY)
  }

  useEffect(() => {
    setCurrentVerb(getVerb(formValues.tense, formValues.verbset))
  }, [score, formValues])

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

            <GameConfigurationForm
              onSubmit={initiateGamePlay}
              formValues={formValues}
              isValid={isValid}
              onChange={onChange}
            />
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

        <Modal>
          <h1>hello</h1>
        </Modal>
      </main>

      <style jsx>{`
        main {
          margin: 2rem;
        }

        .content {
          margin: 0 auto;
          width: 250px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #bfd7ea24;
          border-radius: 5px;
        }

        @media screen and (min-width: 320px) {
          .content {
            height: 700px;
            width: 600px;
          }
        }
      `}</style>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = fs.readFileSync('public/verbs/spanish.json', 'utf8')

  const verbs = JSON.parse(data)

  return {
    props: {
      verbs,
    },
  }
}

export default Index
