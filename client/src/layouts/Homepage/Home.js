import React, { Component } from "react";

//Assets
import Logo from "./assets/logo.svg";
//Components
import UserForm from "../../components/UserForm/UserForm";
import LandingPage from "../Landingpage/LandingPage";
//Styles
import { HomePage, ActionLink } from "./styles";

import styled from "styled-components";

const Test = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #f2f2f2 0%, white 100%);
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
  //Switch between signin & signup forms
  toggleForm() {
    if (this.state.signIn) {
      this.setState({
        signIn: false
      });
    } else {
      this.setState({
        signIn: true
      });
    }
  }

  render() {
    return (
      <HomePage>
        <Test>
          <UserForm signIn={this.state.signIn} />

          {this.state.signIn ? (
            <ActionLink onClick={this.toggleForm}>
              Need an account? Sign up.
            </ActionLink>
          ) : (
            <ActionLink onClick={this.toggleForm}>
              Have an account? Sign in.
            </ActionLink>
          )}
        </Test>
        <LandingPage />
      </HomePage>
    );
  }
}
