import React from "react";

function FormGroup(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} />
    </div>
  );
}

export default FormGroup;
