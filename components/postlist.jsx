import React from 'react'
import Date from '../components/date'
import Link from 'next/link'
import StyledPostlist from './styledComponents/styledpostlist'
import StyledPosts from './styledComponents/styledposts'

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