import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  //state定義エリア
  const [inputTodo, setInputTodo] = useState('')
  const [incompleteTodos, updateIncompleteTodos] = useState(['あああ', 'いいいい'])
  const [completeTodos, updateCompleteTodos] = useState(['ううううう'])

  // 関数エリア
  //入力値取得
  const InputTodos = (e) => {
    setInputTodo(e.target.value)
  }
  //追加ボタン⇒未完了エリアにstate追加
  const onClickInputTodos = () => {
    if (!inputTodo) {return}
    //incompletetodosのコピーにinputTodoからきたTODOを追加し更新
    const newIncompleteTodos = [...incompleteTodos, inputTodo]
    updateIncompleteTodos(newIncompleteTodos)
    setInputTodo('')
  }

  //未完了エリア削るよ関数（リファクタリング）
  const incompleteSlice = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    updateIncompleteTodos(newIncompleteTodos)
  }

  const onClickDelete = (index) => {
    incompleteSlice(index)
  }

  const onClickToCompleteTodos = (index) => {
    incompleteSlice(index)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    updateCompleteTodos(newCompleteTodos)
  }

    const onClickToBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)
    
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    updateCompleteTodos(newCompleteTodos)
    updateIncompleteTodos(newIncompleteTodos)
    }
 

  return (
    <>
      <div className="input-area">
        <input placeholder='TODO入力' value={inputTodo} onChange={InputTodos} />
        <button onClick={onClickInputTodos}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
          <div key={index} className="list-row">
            <li>{todo}</li>
            <button onClick={() =>{onClickToCompleteTodos(index)}}>完了</button>
            <button onClick={() =>{onClickDelete(index)}} >削除</button>
          </div>
            )})}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
        {completeTodos.map((todo, index) => {
            return (
          <div key={index} className="list-row">
            <li>{todo}</li>
            <button onClick={() => {onClickToBack(index)}}>戻る</button>
          </div>
            )})}
        </ul>
      </div>
    </>
  );
};
