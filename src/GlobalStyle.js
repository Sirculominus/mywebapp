import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --black: #000000;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: auto;
    padding: 0;
    background-color: ${(props) =>
      props.darkMode ? "var(--black)" : "var(--white)"};
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"};
    }

    h2 {
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    h4 {
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    p {
      font-size: 1rem;
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"};
    }

    li {
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    ul {
      color: ${(props) => (props.darkMode ? "var(--white)" : "var(--black)")}
    }
  }
`;
