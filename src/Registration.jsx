import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./App.css";

const Registration = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserSurname, setNewUserSurname] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [isError, setIsError] = useState("");

  const showPassword = () => {
    let invisPass = document.getElementById("password");
    if (invisPass.type === "password") {
      invisPass.type = "text";
    } else {
      invisPass.type = "password";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      newUserName,
      newUserSurname,
      newUserEmail,
      newPasswordConfirm,
      newUserPassword
    );
  };
  const handleName = (e) => {
    setNewUserName(e.target.value);
  };
  const handleSurname = (e) => {
    setNewUserSurname(e.target.value);
  };
  const handleEmail = (e) => {
    setNewUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setNewUserPassword(e.target.value);
  };
  const handlePassChecker = (e) => {
    setNewPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    let password = document.getElementById("password");
    let confirmationPassword = document.getElementById("confirmationPassword");
    if (newUserPassword !== newPasswordConfirm) {
      password.style.color = "red";
      confirmationPassword.style.color = "red";
      setIsError("Passwords didnt match");
    } else {
      password.style.color = "black";
      confirmationPassword.style.color = "black";
      setIsError("");
    }
  }, [newUserPassword, newPasswordConfirm]);

  const handleClose = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="register-form">
      <Typography variant="h6" noWrap component="div">
        Enter Your Credentials
      </Typography>
      <div className="login-field">
        <TextField
          label="Name"
          require
          variant="filled"
          value={newUserName}
          onChange={handleName}
        />
      </div>
      <div className="login-field">
        <TextField
          label="Surname"
          variant="filled"
          required
          value={newUserSurname}
          onChange={handleSurname}
        />
      </div>
      <div className="login-field">
        <TextField
          label="Email"
          required
          type="email"
          variant="filled"
          value={newUserEmail}
          onChange={handleEmail}
        />
      </div>
      <div className="login-field">
        <TextField
          label="Password"
          required
          type="password"
          id="password"
          variant="filled"
          value={newUserPassword}
          onChange={handlePassword}
        />
      </div>
      <Button variant="outlined" onClick={showPassword}>
        Show Password
      </Button>
      <div className="login-field">
        <TextField
          label="Repeat Password"
          variant="filled"
          required
          id="confirmationPassword"
          type="password"
          value={newPasswordConfirm}
          onChange={handlePassChecker}
        />
      </div>
      <div style={{ paddingBottom: "15px", color: "red" }}>{isError}</div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <Button onClick={(e) => handleClose(e)}>Cancel</Button>
    </div>
  );
};

export default Registration;
