import "./App.css";
import ColorButton from "./components/ColorButton";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let name = "김명아";
  const list = (
    <ul>
      <li>김밥</li>
      <li>떡볶이</li>
      <li>순대</li>
    </ul>
  );
  let userInfo = {
    name: "루피",
    address: "뽀로로마을",
  };
  let click = () => {
    alert("함수 실행");
  };
  let myStyle = {
    color: "red",
    textDecoration: "underline",
  };
  let myStyle2 = {
    backgroundColor: "green",
    border: "none",
    color: "#fff",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
  };
  let count = 0;
  let addCount = () => {
    count++;
    console.log(count);
  };
  // useState
  // const [ 변수명, 변경함수명 ] = useState(초기값);
  const [btn, setBtn] = useState(0);
  let addBtn = () => {
    setBtn(btn + 1);
    console.log(btn);
  };
  return (
    <div className="App">
      <p>안녕하세요. 저의 이름은 {name}입니다</p>
      <p>{list}</p>
      <p>
        {userInfo.name}는 {userInfo.address}에 살아요
      </p>
      <button onClick={click}>버튼</button>
      <h1 style={{ color: "blue" }}>Hello</h1>
      <h2 style={myStyle}>안녕하세요</h2>
      <button style={myStyle2}>Button</button>
      <div className="image"></div>
      <ColorButton color="red" fonts="white" text="구매하기" />
      <ColorButton color="green" fonts="white" text="장바구니" />
      <ColorButton color="yellow" fonts="navy" text="장바구니" />
      <ColorButton color="purple" fonts="white" text="구매하기" />
      <Button color="pink" fonts="white" />
      <h4>
        useState가 필요한 이유 => 밑에처럼 하면 ui에 나타나지 않음(콘솔창에서만
        버튼 누르면 숫자 상승)
      </h4>
      <p>{count}</p>
      <button onClick={addCount}>button</button>
      <h4>useState 사용으로 버튼 누르면 숫자 상승 </h4>
      <p>{btn}</p>
      <button onClick={addBtn}>UP</button>
      {/* 실행 할 함수를 {}에 넣기*/}
    </div>
  );
}

export default App;
