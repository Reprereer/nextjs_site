import React from 'react'
import Date from '../components/date'
import Link from 'next/link'
import Youtube from 'react-youtube'

//投稿された記事のタイトル、日時をリスティングする
export default function PostList({ allPostsData }) {
    return (
        <>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br/>
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </>
    )
}

