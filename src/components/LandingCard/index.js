import React from "react";
// Styles
import {
  Wrapper,
  Content,
  Image,
  Left,
  Right,
  List,
  ListItem,
} from "../LandingCard/LandingCard.styles";
// Icons
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LandingCard = ({ darkMode, scrollPercentage, windowSize }) => {
  return (
    <Wrapper darkMode={darkMode} scrollPercentage={scrollPercentage}>
      <Content>
        <Left>
          <Image src="/images/portrait.jpg" alt="Portrait" />
        </Left>
        <Right>
          <List>
            <ListItem>
              <h1>Sindre Johnsen</h1>
            </ListItem>
            <ListItem>
              <h3>Position</h3>
              <p>System Consultant</p>
            </ListItem>
            <ListItem>
              <h3>Company</h3>
              <p>Dotnet Internals</p>
            </ListItem>
            <ListItem>
              <h3>Interests</h3>
              <p>Computers, coding, blockchain and new tech</p>
            </ListItem>
            <ListItem>
              <a
                href="https://www.linkedin.com/in/sindre-johnsen-341464172/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin size={windowSize.width < 1600 ? "60" : "40"} />
              </a>
              <a
                href="https://github.com/Sirculominus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithubSquare size={windowSize.width < 1600 ? "60" : "40"} />
              </a>
              <a href="mailto:sindus@hotmail.com">
                <MdEmail size={windowSize.width < 1600 ? "60" : "40"} />
              </a>
            </ListItem>
          </List>
        </Right>
      </Content>
    </Wrapper>
  );
};

export default LandingCard;
