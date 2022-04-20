import React, { useState } from "react";
import { Button, Container, Input, InputLabel } from "@mui/material";
import "./App.css";
const LoginPage = () => {
  const handleSubmit = (e) => {
    console.log(user.name, user.password);
  };
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleUserName = (event) => {
    setUser({ name: event.target.value });
  };
  const handlePassword = (event) => {
    setUser({ password: event.target.value });
  };

  return (
    <form className="login-form">
      <Container style={{ paddingTop: "65px" }}>
        <h2>Enter Your Login</h2>
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
          <h2>Enter Your Password</h2>
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
      </Container>
    </form>
  );
};
export default LoginPage;
