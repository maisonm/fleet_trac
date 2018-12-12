import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

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
      settingsPanelOpen: false,
      arrowDown: false
    };
  }
  render() {
    const { settingsPanelOpen, arrowDown } = this.state;
    return (
      <UserNavDropdown>
        <UserName> Express Maintenance</UserName>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="open-arrow"
          >
            <OpenUserSettings
              rotate={arrowDown}
              onClick={() => {
                this.setState(prevState => ({
                  arrowDown: !prevState.arrowDown,
                  settingsPanelOpen: !prevState.settingsPanelOpen
                }));
              }}
            >
              <img src={OpenArrow} alt="menu drop down arrow" />
            </OpenUserSettings>
          </CSSTransition>
        <UserSettingsPanel panelOpen={settingsPanelOpen} />
      </UserNavDropdown>
    );
  }
}
