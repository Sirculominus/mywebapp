import styled from "styled-components";

export const Body = styled.div`
  filter: ${(props) => (props.hamburgerOpen ? "blur(4px)" : "blur(0px)")};
  position: relative;
  margin: 30px 30px;
  min-height: 100%;
  margin-top: 150px;
`;

export const Wrapper = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
