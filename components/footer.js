import { SectionSubheader, SectionTitle } from "./sectionTitle";

const Footer = () => {
  return (
    <div className="section">
        <footer>
            <SectionTitle title="Contact" />
            <SectionSubheader text="Feel free to reach out!" />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
    </div>
  );
};

export default Footer;