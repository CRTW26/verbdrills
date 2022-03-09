import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

interface Props {
  children: JSX.Element
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__inner">
        <button onClick={onClose} className="modal-close">
          <VscChromeClose color="#e0ff4f" fontSize={'2rem'} />
        </button>
        {children}
      </div>

      <style jsx>{`
        .modal-close {
          position: absolute;
          top: 4px;
          right: 4px;
          background: none;
          border: none;
        }

        button:hover {
          cursor: pointer;
        }

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
          background: #0b3954;
          opacity: 1;
          width: 100%;
          padding: 1rem;
        }

        @media screen and (min-width: 720px) {
          .modal__inner {
            margin-top: 8rem;
            max-width: 580px;
            border-radius: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default Modal
