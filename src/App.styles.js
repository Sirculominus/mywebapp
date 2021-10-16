import styled from "styled-components";

export const Body = styled.div`
  filter: ${(props) => (props.hamburgerOpen ? "blur(4px)" : "blur(0px)")};
  position: relative;
  top: 150px;
  max-width: 1700px;
  margin: auto;
`;
