// Register.js
import React, { useState } from "react";
import "../index.css";
// import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const { signup, isLoading, error } = useSignup(); // Ensure that you call the useSignup function

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password, role);
  };
  return (
    <div>
      <div className="background-image"></div>
      <div className="container centered">
        <h2>Register</h2>
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
            <label>Username</label>
            <input
            
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="input-group">
            <label>Role</label>
            <input
              onChange={(e) => setRole(e.target.value)}
              value={role}
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
          {/* Link the button to the dashboard route */}
          <button className="button" disabled={isLoading}>
            SignUp
          </button>
          {error && <div className="error"> {error} </div>}{" "}
          {/* Use 'error' variable here instead of 'Error' */}
        </form>
      </div>
    </div>
  );
};

export default Register;
