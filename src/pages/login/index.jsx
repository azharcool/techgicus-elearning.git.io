import React, { useEffect, useState } from "react";

import Background from "../../components/background";
import Button from "../../components/button";
import FormGroup from "../../components/form/FormGroup";
import SocialLogin from "../../components/social";
import "./login.css";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    console.log({ e });
    const inputName = e.target.name; // username, password
    const inputValue = e.target.value; // azhar. ap

    setForm((prev) => {
      console.log("user>>", prev);
      return {
        ...prev,
        [inputName]: inputValue, // pass or username
      };
    });
  };

  return (
    <Background>
      <div className="card">
        <h1>Login</h1>
        <form>
          <FormGroup
            label="Username"
            type="text"
            id="username"
            name="username"
            onChange={onChangeHandler}
          />
          <FormGroup
            label="Password"
            type="password"
            id="password"
            name="password"
            onChange={onChangeHandler}
          />
          <div className="forgot-link">
            <a href="/forgot">forgot Password</a>
          </div>
          <Button label="login" />
        </form>
        <SocialLogin />
        <div className="create-account-wrapper">
          <a href="/signup">
            <span>create an account</span>
          </a>
        </div>
      </div>
    </Background>
  );
}

export default Login;
