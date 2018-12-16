import styled from 'styled-components';

export const Buttons = styled.div`
         width: 100%;
         height: 60px;
         box-sizing: border-box;
         display: flex;
         align-items: center;
         padding-left: 18px;
         
         `;

export const PanelButton = styled.div`
         height: 100%;
         box-sizing: border-box;
         font-size: 0.75em;
         font-weight: 500;
         color: #595959;
         margin-right: 24px;
         display: flex;
         justify-content: center;
         align-items: center;
         transition: 0.5s;
         cursor: pointer;

         &:hover {
           color: #4c84ff;
           transition: all ease 0.5s;
         }

         &.panel-button-active {
           color: #4c84ff;
           transition: all ease 0.5s;
         }`;