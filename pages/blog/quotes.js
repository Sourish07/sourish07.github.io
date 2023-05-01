import BlogHead from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import styles from "@/styles/blog/Blog.module.css";
// import { google } from 'googleapis';
import useSWR from 'swr';

async function fetchQuotes() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const FILE_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

    const sheetName = 'quotes';
    const range = 'A1:B10';
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${FILE_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

    // Make request
    const res = await fetch(apiUrl);
    const data = await res.json();

    const keys = data.values[0];
    const quotes = data.values.slice(1).map((row) => {
        return row.reduce((obj, value, index) => {
            obj[keys[index].toLowerCase()] = value;
            return obj;
        }, {});
    });
    return quotes;
}

export default function Quotes() {
    const { data: quotes, error } = useSWR("fetchQuotes", fetchQuotes);

    return (
        <>
            <BlogHead title="Sourish's Quotes" >
                <link rel="canonical" href="https://www.sourish.dev/quotes" />
            </BlogHead>
            <Layout>
                <h1 className={styles.pageTitle}>Quotes</h1>
                <div className={styles.subheader}>A collection of quotes that I've found interesting or inspiring.</div>
                <div className={styles.content}>
                    {quotes && !error ? quotes.map((quote, index) => {
                        return (
                            <div key={index} className={styles.quote}>
                                <div className={styles.quoteText}>{quote.quote}</div>
                                <div className={styles.quoteAuthor}>{quote.author}</div>
                            </div>
                        );
                    }
                    ) : <div>Fetching quotes...</div>}
                    {error && <div>Failed to fetch quotes.</div>}
                </div>
            </Layout>
        </>
    );
}