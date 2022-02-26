import { useState } from 'react'

type UseForm = {
  formValues: Record<string, string>
  isValid: boolean
  onChange: (ev) => void
}

const useForm = (initialValues: Record<string, string>): UseForm => {
  const [formValues, setFormValues] = useState(initialValues)

  const validateFields = () => {
    return Object.values(formValues).includes('')
  }

  const onChange = (ev) => {
    setFormValues({
      ...formValues,
      [ev.currentTarget.name]: ev.currentTarget.value,
    })
  }

  return { formValues, isValid: validateFields(), onChange }
}

export default useForm
