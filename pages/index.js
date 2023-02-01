import SkHead from '@/components/main/head';
import Hero from '@/components/main/hero';
import AboutMe from '@/components/main/aboutMe';
import Experience from '@/components/main/experience';
import Skills from '@/components/main/skills';
import Portfolio from '@/components/main/portfolio';
import Footer from '@/components/main/footer';

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

