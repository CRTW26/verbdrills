import { AppProps } from 'next/app'
import 'styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
