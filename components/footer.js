import Link from 'next/link';
import Section from "./section";

export default function Footer() {
    return (
        <Section id="contact" title="Contact" subheader="Feel free to reach out!">
            <footer>
                <div className="section">
                    <style jsx>
                        {`
                        div {
                            margin: 10px;
                        }

                        a {
                            color: var(--white)
                        }

                        a:hover,
                        a:focus,
                        a:active,
                        a:visited {
                            color: var(--white);
                        }
                    `}
                    </style>
                    <Link href="mailto:sourish@cs.wisc.edu"><span>Email: </span>sourish@cs.wisc.edu</Link>
                    <Link href="https://www.linkedin.com/in/sourish07/"><span>LinkedIn: </span></Link>
                </div>
            </footer>
        </Section>
    );
};
