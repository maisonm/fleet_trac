import React, { Component } from 'react'

import { Buttons, PanelButton } from './styles'

class PanelViewButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonOne: null,
            buttonTwo: null,
        }
    }

    upcomingDots = () => {
        if(this.state.buttonOne === null) {
            this.setState({ buttonOne: "panel-button-active", buttonTwo: null });
        } else {
            this.setState({ buttonOne: null });
        }
    }

    customersOverview = () => {
        if (this.state.buttonTwo === null) {
            this.setState({ buttonTwo: "panel-button-active", buttonOne: null });
        } else {
            this.setState({ buttonTwo: null });
        }
    }
  render() {
      const { buttonOne, buttonTwo } = this.state;
    return (
        <Buttons>
            <PanelButton onClick={this.upcomingDots}className={buttonOne}> Upcoming DOT's </PanelButton>
            <PanelButton onClick={this.customersOverview}className={buttonTwo}> Customers Overview </PanelButton>
        </Buttons>
    )
  }
}

export default PanelViewButtons;
