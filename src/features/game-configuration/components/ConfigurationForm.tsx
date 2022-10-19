import React, { useEffect, useState } from 'react'
import Button from 'shared/components/Button'
import { GameConfiguration } from 'shared/types'
import { removeItem } from 'shared/utils/array'

const VERBSETS = [
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
  onChange: (
    ev:
      | React.ChangeEvent<HTMLSelectElement>
      | React.MouseEvent<HTMLInputElement>
  ) => void
  onSubmit: (formValues: GameConfiguration) => void
}

const ConfigurationForm: React.FC<Props> = ({
  formValues,
  isValid,
  onSubmit,
}) => {
  const { language, verbset, tense } = formValues

  const findValue = (
    array: Array<{ value: string }>,
    selected: string
  ): { value: string } => {
    return array.find((el) => el.value === selected)
  }

  const [tenses, setTenses] = useState([])

  const handleChange = (ev: React.MouseEvent<HTMLInputElement>) => {
    const tense = ev.currentTarget.value

    const index = tenses.indexOf(tense)

    if (index > -1) {
      setTenses(removeItem(tenses, tense))
    } else {
      setTenses([...tenses, tense])
    }
  }

  return (
    <form className="configuration-form">
      <h3>What verbs would you like to train on?</h3>

      <div className="configuration-form__field">
        {/* <Select
          options={VERBSETS}
          name="verbset"
          onChange={onChange}
          value={
            verbset ? findValue(VERBSETS, verbset).value : VERBSETS[0].value
          }
        /> */}
        {VERBSETS.map(({ value }, index) => (
          <div key={index} className="option">
            <input
              type="checkbox"
              id={value}
              name={value}
              value={value}
              onClick={handleChange}
            />

            <label htmlFor={value}>{value}</label>
          </div>
        ))}
      </div>

      {/* <div className="configuration-form__field">
        <label>What tense would you like to train on?</label>

        <Select
          options={TENSES}
          name="tense"
          onChange={onChange}
          value={tense ? findValue(TENSES, tense).value : TENSES[0].value}
        />
      </div> */}

      <div className="configuration-form__field">
        <Button
          className="btn btn--primary"
          text="Train"
          onClick={() => onSubmit(formValues)}
          type="button"
          disabled={!(tenses.length > 0)}
        />
      </div>

      <style jsx>{`
        .configuration-form__field {
          display: flex;
          justify-content: center;
        }

        .option {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height 60px;
          margin: 1rem;
          cursor: pointer;
          color: #0b3954;
          font-family: 'Montserrat-Bold';
          transition: 0.2s ease-in-out 0s;
        }

        .option:hover {
          transform: scale(1.1);
        }

        input:checked + label {
          opacity: 0.5;
        }

        .option label {
          width: 100%;
          height: 100%;
          padding: 1rem 0;
          position: relative;
          background: #e0ff4f;
          text-align: center;
        }

        .option input {
          visibility: hidden;
          position: absolute;
        }
      `}</style>
    </form>
  )
}

export default ConfigurationForm
