import React from "react";

function Button(props) {
  // props 분할대입
  let { color, fonts } = props;
  let style = {
    backgroundColor: color,
    color: fonts,
    border: "none",
    padding: "5px",
  };
  return (
    <div>
      <button style={style}>Button</button>
    </div>
  );
}

export default Button;
