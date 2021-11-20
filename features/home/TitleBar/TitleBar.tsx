interface Props {
  text: string
}

const TitleBar: React.FC<Props> = ({ text }) => {
  return (
    <div className="title-bar" data-testid="title-bar">
      <h1>{text}</h1>
    </div>
  )
}

export default TitleBar
