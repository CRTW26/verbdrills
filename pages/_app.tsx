import { AppProps } from 'next/app'
// import 'styles/global.css'
import '<div className=""></div>/styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
