import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: React.FC<Props> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>
}

export default Button
