import React, { useState } from "react";

const NewTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const onChangeInput = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" value={input} onChange={onChangeInput} />
        <button type="submit">追加</button>
      </div>
    </form>
  );
};

export default NewTodo;
