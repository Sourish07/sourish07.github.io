import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog/Footer.module.css";

export default function Footer() {
    return (
        <footer style={{ width: "100%", display: "flex", justifyContent: "center", boxShadow: "0 -5px 5px -5px rgba(0, 0, 0, 0.2)", marginTop: "50px" }}>
            <div className={styles.footer}>
                <h2 className={styles.title}>Sourish Shares</h2>
                <div className={styles.links}>
                    <div className={styles.contact}>
                        <span>Sourish Kundu</span>
                        <div>

                            <Link href="/">sourish.dev</Link>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <Link href="mailto:sourishkundu07@gmail.com">
                            <Image src="/resources/icons/mail.svg" width={20} height={20} alt="github"></Image>
                            <span>Email</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sourish07/">
                            <Image src="/resources/icons/linkedin.svg" width={20} height={20} alt="linkedin"></Image>
                            <span>LinkedIn</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.bio}>
                    <p>Welcome to my blog! Here, I write about various topics about computer science, the broader tech industry, and about life too. If you have any thoughts, comments, or questions, please don't hesitate to reach out.</p>
                </div>
                <div style={{ marginTop: "15px" }}>© 2022 Sourish Kundu</div>
            </div>
        </footer>
    );
}