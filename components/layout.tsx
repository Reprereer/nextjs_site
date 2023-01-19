import Meta from './meta'
import Menu from './menu'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import { useRouter } from 'next/router'

type Props = {
    home?: boolean
    children: React.ReactNode
}

//全体に影響するレイアウト
const Layout = ({home, children}: Props) => {
    const router = useRouter();
    return (
        <>
            <Meta />
            <Menu width={250} />
            <div>
                <main>{children}</main>
                {!home && (  //PropsでHomeかどうかを判別するインラインif文
                    <div>
                        <button onClick={() => router.push("/")} className={styles.btnborderopen}>Back to Home</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Layout