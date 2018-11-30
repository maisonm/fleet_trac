import styled, { keyframes } from "styled-components";

import { shake } from "react-animations";

const shakeCard = keyframes`${shake}`;

export const WarningCard = styled.div`
  width: 180px;
  height: 120px;
  background: #f3f3f3;
  border-radius: 3px;
  position: absolute;
  box-shadow: 0px 0px 20px #cccccc;
  display: flex;
  animation: 0.6s ease-in-out ${shakeCard};
`;

export const WarningText = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  && p {
    text-align: center;
    font-size: 0.7em;
    letter-spacing: 0.2px;
    font-weight: bold;
    color: #ff8073;
    width: 90%;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 0.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  color: #797979;

  && span {
    margin-right: 2px;
  }

  &&:hover {
    color: #c2c2c2;
    transition: 0.3s;
  }
`;
