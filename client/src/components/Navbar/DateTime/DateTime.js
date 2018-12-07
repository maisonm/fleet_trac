import React, { Component } from "react";

//Styles
import { DateTimeDisplay, DateCube, Time } from "./styles";

let date = require("date-and-time");
let now = new Date();

export default class DateTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: date.format(now, "hh:mm"),
      currentDay: date.format(now, "DD"),
      currentMonth: date.format(now, "MMM")
    };
  }

  componentDidMount() {
    //Sets current time in state every minute
    setInterval(() => {
      this.setState({ currentTime: date.format(now, "hh:mm") });
    }, 60000);
  }
  render() {
    const { currentTime, currentMonth, currentDay } = this.state;
    return (
      <DateTimeDisplay>
        <DateCube>
          <p>{currentMonth}</p>
          <p>{currentDay}</p>
        </DateCube>
        <Time>
          <p> {currentTime} </p>
        </Time>
      </DateTimeDisplay>
    );
  }
}
