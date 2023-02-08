import Head from 'next/head';
import Script from 'next/script'

export default function SkHead({ title, children }) {
    return (
        <Head>          
            <title>{title}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta property="og:site_name" content="sourish.dev" />
            <meta property="og:title" content="Sourish's Personal Website" />
            <meta property="og:description" content="Check out my website for a showcase of my skills and projects!" />
            <meta property="og:image" content="resources/images/link-thumbnail.webp" />
            <meta name="description" content="Check out my website for a showcase of my skills and projects!" />

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