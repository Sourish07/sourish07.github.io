import css from "styled-jsx/css";

export default css.global`

@font-face {
  font-family: "Cascadia Code";
  src: url("/blogAssets/CascadiaCode.ttf") format("truetype");
  font-weight: 350;
}

code {
  font-family: "Cascadia Code", monospace;
  counter-reset: line;
}

code span {
  font-style: normal !important;
}

pre > code > .line::before {
  counter-increment: line;
  content: counter(line);
  display: inline-block;
  width: 1rem;
  margin-right: 1rem;
  text-align: right;
  color: gray;
}

[data-rehype-pretty-code-fragment] {
  margin-bottom: 15px;
}

[data-rehype-pretty-code-fragment] pre {
    border-radius: 3px;
}

[data-rehype-pretty-code-fragment] :not(p) > code {
  display: grid;
  min-width: 100%;
  word-break: break-word;
  background-color: transparent;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: black;
  box-decoration-break: clone;
  overflow-x: auto;
}

[data-rehype-pretty-code-fragment] .line {
  padding: 0.25rem 0.5rem;
}

[data-rehype-pretty-code-fragment] .highlighted {
  background-color: rgba(204, 255, 255, 0.1);
}

[data-rehype-pretty-code-fragment] .word {
  border-radius: 0.375rem;
  background-color: rgba(204, 255, 255, 0.1);
  padding: 0.25rem;
}

[data-rehype-pretty-code-title] {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

[data-rehype-pretty-code-title] + pre {
  margin-top: 0;
}

/* Select the code blocks that are not children of pre tags */
:not(pre) > code {
  background-color: #eeeeff !important;
  font-size: 17px;
  padding: 0px 3px;
  border-radius: 3px;
}
`;
