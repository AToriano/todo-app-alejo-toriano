import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <Header />
        </header>
        <TodoList />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
