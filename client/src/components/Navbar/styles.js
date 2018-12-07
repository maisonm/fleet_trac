import styled from "styled-components";

const borderStyle = "solid 1.5px #e2e4e9";

export const NavbarContainer = styled.div`
  border-bottom: ${borderStyle};
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: relative;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-right: ${borderStyle};
  position: absolute;
  left: 0;
`;

export const Notifications = styled.div`
  width: 60px;
  height: 60px;
  border-left: ${borderStyle};
  position: absolute;
  right: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
