import Link from 'next/link';
import Image from 'next/image';
import Section from "./section";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <Section id="contact" title="Contact" subheader="Feel free to reach out!">
                <div className={`section ${styles.footer}`}>
                    <Link href="mailto:sourish@cs.wisc.edu" style={{ marginBottom: "10px", font: "1rem" }}>
                        <Image src="/resources/icons/mail.svg" width={20} height={20} alt="email"></Image>
                        <span className={styles.text}>Email</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sourish07/">
                        <Image src="/resources/icons/linkedin.svg" width={20} height={20} alt="linkedin"></Image>
                        <span className={styles.text}>LinkedIn</span>
                    </Link>
                    <span>© 2020 Sourish Kundu</span>
                    <div id={styles.up} onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Image src="/resources/icons/up.svg" width={40} height={40} alt="phone" ></Image>
                    </div>
                </div>
            </Section>
        </footer>
    );
};
