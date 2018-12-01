import React from "react";

//Assets
import WarningIcon from "./assets/warning.svg";

//Styles
import { WarningCard, WarningText, CloseBtn } from "./styles";

const InputWarning = props => (
  <WarningCard>
    <WarningText>
      <CloseBtn onClick={props.closePopup}>
        <span> &#10005;</span> close
      </CloseBtn>
      <img src={WarningIcon} alt="warning icon" />
      <p> {props.serverError.message} </p>
    </WarningText>
  </WarningCard>
);

export default InputWarning;
