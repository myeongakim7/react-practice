import "./App.css";
import ColorButton from "./components/ColorButton";
import Button from "./components/Button";

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
    </div>
  );
}

export default App;
