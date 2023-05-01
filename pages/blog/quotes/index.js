import BlogHead from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import styles from "@/styles/blog/Blog.module.css";
import { google } from 'googleapis';

// Need to use unresricted API KEY because the referer value in header is not set when called from server
// This should be okay because the key isn't visible from the client side
export async function getStaticProps() {
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
    const FILE_ID = process.env.GOOGLE_SHEET_ID;

    const sheetName = 'quotes';
    const range = 'A1:B10';
    
    const sheets = google.sheets({ version: 'v4', auth: API_KEY });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: FILE_ID,
        range: `${sheetName}!${range}`,
    });
    const data = response.data;

    const keys = data.values[0];
    const quotes = data.values.slice(1).map((row) => {
        return row.reduce((obj, value, index) => {
            obj[keys[index].toLowerCase()] = value;
            return obj;
        }, {});
    });
    return {
        props: {
            quotes
        }
    };
}

export default function Quotes({ quotes }) {
    return (
        <>
            <BlogHead title="Sourish's Quotes" >
                <link rel="canonical" href="https://www.sourish.dev/quotes" />
            </BlogHead>
            <Layout>
                <h1 className={styles.pageTitle}>Quotes</h1>
                <div className={styles.subheader}>A collection of quotes that I've found interesting or inspiring.</div>
                <div className={styles.content}>
                    {quotes ? quotes.map((quote, index) => {
                        return (
                            <div key={index} className={styles.quote}>
                                <div className={styles.quoteText}>{quote.quote}</div>
                                <div className={styles.quoteAuthor}>{quote.author}</div>
                            </div>
                        );
                    }
                    ) : <div>Fetching quotes...</div>}
                </div>
            </Layout>
        </>
    );
}