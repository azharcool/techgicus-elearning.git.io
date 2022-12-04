import React from "react";
import Background from "../../components/background";
import Button from "../../components/button";
import SocialLogin from "../../components/social";
import FormGroup from "../../components/form/FormGroup";

function Signup() {
  return (
    <Background>
      <div className="card">
        <h1>Sign Up</h1>
        <form>
          <FormGroup label="Username" type="text" />
          <FormGroup label="Email" type="email" />
          <FormGroup label="Password" type="password" />

          <div className="forgot-link">
            <a href="/">forgot Password</a>
          </div>

          <Button label="Sign Up" />
        </form>

        <SocialLogin />

        <div className="create-account-wrapper">
          <a href="/">
            <span>create an account</span>
          </a>
        </div>
      </div>
    </Background>
  );
}

export default Signup;
