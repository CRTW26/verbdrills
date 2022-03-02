import React from 'react'

interface Props {
  children
}

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__inner">{children}</div>

      <style jsx>{`
        .modal {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: start;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 999;
        }

        .modal::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: black;
          opacity: 0.5;
        }

        .modal__inner {
          position: absolute;
          background: white;
          width: 100%;
        }

        @media screen and (min-width: 720px) {
          .modal {
            align-items: center;
          }

          .modal__inner {
            max-width: 400px;
          }
        }
      `}</style>
    </div>
  )
}

export default Modal
