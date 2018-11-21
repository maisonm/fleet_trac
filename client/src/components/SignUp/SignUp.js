import React from "react";
import styled, { keyframes } from "styled-components";

import { slideInLeft } from "react-animations";

const slideIn = keyframes`
  ${slideInLeft}
`;

const SignUpBox = styled.div`
  min-width: 520px;
  height: 380px;
  border-radius: 3px;
  box-shadow: 0px 2px 8px #b3b3b3;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.5s ease-in ${slideIn} forwards;
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #c0c0c0;
  padding-left: 10px;
  color: #595959;
  box-sizing: border-box;
`;
const InputLabel = styled.label`
  font-size: 0.7em;
  font-weight: 600;
  color: #595959;
  margin-bottom: 4px;
  letter-spacing: 0.1px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 18px;
`;

const ActionButton = styled.button`
  height: 40px;
  background-color: #3a99d9;
  border-radius: 3px;
  width: 90%;
  border: none;
  font-size: 0.9em;
  color: #ffffff;
  cursor: pointer;
`;
const SignUp = () => (
  <SignUpBox>
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
  </SignUpBox>
);

export default SignUp;
