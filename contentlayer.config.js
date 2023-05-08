import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeHighlight from "rehype-highlight";


export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "*.mdx", // Posts go in the root of the content folder
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    subheader: {
      type: "string",
      description: "The subheader of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true,
    },
    multilevelarticle: {
      type: "boolean",
      description: "Whether the post has multiple technical levels",
      required: false,
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.category}/${post._raw.flattenedPath}`,
    },
    categoryUrl: {
      type: "string",
      resolve: (post) => `/blog/${post.category}`,
    },
    id: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

const options = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
 
  // Keep the background or use a custom background color?
  keepBackground: true,
 
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: "text", value: " "}];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ["word"];
  },
};

export const Text = defineDocumentType(() => ({
  name: "Text",
  filePathPattern: "text/*.md",
  computedFields: {
    title: {
      type: "string",
      resolve: (text) => text._id.split("/")[1].split(".")[0],
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Text],
  mdx: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options], rehypeKatex, rehypeHighlight],
  },
})

  