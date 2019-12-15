//! Presentational Component
import React, { Component } from "react";
import "./Footer.css";

//표시할 할일 필터를 사용자가 바꿀 수 있게끔 해주는 컴포넌트
export default class Footer extends Component {
  render() {
    return (
      <div>
        <span className="Footer" onClick={() => console.log("Footer")}>
          All
        </span>
        <span> / </span>
        <span className="Footer" onClick={() => console.log("Footer")}>
          Completed
        </span>
        <span> / </span>
        <span className="Footer" onClick={() => console.log("Footer")}>
          Active
        </span>
      </div>
    );
  }
}
