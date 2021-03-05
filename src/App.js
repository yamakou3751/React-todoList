import React, { useState } from "react";
import InputTodo from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import CompleteTodos from "./components/CompleteTodos";
import "./styles.css";


export const App = () => {
  //state定義エリア
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, updateIncompleteTodos] = useState([]);
  const [completeTodos, updateCompleteTodos] = useState([]);
  
  //入力したTODOがダブった時に値が入る変数
  let dabuli;

  const InputTodoText = (e) => {
    setInputTodo(e.target.value);
  };
  
  const onClickInputTodos = () => {
    //ダブり確認＆警告処理　※JSX表示での実装が出来なかったのでアラートにて対応
    dabuli = incompleteTodos.indexOf(inputTodo)
    if (dabuli >= 0) {
      alert('TODOが重複してますよ～～')
      return
    }
    if (!inputTodo) {
      return;
    }
    const newIncompleteTodos = [...incompleteTodos, inputTodo];
    updateIncompleteTodos(newIncompleteTodos);
    setInputTodo("");
  };

  //未完了のTODO削るぜ関数（リファクタリング用）
  const incompleteSliceFunc = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    updateIncompleteTodos(newIncompleteTodos);
  };

  const onClickDelete = (index) => {
    incompleteSliceFunc(index);
  };

  const onClickToCompleteTodos = (index) => {
    incompleteSliceFunc(index);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    updateCompleteTodos(newCompleteTodos);
  };

  const onClickToBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    updateCompleteTodos(newCompleteTodos);
    updateIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todos={inputTodo}
        onChange={InputTodoText}
        onClick={onClickInputTodos}
        disabled={
          incompleteTodos.length >= 5 && true
        }
      />
      {/* {(dabuli >= 0) && <p style={{color:'red'}}>TODOが重複してま~す</p>} */}
      {incompleteTodos.length >= 5 &&
       <p style={{color:'red'}}>溜まりすぎなんで～～🙄早く消化しなさ～～い</p>}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickToCompleteTodos={onClickToCompleteTodos}
        onClickDelete={onClickDelete}
      />
      {completeTodos.length >= 3 && 
      <p style={{color:'blue'}}>働きすぎじゃね？🤣休んだほうが良くね？</p>}
      <CompleteTodos todos={completeTodos} onClick={onClickToBack} />
    </>
  );
};
