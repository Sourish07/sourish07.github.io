import BlogHead from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import { SkeletonLoaderPiece, Error } from '@/dynamic-content/skeletonLoader';
import styles from "@/styles/blog/Blog.module.css";
import useSWR from 'swr';

async function fetchQuotes() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const sheetId = "1dh0wJPbDnUAQ7NKElK8KVubQIAf3oawN1_wClPQ8uHg";
    const sheetName = 'quotes';
    const range = 'A1:B500';
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?key=${API_KEY}`;

    // Make request
    const res = await fetch(apiUrl);
    const data = await res.json();

    const keys = data.values[0];
    let quotes = data.values.slice(1).map((row) => {
        return row.reduce((obj, value, index) => {
            obj[keys[index].toLowerCase()] = value;
            return obj;
        }, {});
    });

    quotes.sort((a, b) => {
        if (a.author < b.author) {
            return -1;
        }
        if (a.author > b.author) {
            return 1;
        }
        return 0;
    });

    // Filter quotes that don't have both author and quote
    quotes = quotes.filter((quote) => {
        return quote.author !== '' && quote.quote !== '';
    });

    return quotes;
}

export default function Quotes() {
    const { data: quotes, error } = useSWR("fetchQuotes", fetchQuotes);
    
    return (
        <>
            <BlogHead title="Sourish's Favorite Quotes" >
                <link rel="canonical" href="https://www.sourish.dev/blog/quotes" />
            </BlogHead>
            <Layout>
                <h1 className={styles.pageTitle}>Favorite Quotes</h1>
                <div className={styles.subheader} style={{ marginBottom: "30px" }}>A collection of quotes that I've found interesting or inspiring.</div>
                <div className={styles.wrapper}>
                    {quotes && !error ? quotes.map((quote, index) => (
                        <Quote key={index} quote={quote.quote} author={quote.author} />
                    )) :
                        <SkeletonLoaderQuotes />
                    }
                    {error && <Error message={`Failed to fetch quotes: ${error}`} />}
                </div>
            </Layout>
        </>
    );
}

function Quote({ quote, author }) {
    return (
        <div style={{marginBottom: "30px", display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>{`“${quote}”`}</div>
            <div style={{alignSelf: "flex-end", fontSize: "15px"}}>{` — ${author}`}</div>
        </div>
    );
}

function SkeletonLoaderQuotes() {
    return (
        <div style={{width: "95%", position: "relative", display: "flex", flexDirection: "column"}}>
            <SkeletonLoaderPiece height='30px' />
            <SkeletonLoaderPiece width={"20%"} alignSelf='flex-end'/>
            <SkeletonLoaderPiece />
            <SkeletonLoaderPiece width={"20%"} alignSelf='flex-end'/>
        </div> 
    );
}
