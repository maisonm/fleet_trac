import styled from 'styled-components';

export const NotificationsOpen = styled.div`
  height: 60px;
  width: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #f4f4f4;
    transition: 0.3s;
  }

  & > img {
    width: 16px;
  }
`;

export const NotificationAlertBubble = styled.div`
  border: solid 1.5px #4c84ff;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 16px;
  right: 16px;
`;
