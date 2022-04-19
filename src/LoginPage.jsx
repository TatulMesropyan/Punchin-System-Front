import React, { useState } from "react";
import { Avatar, Button, Input, InputLabel } from "@mui/material";
import "./App.css";
const LoginPage = () => {
  const handleSubmit = () => {
    console.log(user.name);
  };
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleUserName = (event) => {
    setUser({name:event.target.value});
  };
  const handlePassword = (event) =>{
    setUser({password:event.target.value})
  }

  return (
    <div className="login-form register">
      <h2>Please Enter Your Credentials</h2>
      <div className="user-box">
        <Avatar></Avatar>
        <div className="login-block">
          <InputLabel className="login-label">Login</InputLabel>
          <Input
            required
            type="text"
            className="login-input"
            value={user.name}
            onChange={handleUserName}
          ></Input>
        </div>
        <div className="pass-block">
          <InputLabel className="login-label">Password</InputLabel>
          <Input
          required
            type="password"
            className="login-input"
            value={user.password}
            onChange={handlePassword}
            id="pass"
          ></Input>
        </div>
        <div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
