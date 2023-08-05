import css from 'styled-jsx/css';
/* Global syling for all blog components */

export default css.global`

:root {
    --background-color: #FFF;
    --text-color: #000;
}

a:hover {
    color: var(--red);
}

p a {
    color: var(--red);
    text-decoration: underline;
}
`;