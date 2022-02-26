import Button from 'shared/components/Button'
import Select from 'shared/components/Select'
import { GameConfiguration } from 'shared/types'

const LANGUAGES = [
  { value: 'Select a language' },
  { value: 'Spanish' },
  { value: 'German' },
  { value: 'French' },
]

const VERBSETS = [
  { value: 'Select verbset' },
  { value: 'regular' },
  { value: 'irregular' },
  { value: 'all' },
]

const TENSES = [
  { value: 'Select tense' },
  { value: 'present' },
  { value: 'preterite' },
  { value: 'imperfect' },
  { value: 'future' },
  { value: 'conditional' },
]

interface Props {
  formValues: GameConfiguration
  isValid: boolean
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void
  onSubmit: (formValues: GameConfiguration) => void
}

const ConfigurationForm: React.FC<Props> = ({
  formValues,
  isValid,
  onChange,
  onSubmit,
}) => {
  return (
    <form className="configuration-form">
      <div className="configuration-form__field">
        <label>Select a language</label>
        <Select options={LANGUAGES} name="language" onChange={onChange} />
      </div>

      <div className="configuration-form__field">
        <label>Select a verb set</label>
        <Select options={VERBSETS} name="verbset" onChange={onChange} />
      </div>

      <div className="configuration-form__field">
        <label>Select a tense</label>
        <Select options={TENSES} name="tense" onChange={onChange} />
      </div>

      <div className="configuration-form__field">
        <Button
          className="btn btn--primary"
          text="Train"
          onClick={() => onSubmit(formValues)}
          type="button"
          disabled={isValid}
        />
      </div>

      <style jsx>{`
        .configuration-form {
          width: 250px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          background-color: #bfd7ea24;
          border-radius: 5px;
        }

        .configuration-form__field {
          margin: 0.5rem 0;
        }
      `}</style>
    </form>
  )
}

export default ConfigurationForm
