import Button from 'shared/components/Button'

interface Props {
  text: string
}

const Description: React.FC<Props> = ({ text }) => {
  return (
    <div className="description" data-testid="description">
      <h3>{text}</h3>
      <Button text="PRACTICE" />
    </div>
  )
}

export default Description
