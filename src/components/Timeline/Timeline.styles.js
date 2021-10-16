import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--lightGrey);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 229, 229, 1) 100%
  );
  border-radius: 30px;
  font-family: Helvetica, sans-serif;
  position: relative;
  margin: 30px 30px;
  box-sizing: border-box;
  animation: animate 2s;
  padding-bottom: 50px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
  }

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
  background: rgb(175, 175, 175);
`;

export const Box = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin: 100px 0 100px 0;

  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: var(--white);
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  ${({ position }) => {
    if (position === "0")
      return `
            left: 0;

            &:before {
                content: " ";
                height: 0;
                position: absolute;
                top: 22px;
                width: 0;
                z-index: 1;
                right: 30px;
                border: medium solid rgb(175,175,175);
                border-width: 10px 0 10px 10px;
                border-color: transparent transparent transparent rgb(175,175,175);
            }
        `;
  }}

  ${({ position }) => {
    if (position === "50")
      return `
            left: 50%;

            &:before {
                content: " ";
                height: 0;
                position: absolute;
                top: 22px;
                width: 0;
                z-index: 1;
                left: 30px;
                border: medium solid rgb(175,175,175);
                border-width: 10px 10px 10px 0;
                border-color: transparent rgb(175,175,175) transparent transparent;
            }

            &:after {
                left: -16px;
            }
        `;
  }}
`;

export const Year = styled.div`
  height: auto;
  width: 100%;
  position: absolute;

  h1 {
    margin-top: 14px;
    ${({ position }) => {
      if (position === "0")
        return `
            float: right;
            width: 50%;
            padding-left: 30px;
            

        `;
    }};

    ${({ position }) => {
      if (position === "50")
        return `
            float: left;
            width: 50%;
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
