import ImageRow from "./imageRow";
import Section from "./section";

const Experience = () => {
    const path = "resources/images/experience/"
    let images = ["bytedance.svg", "aws.png", "gallify.svg", "capitalone.svg", "xaipient.png", "dinein.png", "leidos.svg"]
    images = images.map((image) => {
        return {
            name: image,
            src: path + image,
            alt: image,
            style: {
                maxWidth: "200px",
                maxHeight: "125px",
                margin: "10px",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
            }
        }
    })
    return (
        <Section id="experience" title="Experience" text="I've had experience working both at big corporations and small startups.">
            <ImageRow images={images}/>
        </Section>
    );
};

export default Experience;