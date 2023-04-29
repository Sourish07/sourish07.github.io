import Date from '@/components/blog/date';
import Link from 'next/link';
import styles from '@/styles/blog/Blog.module.css';

export default function PostList({ posts }) {
    return (
        <>
            {posts.map(({ id, url, categoryUrl, date, title, subheader, category }) => (
                <div className={styles.post} key={id}>
                    <Link href={url}>
                        <div className={styles.postTitle}>
                            {title}
                        </div>
                        <div className={styles.subheader}>
                            {subheader}
                        </div>
                    </Link>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Link href={categoryUrl} className={styles.category}>
                            {category}
                        </Link>
                        <div className={styles.date}>
                            <Date dateString={date} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}