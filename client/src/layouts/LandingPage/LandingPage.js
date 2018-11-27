import React from "react";

//Assets
import Background from "./assets/background.svg";

//Styles
import { Container, Info, InfoHeader } from "./styles";

const LandingPage = () => (
  <Container>
    <img src={Background} alt="landing page background" />
    <InfoHeader>Effortlessly manage your fleet with FleetTrac.</InfoHeader>
    <Info>
      Schedule DOT inspections, maintenance &amp; repairs. Store your fleet
      vehicles and automatically be notified when maintenance is due. Create an
      account above to get started.
    </Info>
  </Container>
);

export default LandingPage;
