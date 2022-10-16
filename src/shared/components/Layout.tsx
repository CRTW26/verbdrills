import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <h1>VERBDRILLS</h1>

        <h3>master verb conjugation</h3>
      </div>

      {children}

      <style jsx>{`
        .layout {
          // height: 100%;
          max-width: 1200px;
          margin: 2rem auto;
        }

        .header > h1 {
          font-style: italic;
          font-weight: 700;
        }

        .header > h3 {
          font-style: regular;
          font-weight: 400;
          color: #fff5d0;
        }
      `}</style>
    </div>
  )
}

export default Layout
