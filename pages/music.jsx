import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { getSortedMusicsData } from '../lib/musicPosts'
import MusicList from '../components/musiclist'

//Musicページ
function Music({allMusicsData}) {
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

export default Music

export async function getStaticProps() {
    const allMusicsData = getSortedMusicsData()
    return {
        props: {
            allMusicsData
        }
    }
}