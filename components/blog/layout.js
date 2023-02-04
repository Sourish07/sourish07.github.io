import Head from './head';
import Header from './header';
import styles from '@/styles/blog/Blog.module.css';
import Footer from '@/components/blog/footer';
import 'katex/dist/katex.min.css';
import "@fontsource/pt-mono";

export default function Layout({ children, title }) {
    return (
        <>
            <Head title={title} >
                <style>
                    {`
                        <!-- Global CSS styles for blog -->
                        
                        * {
                            scroll-behavior: auto !important;
                        }
                        
                        :root {
                            --background-color: #FFF !important;
                            --text-color: #000 !important;
                        }

                        hr {
                            border: 1px solid #ccc !important;
                            width: -webkit-calc(1000px - (30px * 2)) !important;
                            max-width: 95vw !important;
                        }

                        p a {
                            color: var(--red) !important;
                            text-decoration: underline !important;
                        }
                    `}
                </style>
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