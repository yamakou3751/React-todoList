import React from "react";

const CompleteTodos = (props) => {
  const {todos, onClick} = props
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {onClick(index)}}>戻る</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
