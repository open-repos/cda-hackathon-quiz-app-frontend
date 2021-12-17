import React, { useEffect, useState } from "react";
import "../../css/timer.css";
import { getLocalStorageItem } from "../utils/localstorage";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }
   
  clock() {
    this.state.timer = this.props.startTime;
    setTimeout(() => {
      this.state.timer = (this.state.timer - 1);
      console.log(this.state.timer);
    }, 1000)
  };

  render() {
    return (
      <div className="timerContainer" onLoad={this.clock()}>
        <span>{this.state.timer}</span>
      </div>
    )
  }
}

