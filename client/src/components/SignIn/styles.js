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
  border: solid 1.5px ${props => props.isValid};
  padding-left: 10px;
  color: #595959;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;

  ::placeholder {
    font-style: italic;
    color: #797979;
    font-size: 0.82em;
  }
`;
export const InputLabel = styled.label`
  font-size: 0.75em;
  color: #595959;
  margin-bottom: 6px;
  letter-spacing: 0.2px;
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
  background-color: #556270;
  border-radius: 3px;
  width: 90%;
  border: none;
  font-size: 0.9em;
  color: #ffffff;
  cursor: pointer;
  transition: 0.4s;
  font-weight: bold;

  &&:hover {
    background-color: #637283;
    transition: 0.4s;
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
