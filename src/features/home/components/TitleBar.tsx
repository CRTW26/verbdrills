interface Props {
  text: string
}

const TitleBar: React.FC<Props> = ({ text }) => {
  return (
    <div className="title-bar" data-testid="title-bar">
      <h1>{text}</h1>
      <h2>Master verb conjugation</h2>
      <style jsx>{`
        text-align: center;
        color: #e0ff4f;

        h2 {
          color: #ff6663;
        }
      `}</style>
    </div>
  )
}

export default TitleBar
