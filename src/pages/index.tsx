import React from 'react'
import fs from 'fs'
import Head from 'next/head'
import { Verbs } from 'shared/types'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Button from 'shared/components/Button'

interface Props {
  verbs: Verbs
}

export const Index: React.FC<Props> = () => {
  return (
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div>
          <h1>VERBDRILLS</h1>
          <h3>master verb conjugation</h3>
        </div>

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
                amet molestie ligula, a hendrerit odio. Praesent et tellus quam.
                In hac habitasse platea dictumst. Suspendisse consequat feugiat
                tempus.
              </p>

              <p>
                Donec ullamcorper arcu sit amet ullamcorper tincidunt. Quisque
                tincidunt volutpat dolor. Cras ultrices accumsan tellus, eget
                iaculis ante tincidunt consectetur.
              </p>
            </div>

            <div className="cta">
              <div className="cta-container">
                <Button text="Launch app" className="btn btn--primary" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          margin: 1rem;
        }

        h1 {
          font-style: italic;
          font-weight: 700;
        }

        h3 {
          font-style: regular;
          font-weight: 400;
          color: #fff5d0;
        }

        button:hover {
          cursor: pointer;
        }

        .container {
          display: flex;
        }

        .test {
          padding: 4rem 0;
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

        .description {
          margin-top: 2rem;
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
          main {
            padding: 0 3rem;
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
