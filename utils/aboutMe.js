import fs from 'fs';
import path from 'path';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

// Called from pages\index.js to obtain the text for the About Me section
export async function AboutMeText() {
    const fullPath = path.join(process.cwd(), 'utils/aboutMe.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(fileContents);
    return processedContent.toString();
}