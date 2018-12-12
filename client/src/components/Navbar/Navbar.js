import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

//Styles
import { NavbarContainer, Logo, Notifications } from "./styles";

//Components
import NavbarNotifictions from "./NavbarNotifications/NavbarNotifications";
import DateTime from "./DateTime/DateTime";
import UserDropdown from "./UserDropdown/UserDropdown";

//Assets
import AltLogo from "./assets/logo_alt.svg";

const Navbar = props => (
  <NavbarContainer>
    <Logo>
      <Link to="/">
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="nav-logo"
        >
          <img src={AltLogo} alt="alternate fleet trac logo" />
        </CSSTransition>
      </Link>
    </Logo>
    <Notifications>
      <NavbarNotifictions />
    </Notifications>
    <DateTime />
    <UserDropdown />
  </NavbarContainer>
);

export default Navbar;
