import { useState, useRef } from "react";
import TodoList from "./compornents/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./css/App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAdd = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complated: false }];
    });
    todoNameRef.current.value = null;
  }

  const handleClear = (e) => {
    const newTodos = todos.filter((todo) => !todo.complated);
    setTodos(newTodos);
  }

  const compltedToggle = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complated = !todo.complated;
    setTodos(newTodos);
  }

  return (
    <div className="content">
      <h1>Get Things Done !</h1>
      <div>
        <input type="text" className="TaskInputForm" placeholder="What is your task?" ref={todoNameRef} />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Delete completed tasks</button>
      </div>
      <div className="RestOfTasks">
        Remaining tasks:{todos.filter((todo) => !todo.complated).length}
      </div>
      <label>
        <TodoList todos={todos} compltedToggle={compltedToggle} />
      </label>
    </div>
  );
}

export default App;
