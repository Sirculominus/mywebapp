import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
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

  button {
    height: 50px;
  }
`;

export const Text = styled.div``;

export const HamburgerMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 100px;
`;
