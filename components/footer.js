import Section from "./section";

const Footer = () => {
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
                    <div><span>Email: </span><a href="mailto:sourish@cs.wisc.edu">sourish@cs.wisc.edu</a></div>
                    <div><span>LinkedIn: </span><a href="www.linkedin.com/in/sourish07/">linkedin.com/in/sourish07/</a></div>
                </div>
            </footer>
        </Section>
    );
};

export default Footer;