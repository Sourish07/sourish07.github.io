import { SectionTitle, SectionSubheader } from './sectionTitle.js';

const Portfolio = () => {
    return (
        <div className="row">
            <SectionTitle title="Portfolio" />
            <SectionSubheader text="Check out the projects I've worked on!" />
        </div>
    )
};

const Project = (props) => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <img src={props.src} alt={props.alt} />
            <div style={{display: "flex", flexDirection: "column"}}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>

                <h4>Languages and Tools Used</h4>
                <p>{props.languages}</p>
            </div>
        </div>
    )
}

export default Portfolio;