import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.darkMode ? "var(--darkGrey)" : "var(--white)"};
  bottom: auto;
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 2;
`;

export const Content = styled.div`
  color: var(--black);
`;
