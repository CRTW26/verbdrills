interface Props {
  text: string
}

const TitleBar: React.FC<Props> = ({ text }) => {
  return (
    <div className="title-bar" data-testid="title-bar">
      <h1>{text}</h1>

      <style jsx>{`
        color: #e0ff4f;
      `}</style>
    </div>
  )
}

export default TitleBar
