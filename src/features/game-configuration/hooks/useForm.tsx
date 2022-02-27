import React, { useState } from 'react'

type UseForm<T> = {
  formValues: T
  isValid: boolean
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}

const useForm = <FormValues,>(
  initialValues: FormValues
): UseForm<FormValues> => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues)

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
