import React, { useEffect, useState } from "react";

import Background from "../../components/background";
import Button from "../../components/button";
import FormGroup from "../../components/form/FormGroup";
import SocialLogin from "../../components/social";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  // Destructing -> extract the values one by one from array and object
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const navigate = useNavigate();

  console.clear();
  // console.log(navigate());

  const onChangeUserHandler = (e) => {
    const value = e.target.value;
    setUser(value);
  };

  const onChangePassHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <Background>
      <div className="card">
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // validation
            // const isUser = user.length === 0;
            const isUser = user.trim() === ""; //trim() is used to remove the space
            const isPass = password.trim() === "";

            if (isUser) {
              setUserErr("Please, enter your username");
            }

            if (isPass) {
              setPassErr("Please, enter your password");
            }

            if (userErr) {
              setUserErr("");
            }

            if (passErr) {
              setPassErr("");
            }

            if (isUser === false && isPass === false) {
              // navigate to home
              navigate("/home", {
                replace: true
              })
            }
          }}
        >
          <FormGroup
            label="Username"
            type="text"
            id="username"
            name="username"
            onChange={onChangeUserHandler}
            error={userErr}
          />
          <FormGroup
            label="Password"
            type="password"
            id="password"
            name="password"
            onChange={onChangePassHandler}
            error={passErr}
          />
          <div className="forgot-link">
            <a href="/forgot">forgot Password</a>
          </div>
          <Button label="login" type="submit" />
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
