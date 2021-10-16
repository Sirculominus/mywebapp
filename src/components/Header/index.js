import React from "react";
// Import styles
import { Wrapper, Content, Text, HamburgerMenu } from "./Header.styles";
// import icon
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = ({ hamburgerOpen, handleToggle }) => {
  return (
    <Wrapper>
      <Content hamburgerOpen={hamburgerOpen}>
        <Text>
          <h2>My portfolio</h2>
        </Text>
        {hamburgerOpen ? (
          <HiX
            style={{ margin: "10px 0 0 0" }}
            size="40"
            onClick={handleToggle}
          />
        ) : (
          <HiOutlineMenu
            style={{ margin: "10px 0 0 0" }}
            size="40"
            onClick={handleToggle}
          />
        )}

        {hamburgerOpen ? (
          <HamburgerMenu>
            <ul>
              <strong>Coming:</strong>
            </ul>
            <ul>Dark mode</ul>
            <ul>Donation</ul>
            <ul>More details of my journey</ul>
            <ul>Social functions</ul>
          </HamburgerMenu>
        ) : (
          <></>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
