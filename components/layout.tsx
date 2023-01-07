import Meta from './meta'
import Menu from './menu'
import Link from 'next/link'

type Props = {
    home?: boolean
    children: React.ReactNode
}

//全体に影響するレイアウト
const Layout = ({home, children}: Props) => {
    return (
        <>
            <Meta />
            <Menu width={250} />
            <div>
                <main>{children}</main>
                {!home && (  //PropsでHomeかどうかを判別するインラインif文
                    <div>
                        <Link href='/'>Back To Home</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Layout