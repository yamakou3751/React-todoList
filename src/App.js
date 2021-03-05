import "./styles.css";
import React, { useState } from "react";
import InputTodo from './components/InputTodo'
import IncompleteTodos from './components/IncompleteTodos'
import CompleteTodos from './components/CompleteTodos'

export const App = () => {
  //state定義エリア
  const [inputTodo, setInputTodo] = useState('')
  const [incompleteTodos, updateIncompleteTodos] = useState([])
  const [completeTodos, updateCompleteTodos] = useState([])

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
    <InputTodo todos={inputTodo} onChange={InputTodos} onClick={onClickInputTodos} />
    <IncompleteTodos todos={incompleteTodos} onClickToCompleteTodos={onClickToCompleteTodos} onClickDelete={onClickDelete} />
    <CompleteTodos todos={completeTodos} onClick={onClickToBack} />
      
    </>
  );
};
