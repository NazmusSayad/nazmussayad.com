import 'css-reset-plus'
import '$styles/index.scss'
import { AppProps } from 'next/app'
import Head from '$components/Head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
