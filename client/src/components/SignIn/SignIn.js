import React from "react";

//Styles
import {
  ComponentContainer,
  Input,
  InputLabel,
  InputField,
  ActionButton,
  ForgotPassword
} from "./styles";

const SignIn = props => (
  <ComponentContainer>
    <Input>
      <InputLabel for="email">Email:</InputLabel>
      <InputField id="email" value="Enter email" />
    </Input>
    <Input>
      <InputLabel for="password">Password:</InputLabel>
      <InputField id="password" value="Create password" />
    </Input>
    <ActionButton>Sign In</ActionButton>
    <ForgotPassword> Forgot Password? </ForgotPassword>
  </ComponentContainer>
);

export default SignIn;
