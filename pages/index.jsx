import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { motion } from 'framer-motion' 
import Intro from '../components/intro'
import Message from '../components/message'
import Projects from '../components/projects'
import Githubs from '../components/github'
import Links from '../components/links'
import Footer from '../components/footer'
import fsPromises from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import StyledHeadline from '../components/styledComponents/styledheadline'
import StyledNews from '../components/styledComponents/stylednews'


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
        <StyledHeadline>News</StyledHeadline>
        {newsLists.map(post =>
          <StyledNews key={post.id}>
            {<h4>{post.date}</h4>}  {post.path=="home" && (<Link href='/'>{post.title}</Link>)}
                                    {post.path=="music" && (<Link href='/music'>{post.title}</Link>)}
                                    {post.path=="blog" && (<Link href='/blog'>{post.title}</Link>)}
          </StyledNews>
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