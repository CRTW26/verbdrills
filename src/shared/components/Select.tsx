interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any
}

const Select: React.FC<Props> = ({ options, ...rest }) => {
  return (
    <select {...rest}>
      {Array.isArray(options) &&
        options.map((option, index) => (
          <option key={index} value={option.value} />
        ))}
    </select>
  )
}

export default Select
