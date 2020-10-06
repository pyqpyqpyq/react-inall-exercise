import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Timer";
export default class Timer extends Component {
  state = {
    inputTime: "",
    timer: "start",
  };

  handleChange = () => {
    this.setState({
      inputTime: event.target.value,
    });
  };

  timeRun;

  handleStartTimer = () => {
    this.setState({
      timer: this.state.inputTime,
    });
    this.timeRun = setInterval(this.handleUpdateTimer, 1000);
  };

  handleUpdateTimer = () => {
    if (this.state.timer > 1) {
      this.setState({
        timer: this.state.timer - 1,
      });
    } else {
      this.setState({
        timer: "End",
      });
      clearInterval(this.timeRun);
    }
  };
  render() {
    return (
      <div className="timer">
        <h1>在线倒计时器</h1>
        <div className="timeBody">
          <div className="timeRow">
            <div className="timerleft">
              <div className="setTimeRow">
                <label className="setTime">设置时间</label>
                <input
                  className="inputNumbers"
                  type="text"
                  value={this.state.inputTime}
                  onChange={this.handleChange}
                ></input>
              </div>
              <button
                className="start"
                onClick={this.handleStartTimer}
                disabled={
                  this.state.timer > 0 &&
                  this.state.timer != "Start" &&
                  this.state.timer != "End"
                }
              >
                start
              </button>
            </div>
            <input
              className="timerRight"
              type="text"
              readOnly={true}
              value={this.state.timer}
            ></input>
          </div>
        </div>
        <div className="backfoot">
          <Link className="homeUrl" to="/">
            回到主页
          </Link>
        </div>
      </div>
    );
  }
}
