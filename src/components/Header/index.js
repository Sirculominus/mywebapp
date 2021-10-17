import React from "react";
// Styles
import { Wrapper, Content, Text, HamburgerMenu } from "./Header.styles";
// Icons
import { HiOutlineMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
// Routes
import { Link } from "react-router-dom";

const Header = ({
  hamburgerOpen,
  handleToggle,
  handleToggleDarkMode,
  darkMode,
  handleCloseHamburger,
}) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Content hamburgerOpen={hamburgerOpen}>
        <Text>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={handleCloseHamburger}
          >
            <h2>My portfolio</h2>
          </Link>
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
          <HamburgerMenu darkMode={darkMode}>
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

              <Link
                to="/donation"
                style={{ textDecoration: "none" }}
                onClick={handleToggle}
              >
                <li className="active">Donation</li>
              </Link>
            </ul>
            <ul>
              <li>
                <strong>Coming:</strong>
              </li>
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
