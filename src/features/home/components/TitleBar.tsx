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

        @media screen and (min-width: 320px) {
          .title-bar {
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default TitleBar
