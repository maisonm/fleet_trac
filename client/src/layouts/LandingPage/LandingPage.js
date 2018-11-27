import React from "react";

//Assets
import Background from "./assets/background.svg";

//Styles
import { Container, Info, InfoHeader } from "./styles";

const LandingPage = () => (
  <Container>
    <img src={Background} alt="landing page background" />
    <InfoHeader>
      <span>Effortlessly manage</span> your fleet with <span>FleetTrac</span>
    </InfoHeader>
    <Info>
      Track and schedule crucial DOT inspections, vehicle maintenance &amp;
      repairs. Store your fleet vehicles and automatically be notified when
      maintenance is nearing due. Never miss a beat managing your fleet. Create
      an account above to get started.
    </Info>
  </Container>
);

export default LandingPage;
