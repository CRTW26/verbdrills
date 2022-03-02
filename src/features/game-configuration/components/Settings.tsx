import React, { useState } from 'react'
import Button from 'shared/components/Button'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

interface Props {
  defaultTime: number
}

const Settings: React.FC<Props> = ({ defaultTime }) => {
  const [time, setTime] = useState(defaultTime)

  return (
    <>
      <h1>Settings</h1>

      <div className="timer-setting">
        <h3>Timer</h3>

        <button onClick={() => setTime(time + 1)} disabled={time > 9}>
          <FaChevronUp color="#e0ff4f" fontSize={'2rem'} />
        </button>

        <p>
          {time} {`minute${time > 1 ? 's' : ''}`}
        </p>

        <button onClick={() => setTime(time - 1)} disabled={time < 2}>
          <FaChevronDown color="#e0ff4f" fontSize={'2rem'} />
        </button>
      </div>

      <Button className="btn btn--primary" text="Save" />

      <style jsx>{`
        .timer-setting {
          margin: 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timer-setting > h3 {
          align-self: flex-start;
        }

        button {
          background: none;
          border: none;
        }

        p {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  )
}

export default Settings
