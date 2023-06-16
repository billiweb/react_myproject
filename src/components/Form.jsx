import React from 'react'
import { useState } from "react"

const Form = (props) => {
    // 상위 Layout 에서 props 로 받아오기
    const { lists, setLists} = props;

    // state 설정
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  // title 입력 폼
  const TitleHandler = (event) => {
    setTitle(event.target.value);
  };

  // todo 입력 폼
  const TodoHandler = (event) => {
    setTodo(event.target.value);
  }; 

 // 추가 버튼 클릭시 todoList 출력
 const AddListHandler = () => {
  const addList = {
    id: lists.length + 1,
    title: title,
    todo: todo,
    isDone: false,
  };
  setLists([...lists, addList]);
  setTitle("");
  setTodo("");
  alert("My Todo List 추가 완료😀");
};

  return (
    <div>
      <div className="input-section">
        <h3>제목</h3>
        <input type="text" value={title} onChange={TitleHandler}></input>
        <h3>내용</h3>
        <input type="text" value={todo} onChange={TodoHandler}></input>
        <button className="input-btn-style" onClick={AddListHandler}>
          추가하기
        </button>
      </div>
    </div>
  );
}

export default Form;
