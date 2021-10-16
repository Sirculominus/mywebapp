import React from "react";
// Styles
import { Wrapper, Content, Text, HamburgerMenu } from "./Header.styles";
// Icons
import { HiOutlineMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { Left } from "../LandingCard/LandingCard.styles";

const Header = ({
  hamburgerOpen,
  handleToggle,
  handleToggleDarkMode,
  darkMode,
}) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Content hamburgerOpen={hamburgerOpen}>
        <Text>
          <h2>My portfolio</h2>
        </Text>
        {hamburgerOpen ? (
          <HiX
            style={
              darkMode
                ? { margin: "10px 0 0 0", color: "var(--white)" }
                : { margin: "10px 0 0 0", color: "var(--black)" }
            }
            size="40"
            onClick={handleToggle}
          />
        ) : (
          <HiOutlineMenu
            style={
              darkMode
                ? { margin: "10px 0 0 0", color: "var(--white)" }
                : { margin: "10px 0 0 0", color: "var(--black)" }
            }
            size="40"
            onClick={handleToggle}
          />
        )}
        {hamburgerOpen ? (
          <HamburgerMenu>
            <ul>
              {darkMode ? (
                <HiSun
                  onClick={handleToggleDarkMode}
                  style={{ color: "var(--white)", float: "right" }}
                  size="40"
                />
              ) : (
                <HiMoon
                  onClick={handleToggleDarkMode}
                  style={{ color: "var(--black)", float: "right" }}
                  size="40"
                />
              )}

              <li>
                <strong>Coming:</strong>
              </li>
              <li>Donation</li>
              <li>More details of my journey</li>
              <li>Social functions</li>
            </ul>
          </HamburgerMenu>
        ) : (
          <></>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
