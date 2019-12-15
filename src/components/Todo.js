//! Presentational Component
import React, { Component } from "react";
import "./Todo,TodoList.css";

//할일 하나
export default class Todo extends Component {
  render() {
    return (
      <div>
        <li className="Todo">
          <span className="Todo-contents">Todo1</span>
          <span className="Todo-action">
            <button>-</button>
            <button>v</button>
          </span>
        </li>
      </div>
    );
  }
}
