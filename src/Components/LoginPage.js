import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../api/api-users";
import "./styles/Login.css";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameTextfieldChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordTextfieldChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    login(username, password).then((userID) => {
      if (userID === "Username or Password incorrect.") {
        alert("Username or Password incorrect");
      } else {
        props.setUserID(userID);
      }
    });
  }

  return (
    <div className="background">
      <div className="center">
        <h1>Login for great Sceduling</h1>
        <TextField
          className="loginContent"
          label="Username"
          onChange={handleUsernameTextfieldChange}
        ></TextField>
        <TextField
          className="loginContent"
          label="Password"
          onChange={handlePasswordTextfieldChange}
        ></TextField>
        <Button
          className="loginContent"
          variant="outlined"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
