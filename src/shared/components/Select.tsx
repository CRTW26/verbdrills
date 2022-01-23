interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any
}

const Select: React.FC<Props> = ({ options, ...rest }) => {
  return (
    <select className="select" {...rest}>
      {Array.isArray(options) &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}

      <style jsx>{`
        .select {
          border: 1px solid #e0ff4f;
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          width: 100%;
          background: #bfd7ea24;
          color: #ff6663;
        }
      `}</style>
    </select>
  )
}

export default Select
