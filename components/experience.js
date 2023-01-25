import ImageRow from "./imageRow";
import Section from "./section";

const Experience = () => {
    const path = "resources/images/experience/"
    let images = ["bytedance-copy.svg", "aws.png", "gallify.svg", "capitalone.svg", "xaipient.png", "dinein.png", "leidos.svg"]
    images = images.map((image) => {
        return {
            name: image,
            src: path + image,
            alt: image,
            style: {
                maxWidth: "200px",
                maxHeight: "125px",
                margin: "10px",
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "white",
            }
        }
    })
    return (
        <Section id="experience" title="Experience" subheader="I've had experience working both at big corporations and small startups.">
            <ImageRow images={images}/>
        </Section>
    );
};

export default Experience;