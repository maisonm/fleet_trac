import React, { Component } from "react";

//Assets
import BellIcon from "./assets/notification.svg";

//Styles
import { NotificationsOpen, NotificationAlertBubble } from './styles';

//Components
import NotificationsPanel from './NotificationsPanel/NotificationsPanel';

export default class NavbarNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationsPanelOpen: false,
    };
  }
  
  render() {
    const { notificationsPanelOpen } = this.state;
    return (
      <div>
        <NotificationsOpen
          onClick={() => {
            this.setState(prevState => ({
              notificationsPanelOpen: !prevState.notificationsPanelOpen
            }));
          }}
        >
          <NotificationAlertBubble />
          <img src={BellIcon} alt="notifications icon" />
        </NotificationsOpen>
      <NotificationsPanel panelOpen={notificationsPanelOpen} />
    </div>
    );
  }
}
