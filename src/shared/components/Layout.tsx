import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className="layout">
      <div className="container">
        <button className="header" onClick={handleClick}>
          <h1>VERBDRILLS</h1>

          <h3>master verb conjugation</h3>
        </button>

        {children}
      </div>

      <style jsx>{`
        .layout {
          max-width: 1200px;
          margin: 2rem auto;
        }

        .container {
          margin: 2rem 1rem;
        }

        .header {
          text-align: center;
          background: none;
          border: none;
          cursor: pointer;
          color: #ff6663;
        }

        .header > h1 {
          font-family: 'Montserrat-BoldItalic';
        }

        .header > h3 {
          color: #fff5d0;
        }

        @media screen and (min-width: 820px) {
          .header {
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}

export default Layout
