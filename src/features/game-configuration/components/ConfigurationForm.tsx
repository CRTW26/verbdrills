import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from 'shared/components/Button'
import { removeItem } from 'shared/utils/array'
import { FormStep } from '../types'

const VERBSETS = [{ value: 'regular' }, { value: 'irregular' }]

const TENSES = [
  { value: 'present' },
  { value: 'preterite' },
  { value: 'imperfect' },
  { value: 'future' },
  { value: 'conditional' },
]

const ConfigurationForm: React.FC = () => {
  const router = useRouter()

  const [tenses, setTenses] = useState([])
  const [verbsets, setVerbsets] = useState([])

  const [formStep, setFormStep] = useState(FormStep.VERBSETS)

  const updateFormValues = (values, valueToUpdate, valuesSetter, index) => {
    if (index > -1) {
      valuesSetter(removeItem(values, valueToUpdate))
    } else {
      valuesSetter([...values, valueToUpdate])
    }
  }

  const handleChange = (ev: React.MouseEvent<HTMLInputElement>, category) => {
    const selectionsToUpdate =
      category === FormStep.VERBSETS ? verbsets : tenses

    const selectionSetter =
      category === FormStep.VERBSETS ? setVerbsets : setTenses

    const { value } = ev.currentTarget

    const index = selectionsToUpdate.indexOf(value)

    updateFormValues(selectionsToUpdate, value, selectionSetter, index)
  }

  const handleFormClick = () => {
    if (formStep === FormStep.VERBSETS) {
      setFormStep(FormStep.TENSES)

      return
    } else {
      router.push({
        pathname: `/${router.query.language}/train`,
        query: {
          tenses: tenses.join(','),
          verbsets: verbsets.join(','),
        },
      })
    }
  }

  return (
    <form className="configuration-form">
      {formStep === FormStep.VERBSETS && (
        <>
          <h3>What verbs would you like to train on?</h3>

          <div className="configuration-form__field">
            {VERBSETS.map(({ value }, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={value}
                  name={value}
                  value={value}
                  onClick={(ev) => handleChange(ev, FormStep.VERBSETS)}
                />

                <label htmlFor={value}>{value}</label>
              </div>
            ))}
          </div>
        </>
      )}

      {formStep === FormStep.TENSES && (
        <>
          <h3>What tenses would you like to train on?</h3>

          <div className="configuration-form__field">
            {TENSES.map(({ value }, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={value}
                  name={value}
                  value={value}
                  onClick={(ev) => handleChange(ev, FormStep.TENSES)}
                />

                <label htmlFor={value}>{value}</label>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="configuration-form__field button-container">
        <Button
          className="btn btn--secondary"
          text="Train"
          onClick={handleFormClick}
          type="button"
          disabled={
            !((formStep === FormStep.VERBSETS ? verbsets : tenses).length > 0)
          }
        />
      </div>

      <style jsx>{`
        .configuration-form {
          margin: 2rem 0;
          text-align: center;
        }

        .configuration-form > h3 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }

        .configuration-form__field {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          border: 3px solid #ff6663;
          padding: calc(1rem - 3px) 0;
        }

        .option label {
          width: 100%;
          height: 100%;
          padding: 1rem 0;
          position: relative;
          background: #e0ff4f;
          text-align: center;
          border-radius: 15px;
        }

        .option input {
          visibility: hidden;
          position: absolute;
        }

        .button-container {
          width: 300px;
          margin: 2rem auto;
        }

        @media screen and (min-width: 690px) {
          .configuration-form__field {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .button-container {
            margin-top: 4rem;
            margin-left: auto;
            margin-right: 0;
          }
        }
      `}</style>
    </form>
  )
}

export default ConfigurationForm
