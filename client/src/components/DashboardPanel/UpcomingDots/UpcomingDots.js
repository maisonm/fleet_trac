import React, { Component } from 'react'
import styled from 'styled-components';

import VehicleDisplayStrip from './VehicleDisplayStrip/VehicleDisplayStrip';

export const DotContainer = styled.div`
         width: 100%;
         height: 100%;
         box-sizing: border-box;
         margin-bottom: 94px;
         overflow: auto;
         padding: 4px 16px 4px 16px;
         `;


export default class UpcomingDots extends Component {
  render() {
    return <DotContainer>
        <VehicleDisplayStrip />
        <VehicleDisplayStrip />
        <VehicleDisplayStrip />
        <VehicleDisplayStrip />
        <VehicleDisplayStrip />
      </DotContainer>;
  }
}
