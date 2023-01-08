import Date from './date'
import Link from 'next/link'

//News欄を追加する.jsonの読み込みを検討予定
const News = ({props}) => {
    const newsLists = props.newsLists
    return (
        <section>
            <h2>News</h2>
            <ul>
                {newsLists.map(({ id, date, title, path }) => (
                    <li key={id}>
                        {path && (
                        <Link href={path}>{title}</Link>
                        )}
                        {!path && (
                            {title}
                        )}
                        <br/>
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default News