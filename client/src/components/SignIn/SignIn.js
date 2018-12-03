import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Components
import InputWarning from "../InputWarning/InputWarning";

//Styles
import {
  ComponentContainer,
  Input,
  InputLabel,
  InputField,
  ActionButton,
  ForgotPassword
} from "./styles";

const emailValidator = require("email-validator");

//Validates the Sign In/Up user inputs (Note: inputs sanitized by default in React)
const validateInput = email => {
  return {
    email: emailValidator.validate(`${email}`)
  };
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      invalidInputWarning: false,
      serverError: {}
    };
  }

  closeWarningPopup = () => {
    this.setState({ invalidInputWarning: false });
  };

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = this.state;

    //Validate input values
    const isValid = validateInput(email);

    if (!isValid.email) {
      const inputWarning = {
        message: "The email or password input is not complete."
      };

      this.setState({
        invalidInputWarning: true,
        serverError: inputWarning
      });
      return;
    } else {
      let userData = {
        email: email,
        password: password
      };
      fetch("users/accounts/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(response => response.json())
        .then(response => {
          const { status, message, userObj, userToken } = response;

          if (status === 200) {
            const storeItems = itemObj => {
              sessionStorage.clear();
              sessionStorage.setItem("user", JSON.stringify(itemObj));
            };
            let itemObj = { userId: userObj._id, userToken: userToken };
            storeItems(itemObj);
          } else {
            let errorMessage = { status, message };
            this.setState({
              invalidInputWarning: true,
              serverError: errorMessage
            });
          }
        });
    }
  };

  render() {
    const { email, password, serverError, invalidInputWarning } = this.state;

    const inputIsValid = validateInput(email, password);

    //Passes input warnings object and close fuction via props to the InputWarning component
    let warningProps = {
      closePopup: this.closeWarningPopup,
      serverError: serverError
    };

    return (
      <ComponentContainer onSubmit={this.handleSubmit}>
        {invalidInputWarning ? <InputWarning {...warningProps} /> : null}
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
          <InputLabel htmlFor="password">Password:</InputLabel>
          <InputField
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={this.handleInputChange}
            required
            isValid={inputIsValid.password ? "#B0BD27" : "#D5D6D9"}
          />
        </Input>
        <ActionButton>Sign In</ActionButton>
        <ForgotPassword> Forgot Password? </ForgotPassword>
      </ComponentContainer>
    );
  }
}

export default withRouter(SignIn);
