import React, { Component } from "react";
import styled from "styled-components";

//Assets
import BellIcon from "./assets/notification.svg";

//Components
import NotificationsPanel from './NotificationsPanel/NotificationsPanel';

const NotificationsOpen = styled.div`
  height: 60px;
  width: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  /* Figure out a hover transition */
  &:hover {
    background: #f4f4f4;
    transition: 0.3s;
  }

  & > img {
    width: 16px;
  }
`;

const NotificationAlertBubble = styled.div`
  border: solid 1.5px #4c84ff;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

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
