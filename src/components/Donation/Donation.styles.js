import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) =>
    props.darkMode
      ? "radial-gradient(circle, rgba(67,67,68,0.8813900560224089) 5%, rgba(67,67,68,1) 25%, rgba(67,67,68,1) 100%)"
      : "radial-gradient(ellipse at center,rgba(255, 255, 255, 1) 0%,rgba(229, 229, 229, 1) 100%)"};
  margin: 30px 30px 100px;
  padding: 0 0 40px 0;
  background-size: 100%, cover;
  background-position: center;
  border-radius: 30px;
  animation: animateLandingCard 2s;
  min-height: 500px;
  max-height: 1000px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);

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
  flex-direction: column;
  max-width: var(--maxWidth);
  padding: 20px 150px;
  margin: 0 auto;
  height: auto;
  width: 100%;

  h1 {
    text-align: center;
    padding: 30px 0 20px 0;
  }

  form {
    text-align: center;
  }

  input {
    line-height: 2em;
    width: 50%;
    margin: 0 50px 20px 50px;
    border-radius: 6px;
    display: inline-block;
    border: 1px solid #ccc;
  }

  input[type="text"] {
    text-indent: 20px;
  }

  textarea {
    height: 6em;
    width: 50%;
    margin: 0 50px 20px 50px;
  }

  input[type="submit"] {
    width: 50%;
    background-color: #4caf50;
    color: var(--white);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
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

  div {
    text-align: center;
  }
  .icon {
    padding-top: 40px;
  }

  p {
    text-align: center;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 20px;
  position: relative;

  div {
    position: relative;
    background-color: #ffabab;
    width: auto;
    margin: auto;
    border-radius: 6px;
    min-height: 50px;
    max-height: 500px;
  }

  p {
    position: relative;
    color: red;
    font-weight: bold;
    width: 100%;
    margin: auto 0;
    padding: 20px 0;
  }
`;

export const ResponseMessage = styled.div`
  position: relative;
  text-align: center;

  h1 {
    position: absolute;
    width: 100%;
    top: 100px;
  }
`;

export const Filler = styled.div``;
