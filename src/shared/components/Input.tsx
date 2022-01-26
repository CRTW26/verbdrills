import React from 'react'

interface Props {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <input onChange={onChange} />

      <style jsx>{`
        input {
          min-width: 200px;
        }
      `}</style>
    </>
  )
}

export default Input
