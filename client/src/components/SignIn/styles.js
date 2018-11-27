import styled, { keyframes } from "styled-components";
import { bounceInUp, fadeIn } from "react-animations";

const Bounce = keyframes`${bounceInUp}`;
const Fade = keyframes`${fadeIn}`;

export const ComponentContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  animation: 0.6s ease-in ${Bounce};
`;
export const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #c0c0c0;
  padding-left: 10px;
  color: #595959;
  box-sizing: border-box;
`;
export const InputLabel = styled.label`
  font-size: 0.7em;
  font-weight: 600;
  color: #595959;
  margin-bottom: 4px;
  letter-spacing: 0.1px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 18px;
`;

export const ActionButton = styled.button`
  height: 40px;
  background-color: #0072ff;
  border-radius: 3px;
  width: 90%;
  border: none;
  font-size: 0.9em;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;

  &&:hover {
    background-color: #338fff;
    transition: 0.2s;
  }
`;

export const ForgotPassword = styled.a`
  position: absolute;
  bottom: 8px;
  right: 22px;
  font-size: 0.55em;
  color: #020202;
  cursor: pointer;
  animation: 0.8s ease-in ${Fade};

  &&:hover {
    color: #3a99d9;
    transition: 0.3s;
  }
`;
