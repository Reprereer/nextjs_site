import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { getSortedMusicsData } from '../lib/musicPosts'
import MusicList from '../components/musiclist'

function Blog({allMusicsData}) {
    return (
        <>
        <Layout>
            <Head>
                <title>Musics|fictionaire</title>
                <meta name="description" content="fictionaireのBlogページです" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <h1>Music</h1>
            <MusicList allPostsData={allMusicsData} />
        </Layout>
        </>
    )
}

export default Blog

export async function getStaticProps() {
    const allMusicsData = getSortedMusicsData()
    return {
        props: {
            allMusicsData
        }
    }
}