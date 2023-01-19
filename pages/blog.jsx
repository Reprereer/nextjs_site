import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import PostList from '../components/postlist'
import styled from 'styled-components'

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

const StyledTitle = styled.h1`
    ${({ theme }) => theme.breakpoint.media.base`
        color: ${theme.colors.black};
        text-align: center;
        font-size: ${theme.fonts.size.xl2};
    `}
    ${({ theme }) => theme.breakpoint.media.ss`
        font-size: ${theme.fonts.size.xl3}
    `}
    ${({theme}) => theme.breakpoint.media.sm`
        font-size: ${theme.fonts.size.xl3};
    `}
    ${({theme}) => theme.breakpoint.media.md`
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.lg`
        font-size: ${theme.fonts.size.xl4};
    `}
    ${({theme}) => theme.breakpoint.media.xl`
        font-size: ${theme.fonts.size.xl4};
    `}
`