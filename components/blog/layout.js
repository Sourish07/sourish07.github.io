import "@fontsource/pt-mono";
import 'katex/dist/katex.min.css';

import blogGlobal from '@/styles/blogGlobal';
import Footer from '@/components/blog/footer';
import styles from '@/styles/blog/Blog.module.css';
import Header from './header';

export default function Layout({ children, title }) {
    return (
        <>
            <Header />
            <style jsx>{blogGlobal}</style>
            <main style={{ padding: "30px 0 0 0" }}>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </main>

            <Footer />
        </>
    )
}