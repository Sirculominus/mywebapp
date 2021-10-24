import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1200px;
    --white: #fff;
    --black: #000000;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontVeryBig: 2rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    @media (max-width: 1600px) {
    --fontSuperBig: 3rem;
    --fontVeryBig: 2.5rem;
    --fontBig: 2.0rem;
    --fontMed: 1.5rem;
    --fontSmall: 1.2rem;
    }
  }


  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  html {
    min-height: 100vh;
  }

  body {
    margin: auto;
    padding: 0;
    background-color: ${(props) =>
      props.darkMode ? "var(--black)" : "var(--white)"};
    min-width: 900px;
  max-width: 1200px;
    position: relative;
    min-height: 100vh;

      @media (max-width: 1600px) {
        max-width: 1600px;
      }
    
    h1 {
      font-size: var(--fontVeryBig);
      font-weight: 600;
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"};
    }

    h2 {
      font-size: var(--fontBig);
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    h3 {
      font-size: var(--fontMed);
      font-weight: 600;
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    h4 {
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    p {
      font-size: var(--fontSmall);
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"};
    }

    li {
      font-size: var(--fontSmall);
      color: ${(props) =>
        props.darkMode ? "var(--lightGrey)" : "var(--black)"}
    }

    ul {
      color: ${(props) => (props.darkMode ? "var(--white)" : "var(--black)")}
    }
  }
`;
