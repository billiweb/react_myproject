import { useState } from "react";
import Form from "./Form";
import Lists from "./Lists";

function Layout() {
  // 기본 배열 state 설정
  const [lists, setLists] = useState([
    { id: 0, title: "React 공부", todo: "스파르타 1주차 완강하기", isDone: true },
    { id: 1, title: "JS 공부", todo: "혼공스 책 다시보기", isDone: true },
    { id: 2, title: "체력관리", todo: "하루 20분 걷기", isDone: false },
  ]);

  return (
    <div>
      <Form lists={lists} setLists={setLists} />
      <Lists lists={lists} setLists={setLists} />
    </div>
  );
}

export default Layout;
