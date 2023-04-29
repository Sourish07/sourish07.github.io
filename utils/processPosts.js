import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import { unified } from 'unified';

const postsDirectory = path.join(process.cwd(), 'posts');

// Required for getStaticPaths in pages/blog/[category]/index.js
// [{params: {category: '...'}, ...]
export function getAllPostCategories() {
    const fileNames = fs.readdirSync(postsDirectory);
    let categories = new Set();
    fileNames.forEach((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        categories.add(matterResult.data.category);
    });

    let categoriesArray = Array.from(categories);
    return categoriesArray.map((category) => {
        return {
            params: {
                category: category,
            },
        };
    });
}

// Returns an array of all posts in a given category sorted by date
export function getPostsInCategory(category) {
    const fileNames = fs.readdirSync(postsDirectory);
    let posts = [];
    fileNames.forEach((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        if (matterResult.data.category === category) {
            posts.push({
                id: fileName.replace(/\.md$/, ''),
                ...matterResult.data,
            });
        }
    });

    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// Returns an array of all posts sorted by date
export function getSortedPostsData() {
    // Get file names in posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        matterResult.data.date = matterResult.data.date.toString();
        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// Returns an array of file names in the posts directory
// Called from getStaticPaths in pages/blog/[id].js
// Return format is an array of objects with a params property
// The params property is an object with an id property [{params: {id: '...'}, ...]
export function getAllPostIds() {
    // Get file names in posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
                category: matterResult.data.category,
            },
        };
    });
}

// Given a post id, return the full markdown for that post
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Use unified to process the markdown content, then compile it to HTML
    // remark processes markdown and rehype processes HTML
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeRaw)
        .use(rehypeKatex)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();
    
    // If the post has a cspost tag, split the content into two parts
    if (matterResult.data.cspost) {
        const content = contentHtml.split("<p>split</p>");
        const nonTechnicalContent = content[0];
        const technicalContent = content[1];
        return {
            id,
            nonTechnicalContent, 
            technicalContent,
            ...matterResult.data,
        };
    }

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}