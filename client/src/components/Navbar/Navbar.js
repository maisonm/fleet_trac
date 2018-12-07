import React from "react";
import styled, { keyframes } from "styled-components";

//Styles
import { headShake } from "react-animations";

//Assets
import Avatar from "./assets/avatar.svg";
import OpenArrow from "./assets/open_arrow.svg";

//Components
import NavbarNotifictions from "../Notifications/NavbarNotifications/NavbarNotifications";

const shake = keyframes`${headShake}`;

const borderStyle = "solid 1.5px #e2e4e9";

const NavbarContainer = styled.div`
  border-bottom: ${borderStyle};
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: relative;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-right: ${borderStyle};
  position: absolute;
  left: 0;
`;

const UserDropdown = styled.div`
  width: 240px;
  height: 60px;
  border-left: ${borderStyle};
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 0.78em;
  font-weight: 500;
  margin-right: 12px;
  color: #595959;
`;

//Possibly remove
const UserAvatar = styled.img`
  width: 14px;
`;

const OpenUserSettings = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: 0.3s;
  margin-top: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 5px;
  }

  &:hover {
    transform: rotate(90deg);
    transition: 0.3s;
  }
`;

const Notifications = styled.div`
  width: 60px;
  height: 60px;
  border-left: ${borderStyle};
  position: absolute;
  right: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = props => (
  <NavbarContainer>
    <Logo />
    <Notifications>
      <NavbarNotifictions />
    </Notifications>
    <UserDropdown>
      <UserName> Express Maintenance </UserName>
      <OpenUserSettings>
        {/* Add a user settings panel component here that is toggles on and off by clicking the open arrow */}
        <img src={OpenArrow} alt="menu drop down arrow" />
      </OpenUserSettings>
    </UserDropdown>
  </NavbarContainer>
);

export default Navbar;
