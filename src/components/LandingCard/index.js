import React from "react";
import {
  Wrapper,
  Content,
  Image,
  Left,
  Right,
  List,
  ListItem,
} from "../LandingCard/LandingCard.styles";

const LandingCard = () => {
  return (
    <Wrapper>
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
          </List>
        </Right>
      </Content>
    </Wrapper>
  );
};

export default LandingCard;
