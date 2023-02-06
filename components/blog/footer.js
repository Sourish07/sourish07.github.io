import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog/Footer.module.css';

export default function Footer() {
    return (
        <footer style={{ width: "100%" }}>
            <div className={styles.footer}>
                <h2 className={styles.title}>Sourish Shares</h2>
                <div className={styles.links}>
                    <div className={styles.contact}>
                        <span>Sourish Kundu</span>
                        <Link href="mailto:sourishkundu07@gmail.com">sourishkundu07@gmail.com</Link>
                    </div>
                    <div className={styles.socials}>
                        <Link href="https://github.com/Sourish07">
                            <Image src="/resources/icons/github.svg" width={20} height={20} alt="github"></Image>
                            <span>sourish07</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sourish07/">
                            <Image src="/resources/icons/linkedin.svg" width={20} height={20} alt="linkedin"></Image>
                            <span>sourish07</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.bio}>
                    <p>Welcome to my blog! Here, I write about various topics about Computer Science, the industry in general, and about life too. If you have any thoughts, comments, or questions, please don't hesitate to reach out.</p>
                </div>
            </div>
        </footer>
    )
}