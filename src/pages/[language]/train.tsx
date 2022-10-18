import React, { useEffect, useState } from 'react'
import fs from 'fs'
import { GameConfigurationForm } from 'features/game-configuration'
import Head from 'next/head'
import { TitleBar } from 'features/home'
import { AppState, Verbs } from 'shared/types'
import { GamePlay } from 'features/game-play'
import { useGame } from 'features/game-play/hooks/useGame'
import useForm from 'features/game-configuration/hooks/useForm'
import { GetServerSideProps } from 'next'
import Modal from 'shared/components/Modal'
import { VscChromeClose, VscGear } from 'react-icons/vsc'
import Settings from 'features/game-configuration/components/Settings'
import { Results, IncorrectAnswers } from 'features/results'
import Layout from 'shared/components/Layout'

interface Props {
  verbs: Verbs
}

export const Train: React.FC<Props> = ({ verbs }) => {
  const [appState, setAppState] = useState(AppState.GAME_CONFIGURATION)
  const [timerDuration, setTimerDuration] = useState(1)
  const [isTimerModalVisible, setIsTimerModalVisible] = useState(false)
  const [isIncorrectAnswersModalVisible, setIsIncorrectAnswersModalVisible] =
    useState(false)

  const { getVerb, validateInput, resetGame, score, incorrectAnswers } =
    useGame({
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

  const handleSaveSettings = (duration: number) => {
    setTimerDuration(duration)

    setIsTimerModalVisible(false)
  }

  const handleGameCancel = () => {
    setAppState(AppState.GAME_CONFIGURATION)
  }

  useEffect(() => {
    setCurrentVerb(getVerb(formValues.tense, formValues.verbset))
  }, [score.correct, score.incorrect, formValues])

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>verbdills</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main>
          {appState === AppState.GAME_CONFIGURATION && (
            <button onClick={() => setIsTimerModalVisible(true)}>
              <VscGear color="#e0ff4f" fontSize={'2rem'} />
            </button>
          )}

          {appState === AppState.GAME_PLAY && (
            <button onClick={handleGameCancel} className="modal-close">
              <VscChromeClose color="#e0ff4f" fontSize={'2rem'} />
            </button>
          )}

          {appState === AppState.GAME_CONFIGURATION && (
            <div className="content">
              <TitleBar text="verbdrills" />
            </div>
          )}

          {appState === AppState.GAME_PLAY && (
            <div className="content">
              <GamePlay
                verb={currentVerb}
                score={score}
                validateInput={validateInput}
                onExpiration={() => setAppState(AppState.GAME_RESULT)}
                duration={timerDuration}
              />
            </div>
          )}

          {appState === AppState.GAME_RESULT && (
            <div className="content">
              <Results
                score={score}
                onClick={() => setAppState(AppState.GAME_CONFIGURATION)}
                incorrectAnswers={incorrectAnswers}
                onShowIncorrectAnswers={() =>
                  setIsIncorrectAnswersModalVisible(true)
                }
              />
            </div>
          )}

          {isTimerModalVisible && (
            <Modal onClose={() => setIsTimerModalVisible(false)}>
              <Settings defaultTime={1} onSave={handleSaveSettings} />
            </Modal>
          )}

          {isIncorrectAnswersModalVisible && (
            <Modal onClose={() => setIsIncorrectAnswersModalVisible(false)}>
              <IncorrectAnswers incorrectAnswers={incorrectAnswers} />
            </Modal>
          )}
        </main>

        <style jsx>{`
          main {
            margin: 1rem;
          }

          button {
            position: absolute;
            top: 20px;
            right: 12px;
            background: none;
            border: none;
          }

          button:hover {
            cursor: pointer;
          }

          .content {
            margin: 0 auto;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #bfd7ea24;
            border-radius: 5px;
          }

          @media screen and (min-width: 480px) {
            .content {
              height: 700px;
              max-width: 600px;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const SUPPORTED_LANGUAGES = ['spanish']

  if (typeof params?.language !== 'string') {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }

  if (!SUPPORTED_LANGUAGES.includes(params?.language)) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }

  const data = fs.readFileSync(`public/verbs/${params?.language}.json`, 'utf8')

  const verbs = JSON.parse(data)

  return {
    props: {
      verbs,
    },
  }
}

export default Train
