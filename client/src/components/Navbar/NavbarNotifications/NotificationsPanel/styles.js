import styled, { keyframes } from "styled-components";

import { fadeIn, fadeOut } from "react-animations";

const fade_in = keyframes`${fadeIn}`;
const fade_out = keyframes`${fadeOut}`;

export const Panel = styled.div`
  width: 238px;
  min-height: 180px;
  background: #fff;
  position: fixed;
  top: 60px;
  right: 420px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #cbd0ea;
  animation: ${props => (props.isOpen ? fade_in : fade_out)} 0.6s ease forwards;

  &.notifications-panel-appear-active {
    display: none;
  }

  &.notifications-panel-enter-done {
    display: none;
  }
`;

export const PanelHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2px;
  font-size: 0.8em;
  font-weight: 500;
`;

export const PanelBanner = styled.div`
  width: 100%;
  height: 20px;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
  color: #999999;
  font-weight: 500;
`;
