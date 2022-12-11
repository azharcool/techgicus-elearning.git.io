import React from "react";

function Button(props) {
  return (
    <div className="login-btn">
      <button type="submit" onClick={(e) => {
        console.log('ee',e);
      }}>{props.label}</button>
    </div>
  );
}

export default Button;
