import React from "react";

import {
  SettingsPanel,
  SettingsPanelClose,
  WelcomeUser,
  LinkContainer
} from "./styles";

//Assets
import SignedInIcon from "./assets/sign-in.svg";
import SignOutIcon from "./assets/sign-out.svg";
import SettingsIcon from "./assets/settings.svg";

//ADD LINKS WHEN THE SETTINGS PAGE IS READY
//DISGUSTING WAY TO FADE IN AND OUT  ¯\_(ツ)_/¯ (Address later)
const UserSettingsPanel = props =>
  props.panelOpen ? (
    <SettingsPanel>
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
  ) : (
    <SettingsPanelClose>
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
    </SettingsPanelClose>
  );
export default UserSettingsPanel;
