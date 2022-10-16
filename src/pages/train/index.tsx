import React from 'react'
import router from 'next/router'
import Button from 'shared/components/Button'

const Train: React.FC = () => {
  const handleLanguageSelection = () => {
    router.push('/train/spanish')
  }

  return (
    <>
      <div>Choose your language to get started</div>

      <Button
        className="btn btn--primary"
        text="Spanish"
        onClick={handleLanguageSelection}
      />
    </>
  )
}

export default Train
