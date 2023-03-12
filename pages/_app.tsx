import 'css-reset-plus'
import '$styles/index.scss'
import getClassName from 'get-classnames'

try {
  global.$cn = getClassName
  window.$cn = getClassName
} catch {}
declare global {
  var $cn: typeof getClassName
}

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
