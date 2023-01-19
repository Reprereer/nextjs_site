import React from 'react'
import Date from '../components/date'
import Link from 'next/link'
import Youtube from 'react-youtube'
import styled from 'styled-components'

//投稿された記事のタイトル、日時をリスティングする
export default function PostList({ allPostsData }) {
    return (
        <>
            <StyledPostlist>
                {allPostsData.map(({ id, date, title }) => (
                    <StyledPosts key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br/>
                        <small>
                            <Date dateString={date} />
                        </small>
                    </StyledPosts>
                ))}
            </StyledPostlist>
        </>
    )
}

export const StyledPostlist = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        text-align: center;
        background: #ffffff;
        margin-right: 20px;
    `}
`

export const StyledPosts = styled.div`
    ${({ theme }) => theme.breakpoint.media.base`
        padding-bottom: 1%;
    `}
`