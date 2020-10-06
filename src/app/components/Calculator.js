import React,{ Component } from "react";
import {Link}from "react-router-dom";
import '../styles/Calculator'

export default class Calculator extends Component {
  state = {
    calculates: "",
  };
  handleInput = () => {
    this.setState({
      calculates: this.state.calculates + String(event.target.value),
    });
  };
  handleReset = () => {
    this.setState({
      calculates: "",
    });
  };

  handleCalculate = () => {
    const regex = /\d+[\+\-\*]\d+/;
    if (this.state.calculates.replace(regex, "").length !== 0) {
      this.handleReset();
    } else {
      this.setState({
        calculates: eval(this.state.calculates),
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <h1>在线计算器</h1>
        <div className="calcuBody">
          <div className="calcuNum">
            <input
              className="inputNumbers"
              type="text"
              readOnly={true}
              value={this.state.calculates}
            ></input>
          </div>
          <div className="numberRow">
            <button
              className="symbol"
              id="add"
              value="+"
              onClick={this.handleInput}
            >
              +
            </button>
            <button
              className="symbol"
              id="minus"
              value="-"
              onClick={this.handleInput}
            >
              -
            </button>
            <button
              className="symbol"
              id="multiply"
              value="*"
              onClick={this.handleInput}
            >
              x
            </button>
          </div>

          <div className="numberRow">
            <button
              className="numbers"
              id="seven"
              value="7"
              onClick={this.handleInput}
            >
              7
            </button>
            <button
              className="numbers"
              id="eight"
              value="8"
              onClick={this.handleInput}
            >
              8
            </button>
            <button
              className="numbers"
              id="nine"
              value="9"
              onClick={this.handleInput}
            >
              9
            </button>
          </div>

          <div className="numberRow">
            <button
              className="numbers"
              id="four"
              value="4"
              onClick={this.handleInput}
            >
              4
            </button>
            <button
              className="numbers"
              id="five"
              value="5"
              onClick={this.handleInput}
            >
              5
            </button>
            <button
              className="numbers"
              id="six"
              value="6"
              onClick={this.handleInput}
            >
              6
            </button>
          </div>

          <div className="numberRow">
            <button
              className="numbers"
              id="one"
              value="1"
              onClick={this.handleInput}
            >
              1
            </button>
            <button
              className="numbers"
              id="two"
              value="2"
              onClick={this.handleInput}
            >
              2
            </button>
            <button
              className="numbers"
              id="three"
              value="3"
              onClick={this.handleInput}
            >
              3
            </button>
          </div>

          <div className="numberRow">
            <button
              className="numbers"
              id="zero"
              value="0"
              onClick={this.handleInput}
            >
              0
            </button>
            <button
              className="clearnumber"
              id="clear"
              value="clear"
              onClick={this.handleReset}
            >
              Clear
            </button>
            <button
              className="resultEquals"
              id="equals"
              value="="
              onClick={this.handleCalculate}
            >
              =
            </button>
          </div>
        </div>
        <div className="calBackfoot">
            <Link className="calHomeUrl"to='/'>回到主页</Link>
        </div>
      </div>
    );
  }
}
