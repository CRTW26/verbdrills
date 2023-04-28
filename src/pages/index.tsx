import React from 'react'
import fs from 'fs'
import Head from 'next/head'
import { Verbs } from 'shared/types'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Button from 'shared/components/Button'
import router from 'next/router'
import Layout from 'shared/components/Layout'

interface Props {
  verbs: Verbs
}

export const Index: React.FC<Props> = () => {
  const handleAppLaunch = () => {
    router.push('/select')
  }

  return (
    <>
      <Head>
        <title>verbdills</title>
      </Head>

      <Layout>
        <main>
          <div className="container test">
            <div className="container--left">
              <Image src={'/mockup.png'} width={267} height={499} />
            </div>

            <div className="container--right">
              <div className="description">
                <h3>What is verbdrills?</h3>

                <p>
                  Learning a language is hard. Verb conjugation can be
                  confusing. Verbdrills is a tool to help try and make that
                  process easier, by making practicing as easy as possible.
                </p>

                <p>
                  Simply choose your language, the verbs you want to try on and
                  you&apos;re set. The training will be begin and you&apos;ll be
                  prompted to enter the correct conjugation given a verb and
                  person. Once the timer is up, you&apos;ll see how many you got
                  correct and which verbs you didn&apos;t so that you can keep
                  track and improve!
                </p>
              </div>

              <div className="cta">
                <div className="cta-container">
                  <Button
                    text="Get started"
                    className="btn btn--primary"
                    onClick={handleAppLaunch}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>

      <style jsx>{`
        main {
          margin: 1rem;
        }

        button:hover {
          cursor: pointer;
        }

        .container {
          display: flex;
        }

        .test {
          padding: 1rem 0;
        }

        .container > div {
          flex: 1 0 50%;
        }

        .container--left {
          display: none;
        }

        .image {
          margin: 0 auto;
        }

        .description > p {
          color: #fff5d0;
          margin: 1rem 0;
        }

        .cta {
          display: flex;
          justify-content: flex-end;
        }

        .cta-container {
          width: initial;
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

        @media screen and (min-width: 820px) {
          .test {
            padding: 4rem 0;
          }

          .container--left {
            display: flex;
            justify-content: center;
          }

          .container--right {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </>
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
