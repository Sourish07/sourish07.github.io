import Navbar from './navbar';
import CenterBar from './centerbar';

const Hero = () => {
    return (
        <header style={{ height: "100vh", justifyItems: "stretch" }}>
            <Navbar />
            <div className="section" style={{height: "100%", justifyContent: "center"}}>
                <SourishPic />
                <h1 style={{ textAlign: "center", fontWeight: "100", fontSize: "3.5rem" }}>Sourish Kundu</h1>
                <p style={{ textAlign: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                    An ambitious creator, passionate speaker, and insightful thinker
                </p>
                <CenterBar />
            </div>
        </header>
    )
}

function SourishPic() {
    return (
        <img src="me.jpg" alt="Picture of Sourish" style={{ width: "60vw", borderRadius: "50%", maxWidth: "400px" }} />
    );
}

export default Hero;