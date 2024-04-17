import React from "react";

function ColorChangeButton(props) {
  const color = props.color;
  const buttonClass = `button-${props.color}`;
  return (
    <button
      className={`${color} ${buttonClass}`}
      onClick={() => props.setColor(props.color)}
    >
      {props.color}
    </button>
  );
}

export default ColorChangeButton;
