import Meta from './meta'
import Menu from './menu'
import Link from 'next/link'

type Props = {
    home?: boolean
    children: React.ReactNode
}

const Layout = ({home, children}: Props) => {
    return (
        <>
            <Meta />
            <Menu width={250} />
            <div>
                <main>{children}</main>
                {!home && (
                    <div>
                        <Link href='/'>Back To Home</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Layout