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
      {props.error.length > 0 && (
        <span style={{ color: "#EB455F", fontSize: 15, paddingLeft: 5 }}>
          {props.error}
        </span>
      )}
    </div>
  );
}

export default FormGroup;
