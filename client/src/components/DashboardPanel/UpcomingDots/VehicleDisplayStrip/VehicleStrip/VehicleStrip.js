import React from 'react';

//Styles
import { StripContainer, CustomerName, Customer, Container, UnitContainer, Unit, NotesContainer, Notes } from './styles';

const VehicleStrip = props => (
  <StripContainer>
    <CustomerName>
      <Customer>
        <p>Customer</p>
        <p>Forward Air, Inc </p>
      </Customer>
    </CustomerName>

    <Container>
      <UnitContainer>
        <Unit>
          <p>VIN #</p>
          <p> {props.vehicle.vinNumber} </p>
        </Unit>
      </UnitContainer>
      <UnitContainer>
        <Unit>
          <p>Make</p>
          <p> {props.vehicle.make} </p>
        </Unit>
      </UnitContainer>
      <UnitContainer>
        <Unit>
          <p>Model</p>
          <p> {props.vehicle.model} </p>
        </Unit>
      </UnitContainer>
      <UnitContainer>
        <Unit>
          <p>Last DOT</p>
          <p> {props.vehicle.dotDone} </p>
        </Unit>
      </UnitContainer>
      <UnitContainer>
        <Unit>
          <p>Next DOT</p>
          <p> {props.vehicle.dotDue} </p>
        </Unit>
      </UnitContainer>
      <NotesContainer>
        <Notes>
          <p>Notes:</p>
          <p>Todco roller door.</p>
        </Notes>
      </NotesContainer>
    </Container>
  </StripContainer>
);

export default VehicleStrip;

