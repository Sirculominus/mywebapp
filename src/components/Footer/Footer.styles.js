import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.darkMode ? "var(--black)" : "var(--white)"};
  bottom: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 2;
  height: fit-content;
  border-radius: 30px;
`;

export const Content = styled.div`
  color: var(--black);

  a {
    color: ${({ darkMode }) => (darkMode ? "red" : "blue")};
  }
`;
