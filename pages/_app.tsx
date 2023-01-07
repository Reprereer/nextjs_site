import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import '../styles/styles.css'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  )
}

export default App