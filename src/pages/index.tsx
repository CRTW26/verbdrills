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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tincidunt rutrum risus sit amet bibendum. Nulla purus nisl,
                  porta sodales augue ut, malesuada dictum felis. Curabitur sit
                  amet molestie ligula, a hendrerit odio. Praesent et tellus
                  quam. In hac habitasse platea dictumst. Suspendisse consequat
                  feugiat tempus.
                </p>

                <p>
                  Donec ullamcorper arcu sit amet ullamcorper tincidunt. Quisque
                  tincidunt volutpat dolor. Cras ultrices accumsan tellus, eget
                  iaculis ante tincidunt consectetur.
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
