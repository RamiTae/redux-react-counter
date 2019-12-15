//! Presentational Component
import React, { Component } from "react";
import "./AddTodo.css";

//버튼이 달린 입력 필드
export default class AddTodo extends Component {
  render() {
    return (
      <div className="AddTodo">
        <input type="text"></input>
        <div>
          <button>Cancle</button>
          {/* <button onClick={text:string}>Cancle</button> */}
          <button>Add Todo</button>
        </div>
      </div>
    );
  }
}
