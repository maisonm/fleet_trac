import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

//Assets
import Triangle from './assets/open_arrow.svg';

//Components
import PanelViewButtons from './PanelViewButtons/PanelViewButtons';
import UpcomingDots from './UpcomingDots/UpcomingDots';

//Styled 
import {
  DashboardPanelContainer,
  ButtonActivePointer,
  PanelSection,
  PanelHeader,
} from "./styles";

//Overview Panel will be seperate component
//Panel Buttons will be seperate component 


export default class DashboardPanel extends Component {
  render() {
    return <DashboardPanelContainer>
        <CSSTransition in={true} appear={true} timeout={500} classNames="active-arrow">
          <ButtonActivePointer src={Triangle} alt="active button selector" />
        </CSSTransition>
        <PanelSection>
          <PanelHeader>
            <p>Dashboard</p>
            <p>
              You are in the <span>Dashboard panel</span>
            </p>
          </PanelHeader>
          <PanelViewButtons />

          {/* Breakout into seperate component */}
          <UpcomingDots />
        </PanelSection>
      </DashboardPanelContainer>;
  }
}
