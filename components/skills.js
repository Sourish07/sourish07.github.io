// import ImageRow from "./imageRow";
import Image from "next/image";
import Section from "./section";

export default function Skills() {
    const path = "resources/images/skills/"
    const style = {
        height: "75px",
        margin: "10px",
        padding: "10px",
    }
    const languages = getLanguages(path, style);
    const frameworks = getFrameworks(path, style);
    const other = getOther(path, style);

    return (
        <Section id="skills" title="Skills">
            <style jsx>
                {`
                    h3 {
                        font-weight: bold;
                        text-align: center;
                        font-size: 1.5rem;
                    }

                    h3:first-of-type {
                        margin-top: 20px;
                    }
                `}
            </style>
            <h3>Languages</h3>
            <ImageRow images={languages} caption={true} />

            <hr />

            <h3>Libraries, Tools, and Frameworks</h3>
            <ImageRow images={frameworks} caption={true} />

            <hr />

            <h3>Other</h3>
            <ImageRow images={other} caption={true} />
        </Section>
    );
}

export function ImageRow(props) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {props.images.map((image) => (
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "10px 0"}}>
                    <div key={image.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", height: "75px", width: "75px" }}>
                        <Image
                            key={image.name}
                            src={image.src}
                            alt={image.alt}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            fill
                        />
                    </div>
                    <p style={{ width: "100px", textAlign: "center" }}>{image.name}</p>
                </div>
            ))}
        </div>
    );
};

function format(items, path, style) {
    return items.map((item) => {
        return {
            name: item.name,
            src: path + item.src,
            alt: item.name,
            style: style
        }
    })
}


function getLanguages(path, style) {
    let languages = [
        { name: "Python", src: "python.svg" },
        { name: "C++", src: "c++.svg" },
        { name: "C", src: "c.svg" },
        { name: "Java", src: "java.svg" },
        { name: "Swift", src: "swift.svg" },
        { name: "HTML", src: "html.svg" },
        { name: "CSS", src: "css.svg" },
        { name: "JavaScript", src: "javascript.svg" },
        { name: "SQL", src: "sql.svg" },
        { name: "MATLAB", src: "matlab.webp" },
    ]
    return format(languages, path, style);
}

function getFrameworks(path, style) {
    let frameworks = [
        { name: "PyTorch", src: "pytorch.svg" },
        { name: "CUDA", src: "cuda.webp" },
        { name: "Tensorflow", src: "tensorflow.svg" },
        { name: "Scikit Learn", src: "scikitlearn.svg" },
        { name: "Docker", src: "docker.svg" },
        { name: "Nginx", src: "nginx.svg" },
        { name: "ARKit", src: "arkit.webp" },
        { name: "RealityKit", src: "realitykit.webp" },
        { name: "SceneKit", src: "scenekit.webp" },
        { name: "Django", src: "django.svg" },
        { name: "Flask", src: "flask.svg" },
        { name: "NumPy", src: "numpy.svg" },
        { name: "Pandas", src: "pandas.svg" },
        { name: "Matplotlib", src: "matplotlib.svg" },
        { name: "React", src: "react.svg" },
        { name: "Next.js", src: "nextjs.svg" },
        { name: "jQuery", src: "jquery.svg" },
        { name: "AJAX", src: "ajax.svg" },
        { name: "Postgresql", src: "postgresql.svg" },
        { name: "Bootstrap", src: "bootstrap.svg" },
    ]
    return format(frameworks, path, style);
}

function getOther(path, style) {
    let other = [
        { name: "Linux", src: "linux.svg" },
        { name: "Git/GitHub", src: "git.svg" },
        { name: "AWS", src: "aws.svg" },
        { name: "Google Cloud", src: "googlecloud.svg" },
        { name: "Proxmox", src: "proxmox.svg" },
        { name: "Google Firebase", src: "firebase.svg" },
        { name: "Android App Development", src: "android.svg" },
        { name: "Blender", src: "blender.svg" },
    ]
    return format(other, path, style);
}
