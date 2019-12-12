import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

Buttons = connect(null, mapDispatchToProps)(Buttons);
/**
 * ! mapStateToProps: 보여지는 컴포넌트(state값이 display)의 경우
 * ! mapDispatchToProps: 액션이 필요할 경우
 */

export default Buttons;
