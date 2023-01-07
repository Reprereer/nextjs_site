import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion' 
import Intro from '../components/intro'
import Message from '../components/message'
import News from '../components/news'
import Projects from '../components/projects'
import Githubs from '../components/github'
import Links from '../components/links'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Layout home>
      <Head>
        <title>Fictionaire</title>
        <meta name="description" content="everything with you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Intro />
        <Message />
        <News />
        <Projects />
        <Githubs />
        <Links />
        <Footer />
      </motion.div>
    </Layout>
  </>
  )
}