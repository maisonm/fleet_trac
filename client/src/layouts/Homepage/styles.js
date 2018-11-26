import styled from "styled-components";

export const HomePage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const FormContainer = styled.div`
  border: solid;
  min-height: 200px;
  transition: 0.5s;
`;

export const SiteLogo = styled.img`
  width: 148px;
  margin-bottom: 40px;
`;

export const ActionLink = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
  color: #595959;
  cursor: pointer;
  transition: 0.3s;

  &&:hover {
    color: #3a99d9;
    transition: 0.3s;
  }
`;
