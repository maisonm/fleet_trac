import React, { Component } from "react";

//Assets
import Logo from "./assets/logo.svg";
//Components
import UserForm from "../../components/UserForm/UserForm";
//Styles
import { HomePage, SiteLogo, ActionLink } from "./styles";

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
      </HomePage>
    );
  }
}
