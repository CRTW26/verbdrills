import React, { useState } from 'react'
import { GameConfiguration } from 'shared/types'

type UseForm = {
  formValues: GameConfiguration
  isValid: boolean
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}

const useForm = (initialValues: GameConfiguration): UseForm => {
  const [formValues, setFormValues] = useState(initialValues)

  const validateFields = () => {
    return Object.values(formValues).includes('')
  }

  const onChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [ev.currentTarget.name]: ev.currentTarget.value,
    })
  }

  return { formValues, isValid: validateFields(), onChange }
}

export default useForm
