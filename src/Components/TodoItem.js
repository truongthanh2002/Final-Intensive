import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

function TodoItem({ todo, deleteTodo, toggleCompleted, activeTab }) {
  return (
    <li>
      <div className="first">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          style={{ cursor: "pointer" }}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </div>
      {activeTab === "Completed" && (
        <DeleteOutlined onClick={() => deleteTodo(todo.id)} />
      )}
    </li>
  );
}

export default TodoItem;
