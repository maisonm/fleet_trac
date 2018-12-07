import React, { Component } from "react";

//Assets
import OpenArrow from "./assets/open_arrow.svg";

//Styles
import { UserNavDropdown, UserName, OpenUserSettings } from "./styles";

export default class UserDropdown extends Component {
  render() {
    return (
      <UserNavDropdown>
        <UserName> Express Maintenance</UserName>
        <OpenUserSettings>
          {/* Add a user settings panel component here that is toggles on and off by clicking the open arrow */}
          <img src={OpenArrow} alt="menu drop down arrow" />
        </OpenUserSettings>
      </UserNavDropdown>
    );
  }
}
