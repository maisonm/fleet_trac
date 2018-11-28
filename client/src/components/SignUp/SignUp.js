import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Styles
import {
  ComponentContainer,
  Input,
  InputLabel,
  InputField,
  ActionButton
} from "./styles";

const emailValidator = require("email-validator");

const validateInput = (email, companyName, password, repeatPassword) => {
  return {
    email: emailValidator.validate(`${email}`),
    companyName: companyName.length >= 2,
    password: password.length >= 6,
    repeatPassword: repeatPassword.length >= 6 // ** DOES NOT COMPARE PASSWORDS || NEED TO FIX! **
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      companyName: "",
      password: "",
      repeatPassword: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleNameChange = evt => {
    this.setState({ companyName: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleRepeatPasswordChange = evt => {
    this.setState({ repeatPassword: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    let userData = {
      companyName: this.state.companyName,
      password: this.state.password,
      email: this.state.email
    };

    fetch("http://localhost:3000/users/accounts/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    }).then(res => {
      const { status } = res;
      if (status === 200) {
        this.props.history.push("/Test");
      }
    });
  };

  render() {
    const { email, companyName, password, repeatPassword } = this.state;
    const inputIsValid = validateInput(
      email,
      companyName,
      password,
      repeatPassword
    );
    return (
      <ComponentContainer onSubmit={this.handleSubmit}>
        <Input>
          <InputLabel for="email">Email:</InputLabel>
          <InputField
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleEmailChange}
            required
            isValid={inputIsValid.email ? "#B0BD27" : "#d9d9d9"}
          />
        </Input>
        <Input>
          <InputLabel for="companyName">
            Company name (minimum 2 characters):
          </InputLabel>
          <InputField
            id="companyName"
            name="companyName"
            type="text"
            value={this.state.companyName}
            placeholder="Enter company name"
            onChange={this.handleNameChange}
            required
            isValid={inputIsValid.companyName ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <Input>
          <InputLabel for="password">
            Password (minimum 6 characters):
          </InputLabel>
          <InputField
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Create password"
            onChange={this.handlePasswordChange}
            required
            isValid={inputIsValid.password ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <Input>
          <InputLabel for="re-enter-password">Repeat password:</InputLabel>
          <InputField
            id="re-enter-password"
            name="repeatPassword"
            type="password"
            value={this.state.repeatPassword}
            placeholder="Re-enter password"
            onChange={this.handleRepeatPasswordChange}
            required
            isValid={inputIsValid.repeatPassword ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <ActionButton type="submit">Sign Up</ActionButton>
      </ComponentContainer>
    );
  }
}

export default withRouter(SignUp);
