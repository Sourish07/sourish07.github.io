import Head from './head';
import Header from './header';
import styles from '@/styles/blog/Blog.module.css';
import Footer from '@/components/blog/footer';
import Script from 'next/script';
export default function Layout({ children, title }) {
    return (
        <>
            <Head title={title} >
                {/* <link rel="canonical" href="https://www.sourish.dev/blog" /> */}
                <script>{`
                    var root = document.querySelector(":root");
                    root.style.setProperty('--background-color', '#FFF');
                    root.style.setProperty('--text-color', '#000');
                    root.style.setProperty('--gray', '#FFF');
                    console.log("HELLO");
                `}</script>

                <style>
                    {`
                        * {
                            scroll-behavior: auto !important;
                        }
                        ::-webkit-scrollbar-thumb {
                            background: var(--light-gray) !important;
                          }
                    `}
                </style>
                {/* <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script> */}
                <link rel="stylesheet" prefetch href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"/>
            </Head>
            <Header />
            <main style={{ padding: "30px 0 0 0" }}>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </main>
            <hr />
            <div className={styles.wrapper}>
                <Footer />
            </div>
        </>
    )
}