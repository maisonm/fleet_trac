import styled from 'styled-components';

export const SideBarButton = styled.div`
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  font-size: 0.5em;
  color: #595959;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(1);
  transition: all ease 0.3s;

  &:hover {
    transform: scale(0.95);
    transition: all ease 0.3s;
  }
`;

export const SideBarIcon = styled.img`
  width: 24px;
  margin-bottom: -6px;
`;
