import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

import "./App.css";
import TodoList from "../src/Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const addTodo = () => {
    if (todoText) {
      setTodos([
        ...todos,
        { text: todoText, id: Date.now(), completed: false },
      ]);
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const deleteAllCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    switch (activeTab) {
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo) => !todo.completed);
      case "Completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="App">
      <h1>#todo</h1>
      <div className="filter">
        <button
          className={`filter-button ${activeTab === "All" ? "active" : ""}`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`filter-button ${activeTab === "Active" ? "active" : ""}`}
          onClick={() => setActiveTab("Active")}
        >
          Active
        </button>
        <button
          className={`filter-button ${
            activeTab === "Completed" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Completed")}
        >
          Completed
        </button>
      </div>
      <hr />

      {activeTab !== "Completed" && (
        <div className="section--input">
          <input
            type="text"
            placeholder="Add a new todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={addTodo}>Add</button>
        </div>
      )}
      <TodoList
        todos={filterTodos()}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
        activeTab={activeTab}
      />
      <div className="delete-all">
        {activeTab === "Completed" && (
          <button className="btn--delete-all" onClick={deleteAllCompletedTodos}>
            <DeleteOutlined />
            Delete All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
