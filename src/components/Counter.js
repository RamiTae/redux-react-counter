import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        {/* VALUE: {this.props.store.getState().value}*/}
        VALUE: {this.props.value}
      </div>
    );
  }
}

//* state와 props를 연결해줌
const mapStateToProps = state => {
  return {
    value: state.value
    // value는 Counter의 props.value
    // state는 reducer에 있는 state
  };
};
Counter = connect(mapStateToProps)(Counter);
//* connect: 함수를 받아서 함수를 return하는 함수
//* 이 Counter컴포넌트를 store와 연결해줌

export default Counter;
