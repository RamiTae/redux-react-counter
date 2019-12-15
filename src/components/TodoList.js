//! Presentational Component
import React, { Component } from "react";
import "./Todo,TodoList.css";
import Todo from "./Todo";

//표시 중인 할일 목록
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className="TodoList">
          <li className="Todo">
            <span className="Todo-contents">Todos</span>
            <span className="Todo-action">Actions</span>
          </li>
          <Todo />
        </ul>
      </div>
    );
  }
}
