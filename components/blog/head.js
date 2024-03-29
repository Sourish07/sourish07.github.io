import Head from 'next/head';

export default function BlogHead({ title, description, siteName, children }) {
    let blogThumbnailPath = "/resources/images/blog-thumbnail.webp";
    return (
        <Head>
            <title>{title}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta property="site_name" content={siteName} key='site_name' />
            <meta property="title" content={title} key='title' />
            <meta property="description" content={description} key='description' />
            <meta property="image" content={blogThumbnailPath} key='image' />

            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={blogThumbnailPath} />

            <link rel="canonical" href={`https://www.${siteName}`} key="canonical" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            
            <meta name="theme-color" content="#ffffff" />
            {children}
        </Head>
    )
}