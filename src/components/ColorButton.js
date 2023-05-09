import React from "react";

function ColorButton(props) {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.color,
          color: props.fonts,
          border: "none",
          content: props.text,
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default ColorButton;
