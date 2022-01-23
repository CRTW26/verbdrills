import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: React.FC<Props> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>
}

export default Button
