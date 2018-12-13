import React from 'react'
import { CSSTransition } from 'react-transition-group';

//Styles
import { Panel, PanelHeader, PanelBanner } from './styles'

//Components
import NotificationCard from './NotificationCard/NotificationCard';

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
      <NotificationCard />
    </Panel>
  </CSSTransition>
);

  export default NotificationsPanel;