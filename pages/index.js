import Head from 'next/head';

import Hero from '../components/hero';
import AboutMe from '../components/aboutMe';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';

export default function Index() {
    return (
        <>
            <Head>
                <title>Sourish's Personal Website</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Hero />
            <AboutMe />
            <Experience />
            <Skills />
            <Portfolio />
        </>
    );
}

