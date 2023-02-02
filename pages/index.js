import Head from '@/components/main/head';
import Hero from '@/components/main/hero';
import AboutMe from '@/components/main/aboutMe';
import Experience from '@/components/main/experience';
import Skills from '@/components/main/skills';
import Portfolio from '@/components/main/portfolio';
import Footer from '@/components/main/footer';

export default function Index() {
    return (
        <>
            <Head title="Sourish's Personal Website" >
                <link rel="canonical" href="https://www.sourish.dev" />
                <style>
                    {`
                        * {
                            scroll-behavior: smooth !important;
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
                <AboutMe />
                <Experience />
                <Skills />
                <Portfolio />
                <Footer />
            </main>
        </>
    );
}

