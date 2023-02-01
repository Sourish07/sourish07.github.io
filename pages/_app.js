import '@/styles/globals.css';
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";


export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
            html {
              font-family: "Lato", sans-serif;
              font-weight: 300;
            }
          `}</style>
            <Component {...pageProps} />
        </>
    )
}