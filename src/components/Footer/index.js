import React from "react";
// Import styles
import { Wrapper, Content } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
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
