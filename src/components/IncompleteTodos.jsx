import React from "react";

const IncompleteTodos = (props) => {
  const {todos, onClickToCompleteTodos, onClickDelete} = props
  return (
    <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {todos.map((todo, index) => {
            return (
          <div key={index} className="list-row">
            <li>{todo}</li>
            <button onClick={() =>{onClickToCompleteTodos(index)}}>完了</button>
            <button onClick={() =>{onClickDelete(index)}} >削除</button>
          </div>
            )})}
        </ul>
      </div>
  );
}

export default IncompleteTodos