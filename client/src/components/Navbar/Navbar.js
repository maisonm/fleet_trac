import React from "react";

//Styles
import { NavbarContainer, Logo, Notifications } from "./styles";

//Components
import NavbarNotifictions from "../Notifications/NavbarNotifications/NavbarNotifications";
import DateTime from "./DateTime/DateTime";
import UserDropdown from "./UserDropdown/UserDropdown";

const Navbar = props => (
  <NavbarContainer>
    <Logo />
    <DateTime />
    <Notifications>
      <NavbarNotifictions />
    </Notifications>
    <UserDropdown />
  </NavbarContainer>
);

export default Navbar;
