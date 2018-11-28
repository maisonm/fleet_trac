import styled, { keyframes } from "styled-components";

import { bounceInUp } from "react-animations";

const Bounce = keyframes`${bounceInUp}`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: solid 1.5px ${props => props.isValid};
  padding-left: 10px;
  color: #595959;
  box-sizing: border-box;
  transition: 0.5s;
  outline: none;
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
  background-color: #514a9d;
  border-radius: 3px;
  width: 90%;
  border: none;
  font-size: 0.9em;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;

  &&:hover {
    background-color: #6a63b6;
    transition: 0.2s;
  }
`;

export const ComponentContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.6s ease-in ${Bounce};
`;
