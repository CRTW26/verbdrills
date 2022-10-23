import React from 'react'
import Layout from 'shared/components/Layout'
import { GameConfigurationForm } from 'features/game-configuration'

const Train: React.FC = () => {
  return (
    <Layout>
      <GameConfigurationForm />
    </Layout>
  )
}

export default Train
