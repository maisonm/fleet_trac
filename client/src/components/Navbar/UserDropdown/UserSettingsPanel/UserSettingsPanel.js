import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  SettingsPanel,
  WelcomeUser,
  LinkContainer
} from "./styles";

//Assets
import SignedInIcon from "./assets/sign-in.svg";
import SignOutIcon from "./assets/sign-out.svg";
import SettingsIcon from "./assets/settings.svg";

//ADD LINKS WHEN THE SETTINGS PAGE IS READY
const UserSettingsPanel = props => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={1000}
    classNames="settings-panel"
  >
  <SettingsPanel isOpen={props.panelOpen}>
    <WelcomeUser>
      <img src={SignedInIcon} alt="user signed in icon" />
      <p>Express Maintenance</p>
    </WelcomeUser>
    <LinkContainer>
      <img src={SettingsIcon} alt="user settings icon" />
      <p>Account Settings </p>
    </LinkContainer>
    <LinkContainer>
      <img src={SignOutIcon} alt="user sign out icon" />
      <p>Sign Out </p>
    </LinkContainer>
  </SettingsPanel>
  </CSSTransition>
);
export default UserSettingsPanel;

