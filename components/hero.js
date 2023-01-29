import CenterBar from './centerbar';
import Navbar from './navbar';
import Section from './section';

export default function Hero() {
    return (
        <header>
            <Navbar />
            <Section id="hero" divStyle={{ height: "100vh", justifyContent: "center" }} sectionStyle={{ padding: "0" }}>

                <img src="sourish.webp" id="me-pic" alt="Picture of Sourish" style={{ borderRadius: "50%", width: "clamp(325px, 30vw, 600px)" }} />

                <div>

                    <h1 style={{ textAlign: "center", fontWeight: "100", fontSize: "3.5rem" }}>Sourish Kundu</h1>

                    <p style={{ textAlign: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                        An ambitious creator, passionate speaker, and insightful thinker
                    </p>

                    <CenterBar />
                </div>
            </Section>
        </header>
    )
}

