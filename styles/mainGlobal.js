import css from "styled-jsx/css";

/* Styling for all components on main page */
export default css.global`

:root {
  --background-color: #151515;
  --text-color: #fff;
}

/* Scroll bar */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--red);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--dark-red);
}



body {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  -webkit-text-size-adjust: 100%;
}

html,
body {
  background-color: var(--background-color);
  color: var(--text-color);
  text-rendering: optimizeLegibility;
  max-width: 100vw;
  overflow-x: hidden !important;
  position: relative;
}

section {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  padding: 0 10px;
  width: clamp(375px, 95vw, 1100px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

section:nth-child(odd) {
  background-color: var(--background-color);
}

section:nth-child(even) {
  background-color: var(--background-color-2);
}

hr {
  width: 95%;
  margin: 20px auto;
  background-color: var(--gray);
  border-color: var(--gray);
  color: var(--gray);
}

p {
  font-size: 1.1rem;
}



/* Landscape Phones */
@media (orientation: landscape) and (min-width: 576px) and (max-width: 767px) {
  #hero .section {
    flex-direction: row;
  }

  #sourish-pic {
    height: 75vh;
    margin-right: 2px;
  }

  #sidebarContent {
    padding-top: 10px;
  }
}

/* Tablets and Desktops */
@media (min-width: 768px) {
  #hero {
    background-image: linear-gradient(
        rgba(33, 37, 41, 0.7),
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url("/resources/images/coverphoto.webp");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
  }
}
`;
