import styled, { css, keyframes } from "styled-components";
import { fadeIn, fadeOut } from "react-animations";

const fade_in = keyframes`${fadeIn}`;
const fade_out = keyframes`${fadeOut}`;

export const SettingsPanel = styled.div`
  height: 120px;
  min-width: 220px;
  border-radius: 3px;
  background: #fff;
  position: fixed;
  top: 65px;
  right: 40px;
  box-shadow: 0 0 6px #bfbfbf;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: ${fade_in} 1s ease;

  & > img {
    width: 28px;
  }
`;

export const SettingsPanelClose = styled.div`
  height: 120px;
  min-width: 220px;
  border-radius: 3px;
  background: #fff;
  position: fixed;
  top: 65px;
  right: 40px;
  box-shadow: 0 0 6px #bfbfbf;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: ${fade_out} 1s ease forwards;

  & > img {
    width: 28px;
  }
`;

export const WelcomeUser = styled.div`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
  padding-left: 8px;
  color: #595959;
  font-size: 0.75em;
  font-weight: 500;
  transition: 0.3s;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > img {
    margin-right: 6px;
  }

  & > p {
    color: #4c84ff;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
  padding-left: 8px;
  color: #595959;
  font-size: 0.75em;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > img {
    margin-right: 6px;
  }

  &:hover {
    transition: 0.3s;
    background-color: #f4f4f4;

    img {
      transform: translateX(1px);
      transition: 0.3s;
    }
  }
`;
