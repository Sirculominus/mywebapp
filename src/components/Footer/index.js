import React from "react";
// Styles
import { Wrapper, Content } from "./Footer.styles";

const Footer = ({ darkMode }) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Content>
        <p>
          Written by me in <a href="https://reactjs.org/">React</a>. Hosted on{" "}
          <a href="https://www.mongodb.com/realm">MongoDB Realm</a>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
