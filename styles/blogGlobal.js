import css from 'styled-jsx/css';
/* Global syling for all blog components */

export default css.global`

:root {
    --background-color: #FFF;
    --text-color: #000;
}

hr {
    border: 1px solid #ccc;
    width: -webkit-calc(1000px - (30px * 2));
    max-width: 95vw;
}

a:hover {
    color: var(--red);
}

p a {
    color: var(--red);
    text-decoration: underline;
}
`;