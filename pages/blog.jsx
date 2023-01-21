import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import PostList from '../components/postlist'
import StyledTitle from '../components/styledComponents/styledtitle'

function Blog({allPostsData}) {
    return (
        <>
        <Layout>
            <Head>
                <title>Blog|fictionaire</title>
                <meta name="description" content="fictionaireのBlogページです" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <StyledTitle>Blog</StyledTitle>
            <PostList allPostsData={allPostsData} />
        </Layout>
        </>
    )
}

export default Blog

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}