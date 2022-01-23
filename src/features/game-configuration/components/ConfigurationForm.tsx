import Button from 'shared/components/Button'
import Select from 'shared/components/Select'

const LANGUAGES = [
  { value: 'Spanish' },
  { value: 'German' },
  { value: 'French' },
]

const VERBSETS = [
  { value: 'regular' },
  { value: 'irregular' },
  { value: 'all' },
]

const TENSES = [
  { value: 'present' },
  { value: 'preterite' },
  { value: 'imperfect' },
]

const ConfigurationForm: React.FC = () => {
  return (
    <form className="configuration-form">
      <div className="configuration-form__field">
        <label>Select a language</label>
        <Select options={LANGUAGES} />
      </div>

      <div className="configuration-form__field">
        <label>Select a verb set</label>
        <Select options={VERBSETS} />
      </div>

      <div className="configuration-form__field">
        <label>Select a tense</label>
        <Select options={TENSES} />
      </div>

      <div className="configuration-form__field">
        <Button className="btn btn--primary" text="Train" />
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
