import { useState } from 'react'

type UseForm = {
  formValues: Record<string, string>
  onChange: (ev) => void
}

const useForm = (initialValues: Record<string, string>): UseForm => {
  const [formValues, setFormValues] = useState(initialValues)

  const onChange = (ev) => {
    setFormValues({
      ...formValues,
      [ev.currentTarget.name]: ev.currentTarget.value,
    })
  }

  return { formValues, onChange }
}

export default useForm
