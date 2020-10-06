import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/home.less";
import timer from "../../images/timer.png";
import calculator from "../../images/calculator.png";
import hero from "../../images/hero-image.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeTitle">
          <p className="showImg">在线实用工具</p>
          <img className="backGroundImg" src={hero} alt="timerImg"></img>
        </div>
        <div className="homeContent">
          <div className="toolImg">
            <img className="toolImgs" src={calculator} alt="calculator"></img>
            <img className="toolImgs" src={timer} alt="timerImg"></img>
          </div>

          <div className="toolUrl">
            <Link className="calculatorUrl" to="/calculator">
              计算器
            </Link>
            <Link className="calculatorUrl" to="/timer">
              倒计时器
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
