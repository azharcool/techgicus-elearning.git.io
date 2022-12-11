import React from "react";

function FormGroup(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        className="input-classname"
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
      />
    </div>
  );
}

export default FormGroup;
