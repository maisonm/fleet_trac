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

//Validates the Sign Up inputs (Note: inputs sanitized by default in React)
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
      invalidInputWarning: false,
      serverError: {}
    };
  }

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // Add pop up error when trying to submit form with invalid fields
  handleSubmit = evt => {
    evt.preventDefault();
    const { email, companyName, password, repeatPassword } = this.state;

    //Validate input values
    const isValid = validateInput(email, companyName, password, repeatPassword);

    //Invalid form input fields change state to open warning popup, else POST request is made
    if (
      !isValid.email ||
      !isValid.companyName ||
      !isValid.password ||
      !isValid.repeatPassword
    ) {
      const inputWarning = {
        message:
          "One or more fields are not valid. Complete the form to continue."
      };

      this.setState({
        invalidInputWarning: true,
        serverError: inputWarning
      });
      return;
    } else {
      let userData = {
        companyName: companyName,
        password: password,
        email: email
      };

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
          const { status, message, user, userToken } = response;

          if (status === 201) {
            //Handles storing JWT token returned from the server into sessionStorage
            const storeItems = itemObj => {
              sessionStorage.clear();
              sessionStorage.setItem("user", JSON.stringify(itemObj));
            };
            let itemObj = { userId: user._id, userToken: userToken };
            storeItems(itemObj);
            // return this.props.history.push("/dashboard");
            console.log(response);
          } else {
            let errorMessage = {
              status,
              message
            };
            this.setState({
              invalidInputWarning: true,
              serverError: errorMessage
            });
          }
        });
    }
  };

  render() {
    const {
      email,
      companyName,
      password,
      repeatPassword,
      serverError
    } = this.state;
    //Validate input fields
    const inputIsValid = validateInput(
      email,
      companyName,
      password,
      repeatPassword
    );
    //Input warnings object passed via props to the InputWarning component
    let warningProps = {
      closePopup: this.closeWarningPopup,
      serverError: serverError
    };
    return (
      <ComponentContainer onSubmit={this.handleSubmit}>
        {this.state.invalidInputWarning ? (
          <InputWarning {...warningProps} />
        ) : null}
        <Input>
          <InputLabel htmlFor="email">Email:</InputLabel>
          <InputField
            id="email"
            name="email"
            type="text"
            value={email}
            placeholder="Enter email"
            onChange={this.handleInputChange}
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
            value={companyName}
            placeholder="Enter company name (min 2 characters)"
            onChange={this.handleInputChange}
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
            value={password}
            placeholder="Create password (min. 6 characters)"
            onChange={this.handleInputChange}
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
            value={repeatPassword}
            placeholder="Re-enter password"
            onChange={this.handleInputChange}
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
