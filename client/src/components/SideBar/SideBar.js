import React, { Component } from 'react'
import styled from 'styled-components';

//Components
import SideBarButtons from './SideBarButtons/SideBarButtons';

const SideBarContainer = styled.div`
  min-height: 100vh;
  width: 61px;
  background: powderblue;
  box-sizing: border-box;
  padding-top: 60px;
  position: absolute;
  top: 0;
  border-right: solid 1px #e2e4e9;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 89;
`;


class SideBar extends Component {
  render() {
    return (
      <SideBarContainer>
        <SideBarButtons />
      </SideBarContainer>
    )
  }
}

export default SideBar;
