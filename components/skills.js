import ImageRow from "./imageRow";
import {SectionTitle} from "./sectionTitle"

const Skills = () => {
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
        <div className="row">
            <style>
                {`
                    h2 {
                        font-weight: bold;
                        margin-top: 15px
                    }
                `}
            </style>
            <SectionTitle title="Skills" />
            <h2>Languages</h2>
            <ImageRow images={languages} caption={true}/>

            <h2>Libraries, Tools, and Frameworks</h2>
            <ImageRow images={frameworks} caption={true}/>
            
            <h2>Other</h2>
            <ImageRow images={other} caption={true}/>
        </div>
    );
}

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
        { name: "Python", src: "python.svg"},
        { name: "C++", src: "c++.svg"},
        { name: "C", src: "c.svg"},
        { name: "Java", src: "java.svg"},
        { name: "Swift", src: "swift.svg"},
        { name: "HTML", src: "HTML.svg"},
        { name: "CSS", src: "CSS.svg"},
        { name: "JavaScript", src: "javascript.svg"},
        { name: "SQL", src: "sql.svg"},
        { name: "MATLAB", src: "matlab.png"},
    ]
    return format(languages, path, style);
}

function getFrameworks(path, style) {
    let frameworks = [
        { name: "PyTorch", src: "pytorch.svg"},
        { name: "CUDA", src: "cuda.png"},
        { name: "Tensorflow", src: "tensorflow.svg"},
        { name: "Scikit Learn", src: "scikitlearn.svg"},
        { name: "ARKit", src: "arkit.png"},
        { name: "RealityKit", src: "realitykit.png"},
        { name: "SceneKit", src: "scenekit.png"},
        { name: "Django", src: "django.svg"},
        { name: "Flask", src: "flask.svg"},
        { name: "NumPy", src: "numpy.svg"},
        { name: "Pandas", src: "pandas.svg"},
        { name: "Matplotlib", src: "matplotlib.svg"},
        { name: "react", src: "react.svg"},
        { name: "jQuery", src: "jquery.svg"},
        { name: "AJAX", src: "ajax.svg"},
        { name: "Postgresql", src: "postgresql.svg"},
        { name: "Bootstrap", src: "bootstrap.svg"},
    ]
    return format(frameworks, path, style);
}

function getOther(path, style) {
    let other = [
        { name: "Linux", src: "linux.svg"},
        { name: "Git/GitHub", src: "git.svg"},
        { name: "AWS", src: "aws.svg"},
        { name: "Google Cloud", src: "googlecloud.svg"},
        { name: "Google Firebase", src: "firebase.svg"},
        { name: "Android App Development", src: "android.svg"},
        { name: "Blender", src: "blender.svg"},
    ]
    return format(other, path, style);
}

export default Skills;