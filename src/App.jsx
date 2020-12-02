import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./styles.css";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

export default function App() {
  const [todoList, setTodos] = useState([]);

  const addTodo = (content) => {
    setTodos([...todoList, { id: nanoid(), content }]);
  };

  const removeTodo = (id) => {
    setTodos(todoList.filter((todo) => todo.id !== id));
  };

  const doneTodo = (id) => {
    setTodos(
      todoList.map((todo) => {
        if (todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
        doneTodo={doneTodo}
      />
    </div>
  );
}
