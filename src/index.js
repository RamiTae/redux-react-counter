import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createStore } from "redux";
import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducers";
import { Provider } from "react-redux";
import logger from "redux-logger"; //logger를 쓰기 위해 받아옴

const store = createStore(counterReducer, applyMiddleware(logger));
// const store = createStore(counterReducer); //? reducer를 불러와야 함

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
