import Link from 'next/link';
import Section from "./section";

export default function Footer() {
    return (
        <footer>
            <Section id="contact" title="Contact" subheader="Feel free to reach out!">
                <style jsx>
                    {`
                        span {
                            font-size: 1.2rem;
                        }
                    `}
                </style>
                <div className="section">
                    <Link href="mailto:sourish@cs.wisc.edu" style={{ marginBottom: "10px", font: "1rem" }}>
                        <span>Email: sourish@cs.wisc.edu</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sourish07/">
                        <span>LinkedIn: linkedin.com/in/sourish07/</span>
                    </Link>
                </div>
            </Section>
        </footer>
    );
};
