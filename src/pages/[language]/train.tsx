import React, { useEffect, useState } from 'react'
import fs from 'fs'
import Head from 'next/head'
import { AppState, Verb } from 'shared/types'
import { GamePlay } from 'features/game-play'
import { useGame } from 'features/game-play/hooks/useGame'
import { GetServerSideProps } from 'next'
import Modal from 'shared/components/Modal'
import { VscChromeClose, VscGear } from 'react-icons/vsc'
import Settings from 'features/game-configuration/components/Settings'
import { Results, IncorrectAnswers } from 'features/results'
import Layout from 'shared/components/Layout'
import { useRouter } from 'next/router'

interface Props {
  verbs: Array<Verb>
  tenses: Array<string>
}

export const Train: React.FC<Props> = ({ verbs, tenses }) => {
  const router = useRouter()

  const [appState, setAppState] = useState(AppState.GAME_PLAY)
  const [timerDuration, setTimerDuration] = useState(1)
  const [isTimerModalVisible, setIsTimerModalVisible] = useState(false)
  const [isIncorrectAnswersModalVisible, setIsIncorrectAnswersModalVisible] =
    useState(false)

  const { getVerb, validateInput, resetGame, score, incorrectAnswers } =
    useGame({
      verbs,
      tenses,
    })

  const [currentVerb, setCurrentVerb] = useState({
    infinitive: '',
    person: '',
    translation: '',
    answer: '',
    tense: '',
  })

  const handleSaveSettings = (duration: number) => {
    setTimerDuration(duration)

    setIsTimerModalVisible(false)
  }

  const handleGameCancel = () => {
    router.push(`/${router.query.language}/configure`)
  }

  const restartGame = () => {
    resetGame()

    setAppState(AppState.GAME_PLAY)

    setTimerDuration(1)
  }

  useEffect(() => {
    setCurrentVerb(getVerb())
  }, [score.correct, score.incorrect])

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>verbdrills</title>
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
                onClick={restartGame}
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

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
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

  const tenses = (query?.tenses as string).split(',')

  const verbs =
    query.verbsets === 'all'
      ? JSON.parse(data)
      : JSON.parse(data)[query.verbsets as string]

  const sortedVerbs = verbs.map((verb) => {
    const verbSortedWithTenses = tenses.reduce((acc, tense) => {
      return { ...acc, [tense]: verb[tense] }
    }, {})

    return {
      infinitive: verb.infinitive,
      translation: verb.translation,
      ...verbSortedWithTenses,
    }
  })

  return {
    props: {
      verbs: sortedVerbs,
      tenses,
    },
  }
}

export default Train
