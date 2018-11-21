import React, { Component } from "react";

//Assets
import Logo from "./assets/logo.svg";
//Components
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
//Styles
import { HomePage, FormContainer, SiteLogo, ActionLink } from "./styles";

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
        <SiteLogo src={Logo} />
        {this.state.signIn ? <SignIn /> : <SignUp />}

        {this.state.signIn ? (
          <ActionLink onClick={this.toggleForm}>
            Need an account? Sign up.
          </ActionLink>
        ) : (
          <ActionLink onClick={this.toggleForm}>
            Have an account? Sign in.
          </ActionLink>
        )}
      </HomePage>
    );
  }
}
