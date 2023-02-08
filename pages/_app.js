import '@/styles/globals.css';
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    return (
        <>
            {
                process.env.VERCEL_ENV === 'production' ? (
                    <>
                        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J796TLFH87" />
                        <Script id="google-analytics">
                            {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-J796TLFH87');
                            `}
                        </Script>
                    </>) : <></>
            }

            <Component {...pageProps} />
        </>
    )
}