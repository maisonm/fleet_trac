import React, { Component } from "react";
import styled from "styled-components";

//Components
import Navbar from "../../components/Navbar/Navbar";

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

//Make this a protected component!!!

export default class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Navbar />
      </DashboardContainer>
    );
  }
}
