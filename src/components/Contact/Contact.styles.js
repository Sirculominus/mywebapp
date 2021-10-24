import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) =>
    props.darkMode
      ? "radial-gradient(circle, rgba(67,67,68,0.8813900560224089) 5%, rgba(67,67,68,1) 25%, rgba(67,67,68,1) 100%)"
      : "radial-gradient(ellipse at center,rgba(255, 255, 255, 1) 0%,rgba(229, 229, 229, 1) 100%)"};
  margin: 30px 30px 250px;
  padding: 0 0 30px 0;
  background-size: 100%, cover;
  background-position: center;
  border-radius: 30px;
  animation: animateLandingCard 2s;
  height: auto;
  position: relative;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);

  transform: ${({ scrollPercentage }) =>
    scrollPercentage > 80 ? "scale(1.02)" : null};

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
  h1 {
    text-align: center;
    padding-top: 30px;
  }

  form {
    text-align: center;
  }

  input {
    line-height: 2em;
    width: 50%;
    margin: 0 50px 20px 50px;
    border-radius: 30px;
    display: inline-block;
    border: 1px solid #ccc;
    @media (max-width: 1600px) {
      font-size: 40px;
      width: 80%;
    }
  }

  input[type="text"] {
    text-indent: 20px;
  }

  textarea {
    text-indent: 20px;
    border-radius: 30px;
    height: 6em;
    width: 50%;
    margin: 0 50px 20px 50px;
    @media (max-width: 1600px) {
      font-size: 40px;
      width: 80%;
    }
  }

  input[type="submit"] {
    width: 50%;
    background-color: #4caf50;
    color: var(--white);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
    }
    @media (max-width: 1600px) {
      width: 80%;
    }
  }

  button {
    line-height: 2em;
    width: 50%;
    margin: auto;
    border-radius: 6px;
    display: inline-block;
    border: 1px solid #ccc;
    position: relative;
    justify-content: center;
    display: flex;
  }
`;

export const ResponseMessage = styled.h3`
  text-align: center;
  padding-top: 50px;
`;
