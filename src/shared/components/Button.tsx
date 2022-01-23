import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <>
      <button {...rest}>{text}</button>

      <style jsx>{`
        .btn {
          background: none;
          border: none;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          width: 100%;
        }

        .btn--primary {
          background: #e0ff4f;
          color: #0b3954;
        }
      `}</style>
    </>
  )
}

export default Button
