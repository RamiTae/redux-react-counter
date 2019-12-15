import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <AddTodo />
      <Footer />
      <TodoList />
    </div>
  );
}

export default App;
