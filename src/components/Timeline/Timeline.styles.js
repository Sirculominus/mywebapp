import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) =>
    props.darkMode
      ? "radial-gradient(circle, rgba(67,67,68,0.8813900560224089) 5%, rgba(67,67,68,1) 25%, rgba(67,67,68,1) 100%)"
      : "radial-gradient(ellipse at center,rgba(255, 255, 255, 1) 0%,rgba(229, 229, 229, 1) 100%)"};

  border-radius: 30px;
  font-family: Helvetica, sans-serif;
  position: relative;
  margin: 30px 30px;
  box-sizing: border-box;
  animation: animate 2s;
  padding-bottom: 50px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  transform: ${({ scrollPercentage }) =>
    scrollPercentage > 20 && scrollPercentage < 80 ? "scale(1.02)" : null};

  @keyframes animate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: var(--darkGrey);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  padding: 20px 30px;
  background-color: var(--white);
  position: relative;
  border-radius: 6px;
  background: ${(props) =>
    props.darkMode
      ? "radial-gradient(circle, rgba(45,45,45,0.8813900560224089) 0%, rgba(41,41,41,1) 84%, rgba(41,41,41,1) 100%)"
      : "rgb(175, 175, 175)"};

  li {
    list-style-type: square;
    margin: 7px 0;
  }

  div {
    text-align: center;
  }
`;

export const Box = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin: 100px 0 100px 0;

  ${({ position }) => {
    if (position === "0") return `left: 0;`;
  }}

  ${({ position }) => {
    if (position === "50") return `left: 50%;`;
  }}

  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    border: medium solid rgb(175, 175, 175);

    ${({ position }) => {
      if (position === "0")
        return `
          right: 30px;
          border-width: 10px 0 10px 10px;`;
    }}

    ${({ position }) => {
      if (position === "50")
        return `
          left: 30px;
          border-width: 10px 10px 10px 0;`;
    }}

    ${({ position, darkMode }) => {
      if (position === "0" && !darkMode)
        return `
          border-color: transparent transparent transparent rgb(175,175,175);`;
    }}

    ${({ position, darkMode }) => {
      if (position === "0" && darkMode)
        return `
          border-color: transparent transparent transparent rgba(41,41,41,1);`;
    }}

    ${({ position, darkMode }) => {
      if (position === "50" && !darkMode)
        return `
          border-color: transparent rgb(175,175,175) transparent transparent;`;
    }}

        ${({ position, darkMode }) => {
      if (position === "50" && darkMode)
        return `
          border-color: transparent rgba(41,41,41,1) transparent transparent;`;
    }}
  }

  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: ${(props) =>
      props.darkMode ? "var(--black)" : "var(--lightGrey)"};
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;

    ${({ position }) => {
      if (position === "50") return `left: -16px;`;
    }}
  }
`;

export const Year = styled.div`
  height: auto;
  width: 100%;
  position: absolute;

  h1 {
    margin-top: 14px;
    width: 50%;

    ${({ position }) => {
      if (position === "0")
        return `
          float: right;
          padding-left: 30px;
        `;
    }};

    ${({ position }) => {
      if (position === "50")
        return `
          float: left;
          padding-right: 30px;
          text-align: right;
        `;
    }};
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 30px;
`;
