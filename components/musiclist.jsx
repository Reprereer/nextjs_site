import React from 'react'
import Date from '../components/date'
import Link from 'next/link'
import Youtube from 'react-youtube'

export default function MusicList({ allPostsData }) {
    return (
        <>
            <ul>
                {allPostsData.map(({ id, date, title, genre, movieid }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br/>
                        <small>
                            <Date dateString={date} />
                            {genre}
                            <Youtube videoId={movieid} />
                        </small>
                    </li>
                ))}
            </ul>
        </>
    )
}
