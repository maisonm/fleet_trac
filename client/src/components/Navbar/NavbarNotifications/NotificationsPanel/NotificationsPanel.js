import React from 'react'
import { CSSTransition } from 'react-transition-group';

import styled, { keyframes } from 'styled-components';

import { fadeIn, fadeOut } from "react-animations";

const fade_in = keyframes`${fadeIn}`;
const fade_out = keyframes`${fadeOut}`;

const Panel = styled.div`
  width: 238px;
  min-height: 180px;
  background: #fff;
  position: fixed;
  top: 60px;
  right: 420px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #cbd0ea;
  animation: ${props => (props.isOpen ? fade_in : fade_out)} 0.6s ease forwards;

  &.notifications-panel-appear-active {
    display: none;
  }

  &.notifications-panel-enter-done {
    display: none;
  }
`;

const PanelHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2px;
  font-size: 0.8em;
  font-weight: 500;
`;

const PanelBanner = styled.div`
    width: 100%;
    height: 20px;
    background: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .6em;
    color: #999999;
    font-weight: 500;
`;

//This will be a new react component 
const NotificationCard = styled.div`
  width: 100%;
  height: 75px;
  border-top: #e8e8e8 solid 1.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotifictionTitle = styled.div`
  font-size: 0.6em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4px;
  box-sizing: border-box;

  & > p {
    font-weight: 500;
    color: #ff5a5f;
    
    & > span {
      color: #595959;
    }
  }
`;

const NotificationDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: .6em;
  color: #595959;
  padding: 4px;
  margin-top: -8px;
`;

const NotificationsPanel = props => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={1000}
    classNames="notifications-panel"
  >
    <Panel isOpen={props.panelOpen}>
      <PanelHeader> Notifications </PanelHeader>
      <PanelBanner> Today </PanelBanner>
      <NotificationCard>
        <NotifictionTitle>
          <p>
            Service Upcoming • <span>Forward Air</span>
          </p>
        </NotifictionTitle>
        <NotificationDetails>
          DOT service is upcoming on unit #619822 in 5 days.
        </NotificationDetails>
      </NotificationCard>
      <NotificationCard>
        <NotifictionTitle>
          <p>
            Service Due • <span>Forward Air</span>
          </p>
        </NotifictionTitle>
        <NotificationDetails>
          DOT service is DUE on unit #813322. It is 1 day(s) past due.
        </NotificationDetails>
      </NotificationCard>
      <NotificationCard>
        <NotifictionTitle>
          <p>
            Service Upcoming • <span>Structall</span>
          </p>
        </NotifictionTitle>
        <NotificationDetails>
          DOT service is upcoming on unit 65 in 2 days.
        </NotificationDetails>
      </NotificationCard>
    </Panel>
  </CSSTransition>
);

  export default NotificationsPanel;