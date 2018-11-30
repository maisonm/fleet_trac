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

const SignIn = () => (
  <ComponentContainer method="POST" action="/users/accounts/login">
    <Input>
      <InputLabel htmlFor="email">Email:</InputLabel>
      <InputField type="text" id="email" placeholder="Your email" />
    </Input>
    <Input>
      <InputLabel htmlFor="password">Password:</InputLabel>
      <InputField type="text" id="password" placeholder="Your password" />
    </Input>
    <ActionButton>Sign In</ActionButton>
    <ForgotPassword> Forgot Password? </ForgotPassword>
  </ComponentContainer>
);

export default SignIn;
