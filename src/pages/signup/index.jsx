import React, { useState } from "react";
import Background from "../../components/background";
import Button from "../../components/button";
import SocialLogin from "../../components/social";
import FormGroup from "../../components/form/FormGroup";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
    setNameErr("");
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailErr("");
  };

  const onChangePass = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordErr("");
  };

  return (
    <Background>
      <div className="card">
        <h1>Sign Up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.clear();

            const isNameEmpty = name.trim() === ""; // triple equals -> check type and value
            const isEmailEmpty = email.trim() === "";
            const isPassEmpty = password.trim() === "";

            if (isNameEmpty) {
              setNameErr("Please, Enter your name");
            }

            if (isEmailEmpty) {
              setEmailErr("Please, Enter your mail address");
            }

            if (isPassEmpty) {
              setPasswordErr("Please, Enter your password");
            }

            if (!isEmailEmpty && !isNameEmpty && !isPassEmpty) {
              setIsLoading(true);
              // Web Api -> async
              setTimeout(() => {
                navigate("/login");
                setIsLoading(false);
              }, 2000);
            }

            // console.log({ isNameEmpty });
          }}
        >
          <FormGroup
            label="Name"
            type="text"
            name="name"
            onChange={onChangeName}
            error={nameErr}
            value={name}
          />
          <FormGroup
            label="Email"
            type="email"
            name="username"
            onChange={onChangeEmail}
            error={emailErr}
            value={email}
          />
          <FormGroup
            label="Password"
            type="password"
            name="username"
            onChange={onChangePass}
            error={passwordErr}
            value={password}
          />

          <Button label="Sign Up" />
        </form>

        <SocialLogin />

        <div className="create-account-wrapper">
          <a href="/">
            <span>create an account</span>
          </a>
        </div>
      </div>
      {isLoading && <Loader />}
    </Background>
  );
}

export default Signup;
