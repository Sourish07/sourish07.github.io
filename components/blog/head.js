import Head from 'next/head';
import Script from 'next/script'

export default function BlogHead({ title, children }) {
    return (
        <Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J796TLFH87" />
            <Script>
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-J796TLFH87');
                    `}
            </Script>

            <title>{title}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta property="og:site_name" content="sourish.dev/blog" />
            <meta property="og:title" content="Sourish Shares" />
            <meta property="og:description" content="Here, I write about various topics about CS, the broader tech industry, and life." />
            <meta property="og:image" content="resources/images/link-thumbnail.webp" />
            <meta name="description" content="Here, I write about various topics about CS, the broader tech industry, and life." />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            {children}
        </Head>
    )
}