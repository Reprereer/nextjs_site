import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { Inter } from '@next/font/google'
import { motion } from 'framer-motion' 
import Intro from '../components/intro'
import Message from '../components/message'
import Projects from '../components/projects'
import Githubs from '../components/github'
import Links from '../components/links'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import fsPromises from 'fs/promises'
import path from 'path'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home( props ) {
  const newsLists = props.newsLists
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
        <h2>News</h2>
        {newsLists.map(post =>
          <div key={post.id}>
            {post.date} {post.title}
          </div>
        )}
        <Projects />
        <Githubs />
        <Links />
        <Footer />
      </motion.div>
    </Layout>
  </>
  )
}

export const getStaticProps = async() => {
  const filePath = path.join(process.cwd(), 'news.json')

  const data = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(data)

  return {
    props: objectData
  }
}