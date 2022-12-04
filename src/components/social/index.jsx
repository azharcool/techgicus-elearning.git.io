import React from "react";
import { Apple, Facebook, Google } from "../../assets/svg"; // absolute path vs relative

function SocialLogin() {
  return (
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
  );
}

export default SocialLogin;
