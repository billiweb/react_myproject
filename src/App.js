import React, { useState } from "react";
import "./App.css";


function App() {
  // 기본 배열 state 설정
  const [lists, setLists] = useState([
    { id: 0, title: "React 공부", todo: "스파르타 1주차 완강하기", isDone: true },
    { id: 1, title: "JS 공부", todo: "혼공스 책 다시보기", isDone: true },
    { id: 2, title: "체력관리", todo: "하루 20분 걷기", isDone: false },
  ]);

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

// 삭제 버튼 클릭시 box 삭제
const RemoveListHandler = (id) => {
  const deleteBtn = lists.filter((lists) => lists.id !== id);
  setLists(deleteBtn);
};


// 완료 & 취소 버튼 클릭시 box 이동
  const FinishedHandler = (id) => {
    const finishedBtn = lists.map((lists) => {
      if (lists.id === id) {
        return {...lists, isDone: !lists.isDone};
      } else {
      return lists
      }}
    );
    setLists(finishedBtn)
    }

    

  return (
    <div className="body-style">
      <h1>My Todo List</h1>
      <div className="input-section">
        <h3>제목</h3>
        <input type="text" value={title} onChange={TitleHandler}></input>
        <h3>내용</h3>
        <input type="text" value={todo} onChange={TodoHandler}></input>
        <button className="input-btn-style" onClick={AddListHandler}>
          추가하기
        </button>
      </div>
      <div>
        {title}
        {todo}
      </div>

      <h3>Working 🔥</h3>
      <div className="list-style">
        {lists
          .filter((lists) => lists.isDone !== true)
          .map(function (item) {
            return (
              <div key={item.id} className="box-style">
                <p className="title-style">{item.title}</p>
                <p className="todo-style">{item.todo}</p>
                <div className="btn-style">
                <button onClick={() => RemoveListHandler(item.id)}>삭제</button>
                <button onClick={() => FinishedHandler(item.id)}>완료</button>
                </div>
              </div>
            );
          })}
      </div>

      <h3>Done ✅</h3>
      <div className="list-style">
        {lists
          .filter((lists) => lists.isDone === true)
          .map(function (item) {
            return (
              <div key={item.id} className="box-style">
                <p className="title-style">{item.title}</p>
                <p className="todo-style">{item.todo}</p>
                <div className="btn-style">
                <button onClick={() => RemoveListHandler(item.id)}>삭제</button>
                <button onClick={() => FinishedHandler(item.id)}>취소</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;


