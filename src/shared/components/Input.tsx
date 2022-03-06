import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ onChange, ...rest }) => {
  return (
    <>
      <input onChange={onChange} {...rest} />

      <style jsx>{`
        input {
          width: 100%;
          padding: 0.5rem 1rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Input
