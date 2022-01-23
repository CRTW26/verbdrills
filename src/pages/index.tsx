import Head from 'next/head'
import { TitleBar, Description } from '../features/home'

export const Index: React.FC = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
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
        <TitleBar text="verbdrills" />

        <Description text={'Master verb conjugation'} />
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

export default Index
