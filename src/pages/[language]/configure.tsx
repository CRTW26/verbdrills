import React from 'react'
import { useRouter } from 'next/router'
import Layout from 'shared/components/Layout'
import { GameConfigurationForm } from 'features/game-configuration'
import useForm from 'features/game-configuration/hooks/useForm'

const Train: React.FC = () => {
  const router = useRouter()

  const { formValues, isValid, onChange } = useForm({
    language: '',
    verbset: '',
    tense: '',
  })

  const handleSubmit = () => {
    router.push(`/${router.query.language}/train`)
  }

  return (
    <Layout>
      <GameConfigurationForm
        onSubmit={handleSubmit}
        formValues={formValues}
        isValid={isValid}
        onChange={onChange}
      />
    </Layout>
  )
}

export default Train
