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
          min-width: 200px;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </>
  )
}

export default Input
