import Head from 'next/head';

export default function SkHead({ title, children }) {
    let thumbnailPath = "/resources/images/link-thumbnail.webp";
    return (
        <Head>
            <title>{title}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta property="site_name" content="sourish.dev" key='site_name'/>
            <meta property="title" content="Sourish's Personal Website" key='title'/>
            <meta property="description" content="Check out my website for a showcase of my skills and projects!" key='description'/>
            <meta property="image" content={thumbnailPath} key='image'/>
            
            <meta property="og:site_name" content="sourish.dev" />
            <meta property="og:title" content="Sourish's Personal Website" />
            <meta property="og:description" content="Check out my website for a showcase of my skills and projects!" />
            <meta property="og:image" content={thumbnailPath} />

            <meta name="theme-color" content="#111111" />
            
            <link rel="canonical" href="https://www.sourish.dev" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            {children}
        </Head>
    )
}