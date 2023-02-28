import "@fontsource/pt-mono";
import 'katex/dist/katex.min.css';

import Footer from '@/components/blog/footer';
import styles from '@/styles/blog/Blog.module.css';
import Header from './header';

export default function Layout({ children, title }) {
    return (
        <>
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