import { Error, SkeletonLoaderBlock } from "@/dynamic-content/skeletonLoader";
import postStyles from "@/styles/blog/Post.module.css";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from 'remark-parse';
import remarkRehype from "remark-rehype";
import useSWR from 'swr';
import { unified } from 'unified';

async function fetchNotes(documentId) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const apiUrl = `https://www.googleapis.com/drive/v3/files/${documentId}/export?mimeType=text/markdown&key=${API_KEY}`;

    // Make request
    const res = await fetch(apiUrl);
    const data = await res.text();
    const content = await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(data);
    return content;
}

export default function GoogleDoc({ documentId }) {
    const { data: notes, error } = useSWR("fetchNotes", () => fetchNotes(documentId));

    return (
        <>
            {!notes && (
                <div style={{ width: "100%" }}>
                    <SkeletonLoaderBlock />
                </div>
            )}
            {notes && <div className={postStyles.content} dangerouslySetInnerHTML={{ __html: notes }} style={{ width: "100%" }}></div>}
            {error && <Error message={`Failed to fetch document: ${error}`} />}
        </>
    );
}
