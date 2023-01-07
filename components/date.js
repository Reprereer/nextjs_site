import { parseISO, format } from 'date-fns'

//allPostsDataで与えられたdateを日時に変換する
function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date