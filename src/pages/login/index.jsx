import React from "react";

import Background from "../../components/background";
import Button from "../../components/button";
import FormGroup from "../../components/form/FormGroup";
import SocialLogin from "../../components/social";
import "./login.css";

function Login() {
  return (
    <Background>
      <div className="card">
        <h1>Login</h1>
        <form>
          <FormGroup label="Username" type="text" />
          <FormGroup label="Password" type="password" />
          
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

// without values -> boolean pro

export default Login;
