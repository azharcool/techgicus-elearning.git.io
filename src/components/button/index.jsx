import React from "react";

function Button(props) {
  return (
    <div className="login-btn">
      <button>{props.label}</button>
    </div>
  );
}

export default Button;
