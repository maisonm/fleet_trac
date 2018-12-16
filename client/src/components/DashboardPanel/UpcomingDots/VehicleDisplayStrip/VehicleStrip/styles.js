import styled from 'styled-components';

export const StripContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-radius: 3px;
  margin-bottom: 8px;
  box-shadow: 0 0 2px #a6a6a6;
  display: flex;
`;

export const CustomerName = styled.div`
  width: 180px;
  height: 100%;
  box-sizing: border-box;
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Customer = styled.div`
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 1.5px #a6a6a6;

  & > p {
    margin: 0;
    width: 80%;
  }

  & > p:nth-child(1) {
    color: #808080;
    font-weight: 500;
  }

  & > p:nth-child(2) {
    color: #595959;
    font-weight: 600;
    letter-spacing: 0.1px;
    margin-top: 2px;
    font-size: 1.1em;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const UnitContainer = styled.div`
  width: 120px;
  height: 100%;
  box-sizing: border-box;
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Unit = styled.div`
  height: 70%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  & > p {
    margin: 0;
    text-align: left;
    width: 120px;
  }

  & > p:nth-child(1) {
    color: #808080;
    font-weight: 500;
    
  }

  & > p:nth-child(2) {
    color: #595959;
    font-weight: 600;
    letter-spacing: 0.1px;
    margin-top: 2px;
    font-size: 1em;
    overflow: auto;
    white-space: nowrap;
  }
`;

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
`;

export const NotesContainer = styled.div`
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Notes = styled.div`
  height: 70%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > p {
    margin: 0;
    text-align: left;
  }

  & > p:nth-child(1) {
    color: #808080;
    font-weight: 500;
    margin-right: 12px;
    border-right: 1px solid #e8e8e8;
    padding-right: 6px;
  }

  & > p:nth-child(2) {
    color: #80aaff;
    font-weight: 600;
    letter-spacing: 0.1px;
    font-size: 1em;
    overflow: auto;
    width: 100%;
    max-height: 100%;
    display: flex;
    padding: 2px;
  }
`;