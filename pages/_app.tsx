import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from '../styles/global'
import '../styles/styles.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
      <GlobalStyle />
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </ThemeProvider>
    </div>
  )
}

export default App