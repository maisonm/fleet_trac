import styled from "styled-components";

export const DateTimeDisplay = styled.div`
  width: 180px;
  height: 60px;
  box-sizing: border-box;
  border-left: solid 1.5px #e2e4e9;
  position: absolute;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateCube = styled.div`
  height: 35px;
  width: 35px;
  background: #dbe7ff;
  border-radius: 3px;
  position: relative;
  margin-right: 5px;

  & > p {
    font-size: 0.6em;
    line-height: 0px;
    position: absolute;
    color: #4c84ff;
    font-weight: 500;
  }

  & > p:nth-child(1) {
    top: 2px;
    left: 8px;
  }

  & > p:nth-child(2) {
    bottom: 2px;
    left: 12px;
  }
`;

export const Time = styled.div`
  font-size: 0.7em;
  font-weight: 500;
  margin-left: 5px;
`;
