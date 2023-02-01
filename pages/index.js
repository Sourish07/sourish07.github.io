import SkHead from '@/components/head';
import Hero from '@/components/hero';
import AboutMe from '@/components/aboutMe';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Footer from '@/components/footer';

export default function Index() {
    return (
        <>
            <SkHead title="Sourish's Personal Website" >
                <link rel="canonical" href="https://www.sourish.dev" />
            </SkHead>
            <main>
                <Hero />
                <AboutMe />
                <Experience />
                <Skills />
                <Portfolio />
                <Footer />
            </main>
        </>
    );
}

