import React from "react";
import styled, { keyframes } from "styled-components";

//Styles
import {
  ComponentContainer,
  Input,
  InputLabel,
  InputField,
  ActionButton
} from "./styles";

const SignUp = props => (
  <ComponentContainer>
    <Input>
      <InputLabel for="email">Email:</InputLabel>
      <InputField id="email" value="Enter email" />
    </Input>
    <Input>
      <InputLabel for="companyName">Company name:</InputLabel>
      <InputField id="companyName" value="Enter company name" />
    </Input>
    <Input>
      <InputLabel for="password">Password:</InputLabel>
      <InputField id="password" value="Create password" />
    </Input>
    <Input>
      <InputLabel for="re-enter-password">Repeat password:</InputLabel>
      <InputField id="re-enter-password" value="Re-enter password" />
    </Input>
    <ActionButton>Sign Up</ActionButton>
  </ComponentContainer>
);

export default SignUp;
