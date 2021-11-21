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
      <TitleBar text="verbdrills" />

      <Description text={'Master verb conjugation'} />
    </main>

    <style jsx>{``}</style>
  </div>
)

export default Index
