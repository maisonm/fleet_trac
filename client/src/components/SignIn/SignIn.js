import React from "react";
import styled, { keyframes } from "styled-components";

//Assets
import Rocket from "./assets/rocket_launch.svg";

import { slideInRight } from "react-animations";

const slideIn = keyframes`
  ${slideInRight}
`;

const SignInBox = styled.div`
  width: 620px;
  height: 380px;
  border-radius: 3px;
  box-shadow: 0px 2px 8px #b3b3b3;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  animation: 0.5s ease-in ${slideIn} forwards;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 60%;
  min-height: 200px;
  height: 380px;
  transition: 0.3s;
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
  background-color: #005bea;
  border-radius: 3px;
  width: 90%;
  border: none;
  font-size: 0.9em;
  color: #fafafa;
  cursor: pointer;
  transition: 0.2s;

  &&:hover {
    box-shadow: 0px 0px 10px #595959;
    transition: 0.2s;
  }
`;

const ForgotPassword = styled.a`
  position: absolute;
  bottom: 8px;
  right: 22px;
  font-size: 0.55em;
  color: #020202;
  cursor: pointer;

  &&:hover {
    color: #3a99d9;
    transition: 0.3s;
  }
`;

const PanelGreeting = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #595959;
  text-align: center;
  width: 40%;
  height: 380px;
  background-color: #ffffff;
  box-shadow: 2px 0px 2px #c2c2c2;
  transition: 0.3s;
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
  color: #fafafa;
  border-radius: 3px;

  && span {
    margin-bottom: -30px;
  }

  && p {
    width: 90%;
    font-size: 0.8em;
  }
`;

const HeaderGreeting = styled.div`
  color: #595959;
`;

const SignIn = () => (
  <SignInBox>
    <PanelGreeting>
      <span>
        <h4>Welcome back!</h4>
      </span>
      <p>Enter your details to sign in and launch the application.</p>
      <img src={Rocket} />
    </PanelGreeting>
    <InputFieldWrapper>
      <HeaderGreeting>
        <h3> Sign in to FleetTrac </h3>
      </HeaderGreeting>
      <Input>
        <InputLabel for="email">Email:</InputLabel>
        <InputField id="email" value="Enter email" />
      </Input>
      <Input>
        <InputLabel for="password">Password:</InputLabel>
        <InputField id="password" value="Create password" />
      </Input>
      <ActionButton>Sign In</ActionButton>
    </InputFieldWrapper>
    <ForgotPassword> Forgot Password? </ForgotPassword>
  </SignInBox>
);

export default SignIn;
