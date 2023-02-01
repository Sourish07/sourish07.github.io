import Section from "./section";
import Image from "next/image";

export default function Experience() {
    const path = "resources/images/experience/"
    let images = ["bytedance-copy.svg", "aws.webp", "gallify.svg", "capitalone.svg", "xaipient.webp", "dinein.webp", "leidos.svg"]
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
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {images.map((image) => (
                    <div key={image.name} style={{padding: "15px", backgroundColor: "white", margin: "15px", borderRadius: "10px"}}>
                        <div style={{position: "relative", width: "200px", height: "100px" }}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                fill
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

