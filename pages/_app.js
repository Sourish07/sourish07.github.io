import '@/styles/globals.css';
import { Lato } from '@next/font/google';

const lato = Lato({
    weight: ['100', '300'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
            html {
              font-family: ${lato.style.fontFamily};
              font-weight: 300;
            }
          `}</style>
            <Component {...pageProps} />
        </>
    )
}