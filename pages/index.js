import AboutMe from '@/components/main/aboutMe';
import Blog from '@/components/main/blogSection';
import Experience from '@/components/main/experience';
import Footer from '@/components/main/footer';
import SkHead from '@/components/main/head';
import Hero from '@/components/main/hero';
import Portfolio from '@/components/main/portfolio';
import Skills from '@/components/main/skills';
import { AboutMeText } from '@/utils/aboutMe';
import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import mainGlobal from '@/styles/mainGlobal';

export async function getStaticProps() {
    const aboutMeText = await AboutMeText();
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    }).slice(0, 6);
    return {
        props: {
            aboutMeText,
            posts,
        },
    };
}

export default function Index({ aboutMeText, posts }) {
    return (
        <>
            <SkHead title="Sourish's Personal Website" >
                <link rel="canonical" href="https://www.sourish.dev" />
            </SkHead>
            <style jsx>{mainGlobal}</style>
            <main>
                <Hero />
                <AboutMe text={aboutMeText} />
                <Experience />
                <Skills />
                <Portfolio />
                <Blog posts={posts} />
                <Footer />
            </main>
        </>
    );
}

