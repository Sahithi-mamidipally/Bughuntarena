import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="nav-container">
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{ backgroundColor: "#333" }}
        container={false}
      >
        <Container className="d-flex align-items-center">
          <NavbarBrand
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://github.com/Sahithi-mamidipally/CyberEscape_UI/blob/main/CER/logo.jpeg?raw=true"
              alt="Logo"
              width="60"
              style={{
                marginRight: "10px",
                borderRadius: "50%",
                backgroundColor: "transparent",
              }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
              {!isAuthenticated ? (
                <>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/features"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      onClick={() =>
                        loginWithRedirect({
                          screen_hint: "signup", // Redirect to the signup page
                        })
                      }
                    >
                      Create Account
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/features"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/leaderboard"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Leaderboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/challenges"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Challenges
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/resources"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Resources
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav navbar>
              {!isAuthenticated ? (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="link"
                    className="text-white"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in →
                  </Button>
                </NavItem>
              ) : (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
