import React from "react";
import { Group } from "../../assets/svg";

function Background(props) {
  return (
    <div className="login-wrapper">
      {props.children}
      <Group wt="800" ht="800" />
    </div>
  );
}

export default Background;
