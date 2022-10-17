import React from 'react'
import { useRouter } from 'next/router'
import Button from 'shared/components/Button'
import Layout from 'shared/components/Layout'

const Train: React.FC = () => {
  const router = useRouter()

  const handleLanguageSelection = () => {
    router.push(`/${router.query.language}/train`)
  }

  return (
    <Layout>
      <div>Choose your verbs</div>

      <Button
        className="btn btn--primary"
        text="Spanish"
        onClick={handleLanguageSelection}
      />
    </Layout>
  )
}

export default Train
