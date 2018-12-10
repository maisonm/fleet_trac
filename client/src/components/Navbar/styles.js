import styled from "styled-components";

const borderStyle = "solid 1px #e2e4e9";

export const NavbarContainer = styled.div`
  border-bottom: ${borderStyle};
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  position: relative;
  background: #ffffff;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-right: ${borderStyle};
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a img {
    width: 28px;
    transition: 1s;

    &:hover {
      transform: rotate(360deg);
      transition: 1s;
      cursor: pointer;
    }
  }
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