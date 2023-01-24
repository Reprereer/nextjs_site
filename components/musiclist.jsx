import React from 'react'
import Date from '../components/date'
import Link from 'next/link'
import Youtube from 'react-youtube'
import StyledPostlist from './styledComponents/styledpostlist'
import StyledPosts from './styledComponents/styledposts'

//root/musicフォルダにあるマークダウンからYoutube埋め込みを含むリストを作成する
export default function MusicList({ allPostsData }) {
    return (
        <>
            <StyledPostlist>
                {allPostsData.map(({ id, date, title, genre, movieid }) => (
                    <StyledPosts key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br/>
                        <small>
                            <Date dateString={date} />
                            <br/>GENRE : {genre}
                            <Youtube videoId={movieid} />
                        </small>
                    </StyledPosts>
                ))}
            </StyledPostlist>
        </>
    )
}
