import styled, { keyframes } from "styled-components";

export const UserNavDropdown = styled.div`
  width: 240px;
  height: 60px;
  border-left: solid 1px #e2e4e9;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//ADDED OVERFLOW HIDDEN, NOT TESTED!!!
export const UserName = styled.div`
  font-size: 0.78em;
  font-weight: 500;
  color: #595959;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
`;

export const OpenUserSettings = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: 0.3s;
  transform: rotate(${props => props.rotate});
  margin-top: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 5px;
  }
`;
