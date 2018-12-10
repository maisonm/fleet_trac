import React from "react";
import { Link } from "react-router-dom";

//Styles
import { NavbarContainer, Logo, Notifications } from "./styles";

//Components
import NavbarNotifictions from "../Notifications/NavbarNotifications/NavbarNotifications";
import DateTime from "./DateTime/DateTime";
import UserDropdown from "./UserDropdown/UserDropdown";

//Assets
import AltLogo from "./assets/logo_alt.svg";

const Navbar = props => (
  <NavbarContainer>
    <Logo>
      <Link to="/">
        <img src={AltLogo} alt="alternate fleet trac logo" />{" "}
      </Link>
    </Logo>
    <DateTime />
    <Notifications>
      <NavbarNotifictions />
    </Notifications>
    <UserDropdown />
  </NavbarContainer>
);

export default Navbar;
