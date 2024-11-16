import postStyles from "@/styles/blog/Post.module.css";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from 'remark-parse';
import remarkRehype from "remark-rehype";
import useSWR from 'swr';
import { unified } from 'unified';

async function fetchNotes() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
    const documentId = "1Z3lUrw3VOf7TfE0CEiBEfCNrNKAOu-sQmt0xITShgEw";
    const apiUrl = `https://www.googleapis.com/drive/v3/files/${documentId}/export?mimeType=text/markdown&key=${API_KEY}`;

    // Make request
    const res = await fetch(apiUrl);
    const data = await res.text();
    const content = await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(data);
    return content;
}

export default function Hiatus() {
    const { data: notes, error } = useSWR("fetchNotes", fetchNotes);

    return (
        <>
            {!notes && (
                <div style={{ width: "100%" }}>
                    <SkeletonLoaderPiece height="50px" />
                    <SkeletonLoaderPiece width="20%" alignSelf="flex-end" />
                    <SkeletonLoaderPiece />
                    <SkeletonLoaderPiece width="20%" alignSelf="flex-end" />
                </div>
            )}
            {notes && <div className={postStyles.content} dangerouslySetInnerHTML={{ __html: notes }} style={{ width: "100%" }}></div>}
            {error && <Error />}
        </>
    );
}

function Error() {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ fontSize: "35px", marginBottom: "10px", textAlign: "center", color: "red" }}>- Failed to fetch document -</div>
        </div>
    );
}

function SkeletonLoaderPiece({ width = '100%', height = '30px', borderRadius = '5px', alignSelf = 'flex-start' }) {
    const style = {
        width,
        height,
        borderRadius,
        alignSelf,
        backgroundColor: '#f0f0f0',
        margin: '20px 0',
        animation: 'flash 1.5s ease-in-out infinite',
    };

    return (
        <div style={style}></div>
    )
};