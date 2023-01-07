import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

export default props => {
    return (
        <Menu {...props}>
        <Link href="/" className="menu-item">Top</Link>
        <Link href="/blog" className="menu-item">Blog</Link>
        <Link href="/music" className="menu-item">Music</Link>
        <Link href="/contact" className='menu-item'>Contact</Link>
        </Menu>
    )
}