import styled, { keyframes } from "styled-components";

import { bounceInDown } from "react-animations";

const Bounce = keyframes`${bounceInDown}`;

export const SignInBox = styled.div`
  min-width: 620px;
  height: 430px;
  border-radius: 3px;
  box-shadow: 0px 2px 8px #b3b3b3;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const PanelGreeting = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #595959;
  text-align: center;
  width: 40%;
  height: 430px;
  background-color: #ffffff;
  box-shadow: 2px 0px 2px #c2c2c2;
  transition: 0.3s;
  background-image: linear-gradient(to top, #4ecdc4 0%, #637283 100%);
  color: #fafafa;
  border-radius: 3px;
  animation: 0.6s ease-in ${Bounce};

  && span {
    margin-bottom: -30px;
  }

  && p {
    width: 90%;
    font-size: 0.8em;
  }
`;

export const PanelGreetingAlt = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #595959;
  text-align: center;
  width: 40%;
  height: 430px;
  background-color: #ffffff;
  box-shadow: 2px 0px 2px #c2c2c2;
  transition: 0.3s;
  background-image: linear-gradient(to top, #24c6dc 0%, #514a9d 100%);
  color: #fafafa;
  border-radius: 3px;
  transition: 0.3s;
  animation: 0.6s ease-in ${Bounce};

  && span {
    margin-bottom: -30px;
  }

  && p {
    width: 90%;
    font-size: 0.8em;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 60%;
`;
