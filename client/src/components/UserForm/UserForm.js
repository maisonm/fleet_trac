import React, { Component } from "react";

//Assets
import Rocket from "./assets/rocket_launch.svg";

//Styles
import {
  SignInBox,
  PanelGreeting,
  PanelGreetingAlt,
  FormContainer
} from "./styles";

//Components
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

const UserForm = props => (
  <SignInBox>
    {props.signIn ? (
      <PanelGreeting>
        <span>
          <h4>Sign In</h4>
        </span>
        <p>Enter your details to sign in and launch the application.</p>
        <img src={Rocket} alt="Rocket ship" />
      </PanelGreeting>
    ) : (
      <PanelGreetingAlt>
        <span>
          <h4>Sign Up</h4>
        </span>
        <p>Before you can use FleetTrac, you must create an account.</p>
        <img src={Rocket} alt="Rocket ship" />
      </PanelGreetingAlt>
    )}
    <FormContainer>{props.signIn ? <SignIn /> : <SignUp />}</FormContainer>
  </SignInBox>
);

export default UserForm;
