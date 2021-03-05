import React from "react";

const InputTodo = (props) => {
  const {todos, onChange, onClick, disabled} = props
  return (
    <div className="input-area">
      <input placeholder="TODO入力" value={todos} onChange={onChange} 
      disabled={disabled} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default InputTodo;
