import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => (props.darkMode ? "var(--black)" : "var(--white)")};
  padding: 0 20px;
  position: fixed;
  z-index: 10;
  width: 100%;
  margin: auto;
  border-radius: 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  height: ${(props) => (props.hamburgerOpen ? "500px" : "100px")};
  transition: height 0.5s;
  position: relative;

  @media (max-width: 1600px) {
    height: ${(props) => (props.hamburgerOpen ? "560px" : "120px")};
  }

  button {
    height: 50px;
  }

  svg {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Text = styled.div`
  text-align: center; ;
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 100px;

  ul {
    margin: 0 0 100px 0;

    li.active {
      border-color: ${({ darkMode }) =>
        darkMode ? "var(--white)" : "var(--black)"};
      border-style: solid;
      border-width: 1px;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  li {
    width: 300px;
    padding: 10px 0 10px 0;
    margin: 0 auto;
    list-style-type: none;
    text-align: center;
  }

  svg {
    &:hover {
      transform: scale(1.2);
    }
  }
`;
