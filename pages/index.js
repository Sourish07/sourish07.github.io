import AboutMe from '@/components/main/aboutMe';
import Experience from '@/components/main/experience';
import Footer from '@/components/main/footer';
import Head from '@/components/main/head';
import Hero from '@/components/main/hero';
import Portfolio from '@/components/main/portfolio';
import Skills from '@/components/main/skills';
import Blog from '@/components/main/blog';
import { AboutMeText } from '@/utils/aboutMe';
import { getSortedPostsData } from '@/utils/processPosts';

export async function getStaticProps() {
    const aboutMeText = await AboutMeText();
    const posts = getSortedPostsData().slice(0, 6);
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
            <Head title="Sourish's Personal Website" >
                <link rel="canonical" href="https://www.sourish.dev" />
                <style>
                    {`
                        html {
                            scroll-behavior: smooth;
                        }

                        /* Scroll bar */
                        /* width */
                        ::-webkit-scrollbar {
                        width: 5px;
                        }

                        /* Track */
                        ::-webkit-scrollbar-track {
                        box-shadow: inset 0 0 5px grey;
                        border-radius: 5px;
                        }

                        /* Handle */
                        ::-webkit-scrollbar-thumb {
                        background: var(--red);
                        border-radius: 5px;
                        }

                        /* Handle on hover */
                        ::-webkit-scrollbar-thumb:hover {
                            background: var(--dark-red);
                        }
                    `}
                </style>
            </Head>
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

