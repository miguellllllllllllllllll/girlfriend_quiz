import React from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.onButtonClick(props.value)}>
      {props.value}
    </button>
  );
};

export default Button;
