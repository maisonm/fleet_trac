import React, { Component } from "react";

//Assets
import OpenArrow from "./assets/open_arrow.svg";

//Styles
import { UserNavDropdown, UserName, OpenUserSettings } from "./styles";

//Components
import UserSettingsPanel from "./UserSettingsPanel/UserSettingsPanel";

export default class UserDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settingsPanelOpen: true,
      arrowDown: false
    };
  }
  render() {
    const { settingsPanelOpen, arrowDown } = this.state;
    return (
      <UserNavDropdown>
        <UserName> Express Maintenance</UserName>
        <OpenUserSettings rotate={arrowDown ? "90deg" : "0deg"}>
          {/* Add a user settings panel component here that is toggles on and off by clicking the open arrow */}
          <img src={OpenArrow} alt="menu drop down arrow" />
        </OpenUserSettings>
        <UserSettingsPanel panelOpen={settingsPanelOpen} />
      </UserNavDropdown>
    );
  }
}