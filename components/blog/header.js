import styles from '@/styles/blog/Blog.module.css';

import Link from 'next/link'

export default function Header() {
    return (
        <header id={styles.header}>
            <div className={styles.wrapper}>
                <Link href="/blog" style={{fontWeight: "300"}}>Sourish Shares</Link>
                <Link href="/">sourish.dev</Link>
            </div>
        </header>
    )

}