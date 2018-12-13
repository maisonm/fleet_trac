import React, { Component } from "react";

//Styles
import { DashboardContainer } from "./styles";

//Components
import Navbar from "../../components/Navbar/Navbar";
import SideBar from '../../components/SideBar/SideBar';
import DashboardPanel from '../../components/DashboardPanel/DashboardPanel';

//Make this a protected component!!!

export default class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Navbar />
        <SideBar />
        <DashboardPanel />
      </DashboardContainer>
    );
  }
}
