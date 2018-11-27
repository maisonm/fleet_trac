import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

//Styles
import {
  ComponentContainer,
  Input,
  InputLabel,
  InputField,
  ActionButton
} from "./styles";

const validate = (email, password, companyName) => {
  return {
    email: email.length === 0,
    password: password.length === 6,
    companyName: companyName.length === 2
  };
};

const recheckPassword = (password, repeatPassword) => {
  return {
    password: password === repeatPassword
  };
};

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      companyName: "",
      password: "",
      repeatPassword: "",
      resp: ""
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

  canBeSubmitted() {
    const { email, companyName, password, repeatPassword } = this.state;

    const inputValidate = validate(email, password, companyName);

    console.log(inputValidate);
  }

  handleSubmit = evt => {
    evt.preventDefault();

    let data = {
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
      body: JSON.stringify(data)
    }).then(response => console.log(response));
  };

  render() {
    return (
      <ComponentContainer onSubmit={this.handleSubmit}>
        <Input>
          <InputLabel for="email">Email:</InputLabel>
          <InputField
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleEmailChange}
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
          />
        </Input>
        <Input>
          <InputLabel for="password">
            Password (minimum 6 characters):
          </InputLabel>
          <InputField
            id="password"
            name="password"
            type="text"
            value={this.state.password}
            placeholder="Create password"
            onChange={this.handlePasswordChange}
          />
        </Input>
        <Input>
          <InputLabel for="re-enter-password">Repeat password:</InputLabel>
          <InputField
            id="re-enter-password"
            name="repeatPassword"
            type="text"
            value={this.state.repeatPassword}
            placeholder="Re-enter password"
            onChange={this.handleRepeatPasswordChange}
          />
        </Input>
        <ActionButton type="submit">Sign Up</ActionButton>
      </ComponentContainer>
    );
  }
}
