import Link from "next/link";
import Section from "./section";
import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
    const projects = getProjects();
    return (
        <Section id="portfolio" title="Portfolio" subheader="Check out the projects I've worked on!">
            <style jsx>
                {`
                    hr:last-of-type {
                        display: none;
                    }
                `}
            </style>
            {projects.map((project) => (
                <>
                    <Project {...project} />
                    <hr />
                </>
            ))}
        </Section>
    )
};

const Project = (props) => {
    return (
        <div className={styles.project} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
            <div className={styles.imageContainer}>
                <img src={props.src} alt={props.alt} className={(props.projectLink || props.codeLink) ? styles.transition : null} />
                <div className={styles.links}>
                    {props.projectLink ? <ProjectLink projectLink={props.projectLink} /> : null}
                    {props.codeLink ? <ProjectLink codeLink={props.codeLink} /> : null}
                </div>
            </div>
            <div className={styles.textContainer} style={{ display: "flex", flexDirection: "column" }}>
                <h2 style={{ textAlign: "center", margin: "10px" }}>{props.title}</h2>
                <p>{props.description}</p>
                <h3 style={{ marginTop: "15px" }}>Languages and Tools Used</h3>
                <p>{props.tools}</p>
            </div>
        </div>
    )
}

const ProjectLink = (props) => {
    return (
        <Link href={props.projectLink ? props.projectLink : props.codeLink}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                <img src="icon.svg" alt="icon" style={{ width: "50px", marginRight: "10px" }} />
                <span>{props.projectLink ? "Check it out" : "View the code"}</span>
            </div>
        </Link>
    )
}

function getProjects() {
    const path = "resources/images/portfolio/"
    return [
        {
            title: "Ray Tracer from Scratch",
            description: "I created a ray tracer that simulates light's behavior in the real world to create photorealistic scenes, all of which are completely generated by the computer. Similar algorithms are used by video games and movies to create more immersive experiences for the consumer. This one has global illumination, anti-aliasing, caustics, and subsurface scattering.",
            tools: "Python, PyPy",
            src: path + "raytracer.jpg",
            projectLink: "/projects/ray-tracer",
            codeLink: "https://github.com/Sourish07/RayTracer-From-Scratch"
        },
        {
            title: "CUDA Accelerated Neural Network",
            description: "I used NVIDIA's CUDA API to write a neural network from scratch with C++ and train it on the MNIST hand-written digit dataset. With 96% accuracy, the network was able to go from 57 seconds per epoch without GPU acceleration to a whopping 3 seconds, for a 20x speedup!",
            tools: "C++, CUDA, Nsight",
            src: path + "cudann.png",
            codeLink: "https://github.com/Sourish07/RayTracer-From-Scratch"
        },
        {
            title: "AR Gallery",
            description: "This is a simple iOS app that allows you to select pictures from your phone gallery and put them on your room's walls in real life! It'll size them into a beautiful picture frame to make it look like they're actually on your wall.",
            tools: "Swift, ARKit, RealityKit",
            src: path + "argallery.png",
            codeLink: "https://github.com/Sourish07/AR-Gallery"
        },
        {
            title: "Super Mario Bros Reinforcement Learning",
            description: "I trained the computer to be able to beat Super Mario Bros NES using the popular Double Deep Q Learning algorithm. After optimizing the hyperparameters of the convolutional neural network and thousands of training iterations, the computer can now see the game's screen and determine which combination of buttons to press in order to make it to the end of the level.",
            tools: "Python, PyTorch",
            src: path + "smbrl.png",
            projectLink: "/projects/super-mario-bros-rl",
            codeLink: "https://github.com/Sourish07/Super-Mario-Bros-RL"
        },
        {
            title: "ML Algorithm Visualization Suite",
            description: "This visualization suite aims to change the perception of these machine learning algorithms that are often viewed as black boxes. The user can learn about Linear Regression, Logistic Regression, or K-Means Clustering and watch each algorithm learn and adapt to the data as each iteration goes on. After placing points on the graph, click the iterate button to see how these algorithms aren't actually as confusing as they seem to be, but rather just a product of elegant mathematics and human ingenuity.",
            tools: "Python, Flask, Javascript, ChartJS, and AWS",
            src: path + "mlalgovis.png",
            projectLink: "https://mlalgovis.sourish.dev/",
            codeLink: "https://github.com/Sourish07/MachineLearningVizualizationSuite"
        },
        {
            title: "Dine In LLC",
            description: "I co-founded this startup with the hope to help small and medium sized restaurants be more competitive. Our application allows restaurants to put their menu, which is usually on paper or in a PDF, on our platform. Then customers can access it through a QR code or NFC chip, making the entire experience contactless, which is important during a pandemic. The restaurants can also update the menu in real-time, allowing them to immediately spread word of specials at certain times/dates, out-of-stock items, or changes in prices, resulting in lowered menu costs. Unfortunately, Dine In LLC is no longer active.",
            tools: "Python, Django, Javascript, and Heroku",
            src: path + "dinein.png",
        },
        {
            title: "Real Time Dining Capacity",
            description: "The University of Wisconsin-Madison needed an application to track the capacity of their dining halls in realtime to ensure that students that dine there are safe due to COVID-19. This application allows the University to track the halls' capacities and any student on campus can then view the count in real-time, allowing them to make a safe decision on where to dine. UW-Madison no longer needed the application after Spring of 2021.",
            tools: "Google Firebase, Google Cloud, and Javascript",
            src: path + "dining.png",
        },
        {
            title: "Rap Generator",
            description: "I tweaked and retrained OpenAI's GPT-2 model on rap lyrics of my favorite artists. Check it out to see a curated sample of generated lyrics.",
            tools: "Python, Tensorflow",
            src: path + "rapgenerator.png",
            projectLink: "/projects/rap-generator",
            codeLink: "https://github.com/Sourish07/RapLyricsGenerator"
        },
        {
            title: "PyTutor",
            description: "This application is for students taking the introductory level Python course at the University of Wisconsin-Madison. It augments their learning by requiring them to trace through Python code and guess what the next line to be executed will be. It also asks them questions about the state of the program, helping them know which parts they need to study more for class exams.",
            tools: "Python, Tensorflow",
            src: path + "pytutor.png",
            codeLink: "https://github.com/sjain75/pytutor"
        },
        {
            title: "Rap Analyzer",
            description: "This application takes a rap song from the user and outputs some statistics that it calculated, such as the average grade level of the lyrics, the number of swear words, adlibs, drug references, etc. It fetches the lyrics from Genius, using their API. Each song is then stored in our database, keeping track of which tracks have the highest count for each of the stats.",
            tools: "Python, Django, HTML, CSS, Javascript, and Postgres",
            src: path + "rapanalyzer.png",
            codeLink: "https://github.com/parkerswanson19/PythonJavaTranslator/tree/master/RapAnalyzer"
        },
        {
            title: "Python to Java Translator",
            description: "This application takes in Python code from the user as input, and then outputs the equivalent Java code that performs the same task. Some features that are supported are loops, conditionals, try/catch blocks, user input, and more!",
            tools: "Python, Django, HTML, CSS, and Javascript",
            src: path + "translator.png",
            codeLink: "https://github.com/parkerswanson19/PythonJavaTranslator/tree/master/receiveInput"
        },
        {
            title: "Shotplotter",
            description: "My team created this application for our high school's volleyball coach. He needed an efficient method to keep track of the opponents' shots during a match; he was initally using pen and paper, which was very tedious. Shotplotter allows the user to draw lines on the iPad—with different styles and colors representing different shot types and players—greatly streamlining the process of analyzing the opponents strengths and weaknesses.",
            tools: "Swift",
            src: path + "shotplotter.png",
            codeLink: "https://www.sourish.dev/resources/images/Portfolio-Shotplotter.png"
        },
        {
            title: "Yahtzee",
            description: "This Android application virtualizes the five dice from the classic game of Yahtzee. The user can lock the rolls on dice they want to keep, while rerolling the other ones.",
            tools: "Android Studio, Java",
            src: path + "yahtzee.png",
            codeLink: "https://github.com/Sourish07/Yahtzee"
        },
    ]
}

export default Portfolio;