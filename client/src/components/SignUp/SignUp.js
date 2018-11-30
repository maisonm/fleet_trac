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

//Components
import InputWarning from "../InputWarning/InputWarning";

const emailValidator = require("email-validator");

const validateInput = (email, companyName, password, repeatPassword) => {
  return {
    email: emailValidator.validate(`${email}`),
    companyName: companyName.length >= 2,
    password: password.length >= 6,
    repeatPassword: repeatPassword.length >= 6 && repeatPassword === password
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      companyName: "",
      password: "",
      repeatPassword: "",
      invalidSubmitPopupOpen: false,
      serverError: {}
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

  closeWarningPopup = () => {
    this.setState({ invalidSubmitPopupOpen: false });
  };

  // Add pop up error when trying to submit form with invalid fields
  handleSubmit = evt => {
    evt.preventDefault();
    const { email, companyName, password, repeatPassword } = this.state;

    let userData = {
      companyName: companyName,
      password: password,
      email: email
    };

    //Validate input values
    const isValid = validateInput(email, companyName, password, repeatPassword);

    //Invalid form input fields change state to open warning popup, else POST request is made
    if (
      !isValid.email ||
      !isValid.companyName ||
      !isValid.password ||
      !isValid.repeatPassword
    ) {
      this.setState({ invalidSubmitPopupOpen: true });
      return;
    } else {
      fetch("http://localhost:3000/users/accounts/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(response => response.json())
        .then(response => {
          const { status, message } = response;

          if (status === 201) {
            this.props.history.push("/dashboard");
          } else {
            let errorMessage = {
              status,
              message
            };

            this.setState({ serverErrorWarning: errorMessage });
          }
        });
    }
  };

  render() {
    const { email, companyName, password, repeatPassword } = this.state;
    //Validate input fields everytime state updates
    const inputIsValid = validateInput(
      email,
      companyName,
      password,
      repeatPassword
    );
    let props = {
      closePopup: this.closeWarningPopup,
      serverError: this.state.serverError
    };
    return (
      <ComponentContainer onSubmit={this.handleSubmit}>
        {this.state.invalidSubmitPopupOpen ? <InputWarning {...props} /> : null}
        <Input>
          <InputLabel htmlFor="email">Email:</InputLabel>
          <InputField
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleEmailChange}
            required
            isValid={inputIsValid.email ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <Input>
          <InputLabel htmlFor="companyName">Company name:</InputLabel>
          <InputField
            id="companyName"
            name="companyName"
            type="text"
            value={this.state.companyName}
            placeholder="Enter company name (min 2 characters)"
            onChange={this.handleNameChange}
            required
            isValid={inputIsValid.companyName ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <Input>
          <InputLabel htmlFor="password">Password:</InputLabel>
          <InputField
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Create password (min. 6 characters)"
            onChange={this.handlePasswordChange}
            required
            isValid={inputIsValid.password ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <Input>
          <InputLabel htmlFor="re-enter-password">Repeat password:</InputLabel>
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
