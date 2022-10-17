import React from 'react'
import Image from 'next/image'
import Layout from 'shared/components/Layout'
import { useRouter } from 'next/router'

const SelectLanguage: React.FC = () => {
  const router = useRouter()

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    router.push(`/${ev.currentTarget.value}/configure`)
  }

  return (
    <Layout>
      <div className="container">
        <h3 className="title">Choose your language</h3>

        <div className="language-selection">
          <button value="spanish" onClick={handleClick}>
            <Image src="/spain.png" width={150} height={150} />

            <p>Spanish</p>
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          margin: 3rem;
        }

        .title {
          text-align: center;
        }

        .language-selection {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        }

        .language-selection > button {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          transition: 0.2s ease-in-out 0s;
        }

        .language-selection > button:hover {
          transform: scale(1.25);
        }

        .language-selection > button:hover::before {
          content: '';
          background: #ff6663;
          opacity: 0.3;
          position: absolute;
          border-radius: 15px;
          z-index: -1;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0;
        }

        .language-selection > button > p {
          margin-top: 1rem;
          padding: 1rem;
          background: #e0ff4f;
          border-radius: 10px;
          color: #0b3954;
          width: 150px;
          height: 60px;
          font-family: Montserrat-Bold;
        }
      `}</style>
    </Layout>
  )
}

export default SelectLanguage
