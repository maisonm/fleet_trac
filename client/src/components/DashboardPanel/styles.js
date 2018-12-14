import styled from 'styled-components';

export const DashboardPanelContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  padding-left: 80px;
  padding-top: 20px;
  position: relative;
  /* Add CSS Transition to fade in on mount */
`;

export const ButtonActivePointer = styled.img`
         width: 18px;
         position: absolute;
         top: 32px;
         left: 50px;

         &.active-arrow-appear {
           transform: translateY(-100px);
         } 
         &.active-arrow-appear-active {
           transform: translateY(-100px);
           transition: all ease 0.5s;
         }

         &.active-arrow-enter-done {
           transform: translateY(0);
           transition: all ease 0.5s;
         }`;

export const PanelSection = styled.div`
  width: 100%;
  margin-right: 97px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PanelHeader = styled.div`
         width: 100%;
         height: 100px;
         box-sizing: border-box;
         padding-left: 18px;

         & > p:nth-child(1) {
           font-weight: 500;
           color: #4c84ff;
           margin-bottom: -12px;
         }

         & > p:nth-child(2) {
           font-size: 0.8em;
           color: #595959;

           & > span {
             font-weight: 500;
           }
         }`;