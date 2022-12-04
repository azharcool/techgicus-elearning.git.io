import React from "react";
import { Apple, Facebook, Google, Group } from "../../assets/svg"; // absolute path vs relative
import "./login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="card">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="forgot-link">
            <a href="/">forgot Password</a>
          </div>

          <div className="login-btn">
            <button>login</button>
          </div>
        </form>

        <div className="social-icon">
          <a href="/">
            <Facebook />
          </a>

          <a href="/" className="google-icon">
            <Google />
          </a>

          <a href="/">
            <Apple />
          </a>
        </div>

        <div className="create-account-wrapper">
          <a href="/">
            <span>create an account</span>
          </a>
        </div>
      </div>

      <Group wt="800" ht="800" />
    </div>
  );
}

// without values -> boolean pro

export default Login;
