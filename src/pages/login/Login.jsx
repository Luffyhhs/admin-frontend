import React, { useState } from "react";
import "./login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dummy_data = {
    email: "heinhtetsoe@gmail.com",
    password: "hhs2566",
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === dummy_data.email && password === dummy_data.password) {
      setEmail("");
      setPassword("");
      props.login(true);
    } else {
      alert("Invalid email or password");
      setEmail("");
      setPassword("");
      props.login(false);
    }
  };

  return (
    <div className="login">
      <div className="login__form">
        <form onSubmit={submitHandler}>
          <h3>Sign In</h3>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={emailHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={passwordHandler}
          />
          <button className="btn btn--animated">Login</button>
        </form>
        <p className="login__footer">
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
