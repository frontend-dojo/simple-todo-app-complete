import React from "react";

const TodoListItem = ({ todo, removeTodo, doneTodo }) => {
  const onClickDeleteButton = () => {
    removeTodo(todo.id);
  };
  const onClickCompleteButton = () => {
    doneTodo(todo.id);
  };
  const contentStyle = todo.isDone
    ? { textDecoration: "line-through", color: "red" }
    : {};
  return (
    <li>
      <button onClick={onClickDeleteButton}>消す</button>&nbsp;
      <span style={contentStyle}>{todo.content}</span>
      <button onClick={onClickCompleteButton}>完了</button>
    </li>
  );
};

const TodoList = ({ todoList, removeTodo, doneTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          doneTodo={doneTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
