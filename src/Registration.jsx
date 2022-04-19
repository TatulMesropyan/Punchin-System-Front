import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./App.css";

const Registration = () => {
  const [newUserName, setNewUserName] = useState("")
  const [newUserSurname, setNewUserSurname] = useState("")
  const [newUserEmail,setNewUserEmail] = useState("")
  const [newUserPassword,setNewUserPassword] = useState("")
  const [newPasswordConfirm,setNewPasswordConfirm] = useState("")
  const [isError, setIsError] = useState("");
  const [newUser,setNewUser] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
    passChecker:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name",newUserName)
    console.log("Surname",newUserSurname)
    console.log("Email",newUserEmail)
    console.log("Password",newUserPassword)
    console.log("Pass Checker",newPasswordConfirm)
  };
  const handleName = (e) => {
    setNewUserName(e.target.value);
  }
  const handleSurname = (e) => {
    setNewUserSurname(e.target.value)
    };
  const handleEmail = (e) => {
    setNewUserEmail(e.target.value)
  };
  const handlePassword = (e) => {
    setNewUserPassword(e.target.value)    
  };
  const handlePassChecker = (e) => {
    e.preventDefault();
    setNewPasswordConfirm(e.target.value)
    // console.log("Pass Checker",newPasswordConfirm)
    // console.log("Password",newUserPassword)
    if (newUserPassword !== newPasswordConfirm) {
      setIsError("Passwords didnt match");
      console.log("Passwords didnt match");
    } else {
      setIsError("Passords is ok");
    }
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
          variant="filled"
          value={newUserEmail}
          onChange={handleEmail}
        />
      </div>
      <div className="login-field">
        <TextField
          label="Password"
          required
          variant="filled"
          value={newUserPassword}
          onChange={handlePassword}
        />
      </div>
      <div className="login-field">
        <TextField
          label="Repeat Password"
          variant="filled"
          required
          value={newPasswordConfirm}
          onChange={handlePassChecker}
        />
      </div>
      <div style={{ padding: "15px" }}>{isError}</div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <Button onClick={""}>Cancel</Button>
    </div>
  );
};

export default Registration;
