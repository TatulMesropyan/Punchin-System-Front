import React, { useState } from "react";
import { Avatar, Button, Container, Input, InputLabel,Grid } from "@mui/material";
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
      <Container sx={{ paddingTop: "65px" }}>
        <h2>Enter Your Login</h2>
        <Grid className="login-block">
          <InputLabel className="login-label">Login</InputLabel>
          <Input
            required
            type="text"
            className="login-input"
            value={user.name}
            onChange={handleUserName}
          ></Input>
        </Grid>
        <Grid className="pass-block">
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
        </Grid>
        <Grid>
          <Button onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Container>
    </form>
  );
};
export default LoginPage;
