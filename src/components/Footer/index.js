import React from "react";
// Styles
import { Wrapper, Content } from "./Footer.styles";

const Footer = ({ darkMode }) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Content darkMode={darkMode}>
        <p>
          Written by me in{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React
          </a>
          . Hosted on{" "}
          <a
            href="https://www.mongodb.com/realm"
            target="_blank"
            rel="noreferrer noopener"
          >
            MongoDB Realm
          </a>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
