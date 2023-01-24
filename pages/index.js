//import row from components\row.js
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Row from '../components/row';
import CenterBar from '../components/centerbar';
import Navbar from '../components/navbar';


export default function Index() {
    return (
        <>
            <Head>
                <title>Sourish's Personal Website</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header style={{display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh"}}>
                <Navbar />
                <div className="row">
                    <SourishPic />
                    <h1 style={{textAlign: "center", fontWeight: "100", fontSize: "3.5rem"}}>Sourish Kundu</h1>
                    <p style={{textAlign: "center", justifyContent: "center", fontSize: "1.5rem"}}>
                        An ambitious creator, passionate speaker, and insightful thinker
                    </p>
                    <CenterBar />
                </div>
            </header>
        </>
    );
}

function SourishPic() {
    return (
        <img src="me.jpg" alt="Picture of Sourish" style={{"width": "60vw", "border-radius": "50%", maxWidth: "500px"}}/>
    );
}