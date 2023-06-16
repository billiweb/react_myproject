import React from 'react'
import { useState } from "react"

const Lists = (props) => {
    // 상위 Layout 에서 props 로 받아오기
    const { lists, setLists} = props;

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
    <div>
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
  )
}

export default Lists