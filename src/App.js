import "./App.css";
import ColorButton from "./components/ColorButton";
import Button from "./components/Button";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    console.log("state 상태 업데이트");
  }, [btn]);

  const [color, setColor] = useState("yellow");
  let changeColor = (color) => {
    setColor(color);
  };
  useEffect(() => {
    console.log("state 업데이트!!!");
  }, [color]);

  // map 함수 사용
  const num = [1, 2, 3];
  let result = num.map(function (n) {
    console.log(n); // 1,2,3
    return n * 2;
  });
  console.log(result);

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
      <h2>Color App</h2>
      <p>버튼을 누르면 박스 컬러가 변경되게 하기(useState 활용)</p>
      <div className="colorBox" style={{ backgroundColor: color }}>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("blue")}>blue</button>
      </div>
      <p>{changeColor}</p>
      <PostMap />
      <Like />
    </div>
  );
}

// 컴포넌트를 만들고 App 컴포넌트에 추가한다. 맨 아래 export는 App만 입력하기
function PostMap() {
  // map 함수를 이용해 jsx에서 html 반복하기
  const posts = ["첫번째 글", "두번째 글", "세번째 글"];

  return (
    <div>
      <h2>map(함수)으로 반복하기</h2>
      {/* <p>jsx에서는 반복문을 for은 사용할 수 없고 map으로만 사용가능하다</p> */}
      {/* 자바스크립트를 사용하기 위해서는 {} 중괄호가 필요함 html 안에서 jsx 사용하기  */}
      {posts.map((post, i) => {
        console.log(post);
        return (
          <p key={i}>
            {i}.{post}
          </p>
        );
      })}
      {/* 이렇게 하면 return전에 변수를 선언하지 않고 html 안에서 바로 사용가능 */}
    </div>
  );
}

// '좋아요'버튼 누르면 숫자를 1개씩 증가시키기
function Like() {
  // state 상태 설정
  const [likes, setLike] = useState([0, 0, 0]);

  // 좋아요 버튼 함수
  const btnLike = (i) => {
    let copy = [...likes]; // likes의 배열 복사
    copy[i] += 1; // 클릭한 버튼의 번호 증가
    setLike(copy);
  };

  return (
    <div>
      <h2>map()함수를 통해 '좋아요'버튼 누르면 숫자를 1개씩 증가시키기 </h2>
      {likes.map((like, i) => {
        console.log(like);
        return (
          <div className="likeStyle">
            <button onClick={() => btnLike(i)}>좋아요</button>
            <span>&nbsp;{likes[i]}</span>
          </div>
          // onclick 안에서 함수실행
        );
      })}
    </div>
  );
}

export default App;
