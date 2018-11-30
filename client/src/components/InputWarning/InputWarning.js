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
      {!props.serverErrorWarning ? (
        <p>One or more fields are not valid. Complete the form to continue.</p>
      ) : (
        <p> `${props.serverErrorWarning} Please try again.` </p>
      )}
    </WarningText>
  </WarningCard>
);

export default InputWarning;
