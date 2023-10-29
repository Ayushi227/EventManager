// Register.js
import React, { useState } from "react";
import "../index.css";
// import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email,password)
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="background-image"></div>
      <div className="container centered">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {/* <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" /> */}
          {/* </div> */} {/* Link the button to the dashboard route */}
          <button className="button" disabled={isLoading}>
            Login
          </button>
          {error && <div className="error"> {error} </div>}{" "}
        </form>
      </div>
    </div>
  );
};

export default Login;
