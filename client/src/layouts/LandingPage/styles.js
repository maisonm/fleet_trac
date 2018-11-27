import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
`;

export const InfoHeader = styled.h3`
  color: #595959;
  width: 50%;
  text-align: center;
  margin-top: 50px;
  letter-spacing: 0.1px;
`;

export const Info = styled.p`
  width: 40%;
  text-align: center;
  font-size: 0.85em;
  font-weight: 600;
  color: #797979;
  margin-top: -10px;
`;
