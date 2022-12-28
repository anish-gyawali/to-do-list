import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  return (
    <div>
      <h1>Add your Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todo;