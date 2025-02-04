import React from "react";

const Input = (props) => {
  let className = "";

  if (props.isWrong) {
    className = "error";
  } else if (props.isUnlocked) {
    className = "success";
  }

  return (
    <div id="input-container">
      <input
        disabled
        type="password"
        className={className}
        value={props.value}
      />
    </div>
  );
};

export default Input;
