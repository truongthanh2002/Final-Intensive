import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleCompleted, activeTab }) {
  return (
    <div className="section--todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            activeTab={activeTab}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
