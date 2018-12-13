import styled from 'styled-components';

export const NotificationDetailCard = styled.div`
  width: 100%;
  height: 75px;
  border-top: #e8e8e8 solid 1.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotifictionTitle = styled.div`
  font-size: 0.6em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  box-sizing: border-box;

  & > p {
    font-weight: 500;
    color: #ff5a5f;

    & > span {
      color: #595959;
    }
  }
`;

export const NotificationDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 0.6em;
  color: #595959;
  padding: 8px;
  margin-top: -8px;
`;
