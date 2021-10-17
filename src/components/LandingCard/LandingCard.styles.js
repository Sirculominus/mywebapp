import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) =>
    props.darkMode
      ? "radial-gradient(circle, rgba(67,67,68,0.8813900560224089) 5%, rgba(67,67,68,1) 25%, rgba(67,67,68,1) 100%)"
      : "radial-gradient(ellipse at center,rgba(255, 255, 255, 1) 0%,rgba(229, 229, 229, 1) 100%)"};
  margin: 0 30px;
  background-size: 100%, cover;
  background-position: center;
  border-radius: 30px;
  animation: animateLandingCard 2s;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
  }

  @keyframes animateLandingCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  height: 800px;
`;

export const Image = styled.img`
  display: block;
  width: 85%;
  height: 700px;
  object-fit: cover;
  border-radius: 15px;
  margin: 30px;
`;

export const Left = styled.div`
  float: left;
  width: 50%;
  height: 100%;
`;

export const Right = styled.div`
  float: right;
  width: 50%;
  height: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin: 90px 0;

  a {
    color: inherit;
  }

  svg {
    margin: 0 20px 0 0;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
