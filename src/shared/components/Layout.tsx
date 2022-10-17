import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">
        <div className="header">
          <h1>VERBDRILLS</h1>

          <h3>master verb conjugation</h3>
        </div>

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
